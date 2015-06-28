import Reflux from 'reflux';
import uuid from 'uuid';
import Immutable from 'immutable';
import TodoAction from '../actions/todoAction';

Reflux.Store = Reflux.createStore().constructor;

/**
 * @readonly
 * @type {string}
 */
const STORAGE_KEY = 'todos';

/**
 * TodoStore, 할 일 목록 데이터를 관리한다.
 */
class TodoStore extends Reflux.Store {

    /**
     * TodoStore의 생성자 메서드
     */
    constructor() {
        super();

        var todos = JSON.parse(localStorage.getItem(STORAGE_KEY));

        this._list = todos ? Immutable.fromJS(todos) : new Immutable.List();
        this.listenToMany(TodoAction);
    }

    /**
     * 할 일 목록을 반환한다.
     * @returns {Immutable.List|Object}
     */
    get list() {
        return this._list;
    }

    /**
     * addItem 액션의 리스너
     * 새로운 할 일을 추가한다.
     * @param {string} label
     */
    onAddItem(label) {
        this._updateTodoList(this._list.push(new Immutable.Map({
            id: uuid.v1(),
            label: label,
            completed: false
        })));
    }

    /**
     * toggleItem 액션의 리스너
     * 모든 할 일의 완료 상태를 토글한다.
     * @param {boolean} isCompleted
     */
    onToggleAll(isCompleted) {
        this._updateTodoList(this._list.map(t => t.set('completed', isCompleted)));
    }

    /**
     * toogleItem 액션의 리스너
     * 특정 할 일의 완료 상태를 토글한다.
     * @param {string|number} id
     */
    onToggleItem(id) {
        this._updateTodoList(this._list.update(
            this._list.findIndex(t => t.get('id') === id),
            t => t.set('completed', !t.get('completed'))
        ));
    }

    /**
     * updateItem 액션의 리스너
     * 특정 할 일을 갱신한다.
     * @param {string|number} id
     * @param {string} label
     */
    onUpdateItem(id, label) {
        this._updateTodoList(this._list.update(
            this._list.findIndex(t => t.get('id') === id),
            t => t.set('label', label)
        ));
    }

    /**
     * removeItem 액션의 리스너
     * 특정 할 일을 제거한다.
     * @param {string|number} id
     */
    onRemoveItem(id) {
        this._updateTodoList(this._list.filter(t => t.get('id') !== id));
    }

    /**
     * clearCompleted 액션의 리스너
     * 완료한 할 일을 제거한다.
     */
    onClearCompleted() {
        this._updateTodoList(this._list.filter(t => !t.get('completed')));
    }

    /**
     * 새로운 할 일 목록으로 갱신하고 이벤트를 발생시킨다.
     * @param {Immutable.List|Object} list
     * @private
     */
    _updateTodoList(list) {
        this._list = list;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(list.toJS()));

        this.trigger(this._list);
    }
}

let todoStore = new TodoStore();
export default todoStore;

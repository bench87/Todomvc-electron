import React from 'react';
import TodoItem from './todoItem';
import classnames from 'classnames';

class TodoList extends React.Component {

    /**
     * TodoList 컴포넌트를 렌더링한다.
     * @returns {XML}
     */
    render() {
        var classes = classnames('main', {hidden: this.props.list.size === 0});
        var incompleted = this.props.list.filter(i => !i.get('completed'));
        var todos = this.props.list.map((todo) => {
            return (<TodoItem {...this.props} key={todo.get('id')} item={todo} />);
        });

        return (
            <section className={classes}>
                <input className="toggle-all" type="checkbox"
                       checked={incompleted.size === 0}
                       onChange={this._onChange.bind(this)}/>
                <label htmlFor="toggle-all">Mark all as complete</label>
                <ul className="todo-list">
                    {todos}
                </ul>
            </section>
        );
    }

    /**
     * checkbox 엘리먼트의 change 이벤트 리스너
     * @param {SyntheticMouseEvent|MouseEvent} event
     * @private
     */
    _onChange(event) {
        if (this.props.onToggleAll) {
            this.props.onToggleAll(event.target.checked);
        }
    }
}

/**
 * TodoList의 Props 정의
 * @property {Immutable.List|Object} list
 * @property {?function} onToggleAll
 */
TodoList.propTypes = {
    list: React.PropTypes.object.isRequired,
    onToggleAll: React.PropTypes.func
};

export default TodoList;

import React from 'react';
import {RouteHandler} from 'react-router';
import TodoAction from '../actions/todoAction';
import TodoStore from '../stores/todoStore';
import TodoHeader from './todoHeader';
import TodoFooter from './todoFooter';

class TodoHome extends React.Component {

    /**
     * TodoHome 컴포넌트의 생성자 메서드
     */
    constructor() {
        super();

        this.state = {
            list: TodoStore.list
        };
    }

    /**
     * TodoHome 컴포넌트가 DOM에 추가될 때 호출되는 메서드
     * TodoStore의 상태 변화를 구독한다.
     */
    componentDidMount() {
        TodoStore.listen((todos) => {
            this.setState({list: todos});
        });
    }

    /**
     * TodoHome 컴포넌트를 렌더링한다.
     * @returns {XML}
     */
    render() {
        var pathname = this.context.router.getCurrentPathname();
        var list = TodoStore.list;

        if (pathname === '/completed') {
            list = TodoStore.list.filter(i => i.get('completed'));
        }

        if (pathname === '/active') {
            list = TodoStore.list.filter(i => !i.get('completed'));
        }

        return (
            <div>
                <TodoHeader onCreate={TodoAction.addItem} />
                <RouteHandler
                    list={list}
                    onToggle={TodoAction.toggleItem}
                    onToggleAll={TodoAction.toggleAll}
                    onUpdate={TodoAction.updateItem}
                    onRemove={TodoAction.removeItem}
                />
                <TodoFooter list={TodoStore.list} onClearCompleted={TodoAction.clearCompleted}/>
            </div>
        );
    }
}

/**
 * TodoHome의 contextTypes 정의
 * @property {function} router
 */
TodoHome.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default TodoHome;

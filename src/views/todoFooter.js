import React from 'react';
import Router from 'react-router';
import classnames from 'classnames';

class TodoFooter extends React.Component {

    /**
     * TodoFooter 컴포넌트를 렌더링한다.
     * @returns {XML}
     */
    render() {
        var classes = classnames('footer', {hidden: this.props.list.size === 0});
        var incompleted = this.props.list.filter(i => !i.get('completed'));
        var plural = incompleted.size > 1 ? 'items' : 'item';

        return (
            <footer className={classes}>
                <span className="todo-count">
                    <strong>{incompleted.size}</strong>
                    <span>{` ${plural} left`}</span>
                </span>
                <ul className="filters">
                    <li><Router.Link activeClassName="selected" to="/">All</Router.Link></li>
                    <li><Router.Link activeClassName="selected" to="/active">Active</Router.Link></li>
                    <li><Router.Link activeClassName="selected" to="/completed">Completed</Router.Link></li>
                </ul>
                <button className="clear-completed" onClick={this.props.onClearCompleted}>Clear completed</button>
            </footer>
        );
    }
}

/**
 * TodoFooter의 Props 정의
 * @property {Immutable.List|Object} list
 * @property {?function} onClearCompleted
 */
TodoFooter.propTypes = {
    list: React.PropTypes.object.isRequired,
    onClearCompleted: React.PropTypes.func
};

export default TodoFooter;

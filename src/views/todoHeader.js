import React from 'react';
import addons from 'react-addons';
import mixin from 'react-mixin';
import {KeyEvent} from '../keyEvent';

class TodoHeader extends React.Component {

    /**
     * @param {TodoHeader.propTypes} props
     */
    constructor(props) {
        super(props);

        this.state = {
            label: ''
        };
    }

    /**
     * @returns {XML}
     */
    render() {
        return (
            <header className="header">
                <h1>todos</h1>
                <input
                    className="new-todo"
                    placeholder="What needs to be done?"
                    valueLink={this.linkState('label')}
                    onKeyUp={this._onKeyUp.bind(this)}
                    autoFocus
                />
            </header>
        );
    }

    /**
     * input 엘리먼트의 keyup 이벤트 리스너
     * @param {SyntheticKeyboardEvent|KeyboardEvent} event
     * @private
     */
    _onKeyUp(event) {
        if (event.keyCode === KeyEvent.DOM_VK_RETURN && this.state.label !== '') {
            this.setState({label: ''});

            if (this.props.onCreate) {
                this.props.onCreate(this.state.label);
            }
        }
    }
}

// setting up mixin's of TodoHeader
mixin(TodoHeader.prototype, addons.LinkedStateMixin);

/**
 * TodoHeader의 Props 정의
 * @property {?function} onCreate
 */
TodoHeader.propTypes = {
    onCreate: React.PropTypes.func
};

export default TodoHeader;

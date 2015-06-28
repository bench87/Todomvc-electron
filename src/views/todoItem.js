import React from 'react';
import addons from 'react-addons';
import mixin from 'react-mixin';
import classnames from 'classnames';
import {KeyEvent} from '../keyEvent';

/**
 * TodoItem 컴포넌트,
 * 하나의 할 일을 나타낸다.
 */
class TodoItem extends React.Component {

    /**
     * TodoItem 컴포넌트의 생성자 메서드
     * @param {TodoItem.propTypes} props
     */
    constructor(props) {
        super(props);

        this.state = {
            label: '',
            editing: false
        };
    }

    /**
     * TodoItem 컴포넌트가 갱신되기 전 호출되는 메서드
     * @param {TodoItem.propTypes} nextProps
     * @param {{label: string, edting: boolean}} nextState
     * @returns {boolean}
     */
    shouldComponentUpdate(nextProps, nextState) {
        return (
            this.props.item !== nextProps.item ||
            this.state.label !== nextState.label ||
            this.state.editing !== nextState.editing
        );
    }

    /**
     * TodoItem 컴포넌트가 갱신되고 난 후 호출되는 메서드
     * 수정용 input 엘리먼트에 포커싱한다.
     */
    componentDidUpdate() {
        if (this.state.editing) {
            React.findDOMNode(this.refs.input).focus();
        }
    }

    /**
     * TodoItem 컴포넌트를 랜더링한다.
     * @returns {XML}
     */
    render() {
        var item = this.props.item.toObject();
        var classes = classnames({
            completed: item.completed,
            editing: this.state.editing
        });

        return (
            <li className={classes}>
                <div className="view">
                    <input className="toggle" type="checkbox"
                           onChange={this._onChangeCheckbox.bind(this)}
                           checked={item.completed} />
                    <label onDoubleClick={this._onDoubleClickLabel.bind(this)}>{item.label}</label>
                    <button className="destroy" onClick={this._onClickButton.bind(this)}></button>
                </div>
                <input ref="input" className="edit"
                       valueLink={this.linkState('label')}
                       onKeyUp={this._onKeyUpInput.bind(this)}
                       onBlur={this._onBlurInput.bind(this)}/>
            </li>
        );
    }

    /**
     * checkbox 엘리먼트의 change 이벤트 리스너
     * TodoItem 컴포넌트의 완료/미완료 상태를 토글한다.
     * @private
     */
    _onChangeCheckbox() {
        if (this.props.onToggle) {
            this.props.onToggle(this.props.item.get('id'));
        }
    }

    /**
     * label 엘리먼트의 doubleClick 이벤트 리스너
     * 수정 모드로 전환한다.
     * @private
     */
    _onDoubleClickLabel() {
        this.setState({editing: true, label: this.props.item.get('label')});
    }

    /**
     * input 엘리먼트의 keyUp 이벤트 리스너
     * ESC 키 입력: 수정 모드를 빠져나간다.
     * ENTER 키를 입력: label 값을 갱신한다.
     * @param {SyntheticKeyboardEvent|KeyboardEvent} event
     * @private
     */
    _onKeyUpInput(event) {
        if (event.keyCode === KeyEvent.DOM_VK_ESCAPE) {
            event.target.blur();
        }

        if (event.keyCode === KeyEvent.DOM_VK_RETURN) {
            if (this.props.item.get('label') !== this.state.label) {
                if (this.props.onUpdate) {
                    this.props.onUpdate(this.props.item.get('id'), this.state.label);
                }
            }

            event.target.blur();
        }
    }

    /**
     * input 엘리먼트의 blur 이벤트 리스너
     * 수정 모드를 빠져나가고, label 값을 초기화한다.
     * @private
     */
    _onBlurInput() {
        this.setState({editing: false, label: this.props.item.get('label')});
    }

    /**
     * button 엘리먼트의 click 이벤트 리스너
     * TodoItem 컴포넌트를 삭제한다.
     * @private
     */
    _onClickButton() {
        if (this.props.onRemove) {
            this.props.onRemove(this.props.item.get('id'));
        }
    }
}

// setting up mixin's of TodoItem
mixin(TodoItem.prototype, addons.LinkedStateMixin);

/**
 * TodoItem의 Props 정의
 * @property {Immutable.Map|Object} item
 * @property {?function} onToggle
 * @property {?function} onUpdate
 * @property {?function} onRemove
 */
TodoItem.propTypes = {
    item: React.PropTypes.object.isRequired,
    onToggle: React.PropTypes.func,
    onUpdate: React.PropTypes.func,
    onRemove: React.PropTypes.func
};

export default TodoItem;

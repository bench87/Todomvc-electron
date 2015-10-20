(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

/**
 * Todo 컴포넌트의 Actions
 * @type {Object}
 */
var TodoAction = _reflux2['default'].createActions(['addItem', 'toggleAll', 'toggleItem', 'updateItem', 'removeItem', 'clearCompleted']);

exports['default'] = TodoAction;
module.exports = exports['default'];

},{"reflux":"Bec0/W"}],2:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _viewsTodoHome = require('./views/todoHome');

var _viewsTodoHome2 = _interopRequireDefault(_viewsTodoHome);

var _viewsTodoList = require('./views/todoList');

var _viewsTodoList2 = _interopRequireDefault(_viewsTodoList);

var Route = _reactRouter2['default'].Route;
var DefaultRoute = _reactRouter2['default'].DefaultRoute;

var routes = _react2['default'].createElement(
    Route,
    { handler: _viewsTodoHome2['default'] },
    _react2['default'].createElement(DefaultRoute, { name: 'All', handler: _viewsTodoList2['default'] }),
    _react2['default'].createElement(Route, { name: 'Completed', path: '/completed', handler: _viewsTodoList2['default'] }),
    _react2['default'].createElement(Route, { name: 'Active', path: '/active', handler: _viewsTodoList2['default'] })
);

_reactRouter2['default'].run(routes, function (Handler) {
    _react2['default'].render(_react2['default'].createElement(Handler, null), document.querySelector('.todoapp'));
});

},{"./views/todoHome":7,"./views/todoList":9,"react":"CwoHg3","react-router":"vYZgCY"}],3:[function(require,module,exports){
/**
 * @readonly
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var KeyEvent = {
    DOM_VK_CANCEL: 3,
    DOM_VK_HELP: 6,
    DOM_VK_BACK_SPACE: 8,
    DOM_VK_TAB: 9,
    DOM_VK_CLEAR: 12,
    DOM_VK_RETURN: 13,
    DOM_VK_ENTER: 14,
    DOM_VK_SHIFT: 16,
    DOM_VK_CONTROL: 17,
    DOM_VK_ALT: 18,
    DOM_VK_PAUSE: 19,
    DOM_VK_CAPS_LOCK: 20,
    DOM_VK_ESCAPE: 27,
    DOM_VK_SPACE: 32,
    DOM_VK_PAGE_UP: 33,
    DOM_VK_PAGE_DOWN: 34,
    DOM_VK_END: 35,
    DOM_VK_HOME: 36,
    DOM_VK_LEFT: 37,
    DOM_VK_UP: 38,
    DOM_VK_RIGHT: 39,
    DOM_VK_DOWN: 40,
    DOM_VK_PRINTSCREEN: 44,
    DOM_VK_INSERT: 45,
    DOM_VK_DELETE: 46,
    DOM_VK_0: 48,
    DOM_VK_1: 49,
    DOM_VK_2: 50,
    DOM_VK_3: 51,
    DOM_VK_4: 52,
    DOM_VK_5: 53,
    DOM_VK_6: 54,
    DOM_VK_7: 55,
    DOM_VK_8: 56,
    DOM_VK_9: 57,
    DOM_VK_SEMICOLON: 59,
    DOM_VK_EQUALS: 61,
    DOM_VK_A: 65,
    DOM_VK_B: 66,
    DOM_VK_C: 67,
    DOM_VK_D: 68,
    DOM_VK_E: 69,
    DOM_VK_F: 70,
    DOM_VK_G: 71,
    DOM_VK_H: 72,
    DOM_VK_I: 73,
    DOM_VK_J: 74,
    DOM_VK_K: 75,
    DOM_VK_L: 76,
    DOM_VK_M: 77,
    DOM_VK_N: 78,
    DOM_VK_O: 79,
    DOM_VK_P: 80,
    DOM_VK_Q: 81,
    DOM_VK_R: 82,
    DOM_VK_S: 83,
    DOM_VK_T: 84,
    DOM_VK_U: 85,
    DOM_VK_V: 86,
    DOM_VK_W: 87,
    DOM_VK_X: 88,
    DOM_VK_Y: 89,
    DOM_VK_Z: 90,
    DOM_VK_CONTEXT_MENU: 93,
    DOM_VK_NUMPAD0: 96,
    DOM_VK_NUMPAD1: 97,
    DOM_VK_NUMPAD2: 98,
    DOM_VK_NUMPAD3: 99,
    DOM_VK_NUMPAD4: 100,
    DOM_VK_NUMPAD5: 101,
    DOM_VK_NUMPAD6: 102,
    DOM_VK_NUMPAD7: 103,
    DOM_VK_NUMPAD8: 104,
    DOM_VK_NUMPAD9: 105,
    DOM_VK_MULTIPLY: 106,
    DOM_VK_ADD: 107,
    DOM_VK_SEPARATOR: 108,
    DOM_VK_SUBTRACT: 109,
    DOM_VK_DECIMAL: 110,
    DOM_VK_DIVIDE: 111,
    DOM_VK_F1: 112,
    DOM_VK_F2: 113,
    DOM_VK_F3: 114,
    DOM_VK_F4: 115,
    DOM_VK_F5: 116,
    DOM_VK_F6: 117,
    DOM_VK_F7: 118,
    DOM_VK_F8: 119,
    DOM_VK_F9: 120,
    DOM_VK_F10: 121,
    DOM_VK_F11: 122,
    DOM_VK_F12: 123,
    DOM_VK_F13: 124,
    DOM_VK_F14: 125,
    DOM_VK_F15: 126,
    DOM_VK_F16: 127,
    DOM_VK_F17: 128,
    DOM_VK_F18: 129,
    DOM_VK_F19: 130,
    DOM_VK_F20: 131,
    DOM_VK_F21: 132,
    DOM_VK_F22: 133,
    DOM_VK_F23: 134,
    DOM_VK_F24: 135,
    DOM_VK_NUM_LOCK: 144,
    DOM_VK_SCROLL_LOCK: 145,
    DOM_VK_COMMA: 188,
    DOM_VK_PERIOD: 190,
    DOM_VK_SLASH: 191,
    DOM_VK_BACK_QUOTE: 192,
    DOM_VK_OPEN_BRACKET: 219,
    DOM_VK_BACK_SLASH: 220,
    DOM_VK_CLOSE_BRACKET: 221,
    DOM_VK_QUOTE: 222,
    DOM_VK_META: 224
};

exports.KeyEvent = KeyEvent;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _actionsTodoAction = require('../actions/todoAction');

var _actionsTodoAction2 = _interopRequireDefault(_actionsTodoAction);

_reflux2['default'].Store = _reflux2['default'].createStore().constructor;

/**
 * @readonly
 * @type {string}
 */
var STORAGE_KEY = 'todos';

/**
 * TodoStore, 할 일 목록 데이터를 관리한다.
 */

var TodoStore = (function (_Reflux$Store) {
    _inherits(TodoStore, _Reflux$Store);

    /**
     * TodoStore의 생성자 메서드
     */

    function TodoStore() {
        _classCallCheck(this, TodoStore);

        _get(Object.getPrototypeOf(TodoStore.prototype), 'constructor', this).call(this);

        var todos = JSON.parse(localStorage.getItem(STORAGE_KEY));

        this._list = todos ? _immutable2['default'].fromJS(todos) : new _immutable2['default'].List();
        this.listenToMany(_actionsTodoAction2['default']);
    }

    /**
     * 할 일 목록을 반환한다.
     * @returns {Immutable.List|Object}
     */

    _createClass(TodoStore, [{
        key: 'onAddItem',

        /**
         * addItem 액션의 리스너
         * 새로운 할 일을 추가한다.
         * @param {string} label
         */
        value: function onAddItem(label) {
            this._updateTodoList(this._list.push(new _immutable2['default'].Map({
                id: _uuid2['default'].v1(),
                label: label,
                completed: false
            })));
        }

        /**
         * toggleItem 액션의 리스너
         * 모든 할 일의 완료 상태를 토글한다.
         * @param {boolean} isCompleted
         */
    }, {
        key: 'onToggleAll',
        value: function onToggleAll(isCompleted) {
            this._updateTodoList(this._list.map(function (t) {
                return t.set('completed', isCompleted);
            }));
        }

        /**
         * toogleItem 액션의 리스너
         * 특정 할 일의 완료 상태를 토글한다.
         * @param {string|number} id
         */
    }, {
        key: 'onToggleItem',
        value: function onToggleItem(id) {
            this._updateTodoList(this._list.update(this._list.findIndex(function (t) {
                return t.get('id') === id;
            }), function (t) {
                return t.set('completed', !t.get('completed'));
            }));
        }

        /**
         * updateItem 액션의 리스너
         * 특정 할 일을 갱신한다.
         * @param {string|number} id
         * @param {string} label
         */
    }, {
        key: 'onUpdateItem',
        value: function onUpdateItem(id, label) {
            this._updateTodoList(this._list.update(this._list.findIndex(function (t) {
                return t.get('id') === id;
            }), function (t) {
                return t.set('label', label);
            }));
        }

        /**
         * removeItem 액션의 리스너
         * 특정 할 일을 제거한다.
         * @param {string|number} id
         */
    }, {
        key: 'onRemoveItem',
        value: function onRemoveItem(id) {
            this._updateTodoList(this._list.filter(function (t) {
                return t.get('id') !== id;
            }));
        }

        /**
         * clearCompleted 액션의 리스너
         * 완료한 할 일을 제거한다.
         */
    }, {
        key: 'onClearCompleted',
        value: function onClearCompleted() {
            this._updateTodoList(this._list.filter(function (t) {
                return !t.get('completed');
            }));
        }

        /**
         * 새로운 할 일 목록으로 갱신하고 이벤트를 발생시킨다.
         * @param {Immutable.List|Object} list
         * @private
         */
    }, {
        key: '_updateTodoList',
        value: function _updateTodoList(list) {
            this._list = list;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(list.toJS()));

            this.trigger(this._list);
        }
    }, {
        key: 'list',
        get: function get() {
            return this._list;
        }
    }]);

    return TodoStore;
})(_reflux2['default'].Store);

var todoStore = new TodoStore();
exports['default'] = todoStore;
module.exports = exports['default'];

},{"../actions/todoAction":1,"immutable":"ZuzesG","reflux":"Bec0/W","uuid":"r7K6rn"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var TodoFooter = (function (_React$Component) {
    _inherits(TodoFooter, _React$Component);

    function TodoFooter() {
        _classCallCheck(this, TodoFooter);

        _get(Object.getPrototypeOf(TodoFooter.prototype), 'constructor', this).apply(this, arguments);
    }

    /**
     * TodoFooter의 Props 정의
     * @property {Immutable.List|Object} list
     * @property {?function} onClearCompleted
     */

    _createClass(TodoFooter, [{
        key: 'render',

        /**
         * TodoFooter 컴포넌트를 렌더링한다.
         * @returns {XML}
         */
        value: function render() {
            var classes = (0, _classnames2['default'])('footer', { hidden: this.props.list.size === 0 });
            var incompleted = this.props.list.filter(function (i) {
                return !i.get('completed');
            });
            var plural = incompleted.size > 1 ? 'items' : 'item';

            return _react2['default'].createElement(
                'footer',
                { className: classes },
                _react2['default'].createElement(
                    'span',
                    { className: 'todo-count' },
                    _react2['default'].createElement(
                        'strong',
                        null,
                        incompleted.size
                    ),
                    _react2['default'].createElement(
                        'span',
                        null,
                        ' ' + plural + ' left'
                    )
                ),
                _react2['default'].createElement(
                    'ul',
                    { className: 'filters' },
                    _react2['default'].createElement(
                        'li',
                        null,
                        _react2['default'].createElement(
                            _reactRouter2['default'].Link,
                            { activeClassName: 'selected', to: '/' },
                            'All'
                        )
                    ),
                    _react2['default'].createElement(
                        'li',
                        null,
                        _react2['default'].createElement(
                            _reactRouter2['default'].Link,
                            { activeClassName: 'selected', to: '/active' },
                            'Active'
                        )
                    ),
                    _react2['default'].createElement(
                        'li',
                        null,
                        _react2['default'].createElement(
                            _reactRouter2['default'].Link,
                            { activeClassName: 'selected', to: '/completed' },
                            'Completed'
                        )
                    )
                ),
                _react2['default'].createElement(
                    'button',
                    { className: 'clear-completed', onClick: this.props.onClearCompleted },
                    'Clear completed'
                )
            );
        }
    }]);

    return TodoFooter;
})(_react2['default'].Component);

TodoFooter.propTypes = {
    list: _react2['default'].PropTypes.object.isRequired,
    onClearCompleted: _react2['default'].PropTypes.func
};

exports['default'] = TodoFooter;
module.exports = exports['default'];

},{"classnames":"9qb7cV","react":"CwoHg3","react-router":"vYZgCY"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddons = require('react-addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _reactMixin = require('react-mixin');

var _reactMixin2 = _interopRequireDefault(_reactMixin);

var _keyEvent = require('../keyEvent');

var TodoHeader = (function (_React$Component) {
    _inherits(TodoHeader, _React$Component);

    /**
     * @param {TodoHeader.propTypes} props
     */

    function TodoHeader(props) {
        _classCallCheck(this, TodoHeader);

        _get(Object.getPrototypeOf(TodoHeader.prototype), 'constructor', this).call(this, props);

        this.state = {
            label: ''
        };
    }

    // setting up mixin's of TodoHeader

    /**
     * @returns {XML}
     */

    _createClass(TodoHeader, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(
                'header',
                { className: 'header' },
                _react2['default'].createElement(
                    'h1',
                    null,
                    'todos'
                ),
                _react2['default'].createElement('input', {
                    className: 'new-todo',
                    placeholder: 'What needs to be done?',
                    valueLink: this.linkState('label'),
                    onKeyUp: this._onKeyUp.bind(this),
                    autoFocus: true
                })
            );
        }

        /**
         * input 엘리먼트의 keyup 이벤트 리스너
         * @param {SyntheticKeyboardEvent|KeyboardEvent} event
         * @private
         */
    }, {
        key: '_onKeyUp',
        value: function _onKeyUp(event) {
            if (event.keyCode === _keyEvent.KeyEvent.DOM_VK_RETURN && this.state.label !== '') {
                this.setState({ label: '' });

                if (this.props.onCreate) {
                    this.props.onCreate(this.state.label);
                }
            }
        }
    }]);

    return TodoHeader;
})(_react2['default'].Component);

(0, _reactMixin2['default'])(TodoHeader.prototype, _reactAddons2['default'].LinkedStateMixin);

/**
 * TodoHeader의 Props 정의
 * @property {?function} onCreate
 */
TodoHeader.propTypes = {
    onCreate: _react2['default'].PropTypes.func
};

exports['default'] = TodoHeader;
module.exports = exports['default'];

},{"../keyEvent":3,"react":"CwoHg3","react-addons":"gUABXU","react-mixin":"i8MhWC"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _actionsTodoAction = require('../actions/todoAction');

var _actionsTodoAction2 = _interopRequireDefault(_actionsTodoAction);

var _storesTodoStore = require('../stores/todoStore');

var _storesTodoStore2 = _interopRequireDefault(_storesTodoStore);

var _todoHeader = require('./todoHeader');

var _todoHeader2 = _interopRequireDefault(_todoHeader);

var _todoFooter = require('./todoFooter');

var _todoFooter2 = _interopRequireDefault(_todoFooter);

var TodoHome = (function (_React$Component) {
    _inherits(TodoHome, _React$Component);

    /**
     * TodoHome 컴포넌트의 생성자 메서드
     */

    function TodoHome() {
        _classCallCheck(this, TodoHome);

        _get(Object.getPrototypeOf(TodoHome.prototype), 'constructor', this).call(this);

        this.state = {
            list: _storesTodoStore2['default'].list
        };
    }

    /**
     * TodoHome의 contextTypes 정의
     * @property {function} router
     */

    /**
     * TodoHome 컴포넌트가 DOM에 추가될 때 호출되는 메서드
     * TodoStore의 상태 변화를 구독한다.
     */

    _createClass(TodoHome, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this = this;

            _storesTodoStore2['default'].listen(function (todos) {
                _this.setState({ list: todos });
            });
        }

        /**
         * TodoHome 컴포넌트를 렌더링한다.
         * @returns {XML}
         */
    }, {
        key: 'render',
        value: function render() {
            var pathname = this.context.router.getCurrentPathname();
            var list = _storesTodoStore2['default'].list;

            if (pathname === '/completed') {
                list = _storesTodoStore2['default'].list.filter(function (i) {
                    return i.get('completed');
                });
            }

            if (pathname === '/active') {
                list = _storesTodoStore2['default'].list.filter(function (i) {
                    return !i.get('completed');
                });
            }

            return _react2['default'].createElement(
                'div',
                null,
                _react2['default'].createElement(_todoHeader2['default'], { onCreate: _actionsTodoAction2['default'].addItem }),
                _react2['default'].createElement(_reactRouter.RouteHandler, {
                    list: list,
                    onToggle: _actionsTodoAction2['default'].toggleItem,
                    onToggleAll: _actionsTodoAction2['default'].toggleAll,
                    onUpdate: _actionsTodoAction2['default'].updateItem,
                    onRemove: _actionsTodoAction2['default'].removeItem
                }),
                _react2['default'].createElement(_todoFooter2['default'], { list: _storesTodoStore2['default'].list, onClearCompleted: _actionsTodoAction2['default'].clearCompleted })
            );
        }
    }]);

    return TodoHome;
})(_react2['default'].Component);

TodoHome.contextTypes = {
    router: _react2['default'].PropTypes.func.isRequired
};

exports['default'] = TodoHome;
module.exports = exports['default'];

},{"../actions/todoAction":1,"../stores/todoStore":4,"./todoFooter":5,"./todoHeader":6,"react":"CwoHg3","react-router":"vYZgCY"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddons = require('react-addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _reactMixin = require('react-mixin');

var _reactMixin2 = _interopRequireDefault(_reactMixin);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _keyEvent = require('../keyEvent');

/**
 * TodoItem 컴포넌트,
 * 하나의 할 일을 나타낸다.
 */

var TodoItem = (function (_React$Component) {
    _inherits(TodoItem, _React$Component);

    /**
     * TodoItem 컴포넌트의 생성자 메서드
     * @param {TodoItem.propTypes} props
     */

    function TodoItem(props) {
        _classCallCheck(this, TodoItem);

        _get(Object.getPrototypeOf(TodoItem.prototype), 'constructor', this).call(this, props);

        this.state = {
            label: '',
            editing: false
        };
    }

    // setting up mixin's of TodoItem

    /**
     * TodoItem 컴포넌트가 갱신되기 전 호출되는 메서드
     * @param {TodoItem.propTypes} nextProps
     * @param {{label: string, edting: boolean}} nextState
     * @returns {boolean}
     */

    _createClass(TodoItem, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return this.props.item !== nextProps.item || this.state.label !== nextState.label || this.state.editing !== nextState.editing;
        }

        /**
         * TodoItem 컴포넌트가 갱신되고 난 후 호출되는 메서드
         * 수정용 input 엘리먼트에 포커싱한다.
         */
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            if (this.state.editing) {
                _react2['default'].findDOMNode(this.refs.input).focus();
            }
        }

        /**
         * TodoItem 컴포넌트를 랜더링한다.
         * @returns {XML}
         */
    }, {
        key: 'render',
        value: function render() {
            var item = this.props.item.toObject();
            var classes = (0, _classnames2['default'])({
                completed: item.completed,
                editing: this.state.editing
            });

            return _react2['default'].createElement(
                'li',
                { className: classes },
                _react2['default'].createElement(
                    'div',
                    { className: 'view' },
                    _react2['default'].createElement('input', { className: 'toggle', type: 'checkbox',
                        onChange: this._onChangeCheckbox.bind(this),
                        checked: item.completed }),
                    _react2['default'].createElement(
                        'label',
                        { onDoubleClick: this._onDoubleClickLabel.bind(this) },
                        item.label
                    ),
                    _react2['default'].createElement('button', { className: 'destroy', onClick: this._onClickButton.bind(this) })
                ),
                _react2['default'].createElement('input', { ref: 'input', className: 'edit',
                    valueLink: this.linkState('label'),
                    onKeyUp: this._onKeyUpInput.bind(this),
                    onBlur: this._onBlurInput.bind(this) })
            );
        }

        /**
         * checkbox 엘리먼트의 change 이벤트 리스너
         * TodoItem 컴포넌트의 완료/미완료 상태를 토글한다.
         * @private
         */
    }, {
        key: '_onChangeCheckbox',
        value: function _onChangeCheckbox() {
            if (this.props.onToggle) {
                this.props.onToggle(this.props.item.get('id'));
            }
        }

        /**
         * label 엘리먼트의 doubleClick 이벤트 리스너
         * 수정 모드로 전환한다.
         * @private
         */
    }, {
        key: '_onDoubleClickLabel',
        value: function _onDoubleClickLabel() {
            this.setState({ editing: true, label: this.props.item.get('label') });
        }

        /**
         * input 엘리먼트의 keyUp 이벤트 리스너
         * ESC 키 입력: 수정 모드를 빠져나간다.
         * ENTER 키를 입력: label 값을 갱신한다.
         * @param {SyntheticKeyboardEvent|KeyboardEvent} event
         * @private
         */
    }, {
        key: '_onKeyUpInput',
        value: function _onKeyUpInput(event) {
            if (event.keyCode === _keyEvent.KeyEvent.DOM_VK_ESCAPE) {
                event.target.blur();
            }

            if (event.keyCode === _keyEvent.KeyEvent.DOM_VK_RETURN) {
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
    }, {
        key: '_onBlurInput',
        value: function _onBlurInput() {
            this.setState({ editing: false, label: this.props.item.get('label') });
        }

        /**
         * button 엘리먼트의 click 이벤트 리스너
         * TodoItem 컴포넌트를 삭제한다.
         * @private
         */
    }, {
        key: '_onClickButton',
        value: function _onClickButton() {
            if (this.props.onRemove) {
                this.props.onRemove(this.props.item.get('id'));
            }
        }
    }]);

    return TodoItem;
})(_react2['default'].Component);

(0, _reactMixin2['default'])(TodoItem.prototype, _reactAddons2['default'].LinkedStateMixin);

/**
 * TodoItem의 Props 정의
 * @property {Immutable.Map|Object} item
 * @property {?function} onToggle
 * @property {?function} onUpdate
 * @property {?function} onRemove
 */
TodoItem.propTypes = {
    item: _react2['default'].PropTypes.object.isRequired,
    onToggle: _react2['default'].PropTypes.func,
    onUpdate: _react2['default'].PropTypes.func,
    onRemove: _react2['default'].PropTypes.func
};

exports['default'] = TodoItem;
module.exports = exports['default'];

},{"../keyEvent":3,"classnames":"9qb7cV","react":"CwoHg3","react-addons":"gUABXU","react-mixin":"i8MhWC"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _todoItem = require('./todoItem');

var _todoItem2 = _interopRequireDefault(_todoItem);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var TodoList = (function (_React$Component) {
    _inherits(TodoList, _React$Component);

    function TodoList() {
        _classCallCheck(this, TodoList);

        _get(Object.getPrototypeOf(TodoList.prototype), 'constructor', this).apply(this, arguments);
    }

    /**
     * TodoList의 Props 정의
     * @property {Immutable.List|Object} list
     * @property {?function} onToggleAll
     */

    _createClass(TodoList, [{
        key: 'render',

        /**
         * TodoList 컴포넌트를 렌더링한다.
         * @returns {XML}
         */
        value: function render() {
            var _this = this;

            var classes = (0, _classnames2['default'])('main', { hidden: this.props.list.size === 0 });
            var incompleted = this.props.list.filter(function (i) {
                return !i.get('completed');
            });
            var todos = this.props.list.map(function (todo) {
                return _react2['default'].createElement(_todoItem2['default'], _extends({}, _this.props, { key: todo.get('id'), item: todo }));
            });

            return _react2['default'].createElement(
                'section',
                { className: classes },
                _react2['default'].createElement('input', { className: 'toggle-all', type: 'checkbox',
                    checked: incompleted.size === 0,
                    onChange: this._onChange.bind(this) }),
                _react2['default'].createElement(
                    'label',
                    { htmlFor: 'toggle-all' },
                    'Mark all as complete'
                ),
                _react2['default'].createElement(
                    'ul',
                    { className: 'todo-list' },
                    todos
                )
            );
        }

        /**
         * checkbox 엘리먼트의 change 이벤트 리스너
         * @param {SyntheticMouseEvent|MouseEvent} event
         * @private
         */
    }, {
        key: '_onChange',
        value: function _onChange(event) {
            if (this.props.onToggleAll) {
                this.props.onToggleAll(event.target.checked);
            }
        }
    }]);

    return TodoList;
})(_react2['default'].Component);

TodoList.propTypes = {
    list: _react2['default'].PropTypes.object.isRequired,
    onToggleAll: _react2['default'].PropTypes.func
};

exports['default'] = TodoList;
module.exports = exports['default'];

},{"./todoItem":8,"classnames":"9qb7cV","react":"CwoHg3"}]},{},[2])
//# sourceMappingURL=TodoMVC-0.0.1.js.map

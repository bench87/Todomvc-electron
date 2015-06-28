import Reflux from 'reflux';

/**
 * Todo 컴포넌트의 Actions
 * @type {Object}
 */
let TodoAction = Reflux.createActions([
    'addItem',
    'toggleAll',
    'toggleItem',
    'updateItem',
    'removeItem',
    'clearCompleted'
]);

export default TodoAction;

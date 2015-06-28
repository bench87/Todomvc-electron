import React from 'react';
import Router from 'react-router';
import TodoHome from './views/todoHome';
import TodoList from './views/todoList';

const {Route, DefaultRoute} = Router;

const routes = (
    <Route handler={TodoHome}>
        <DefaultRoute name="All" handler={TodoList} />
        <Route name="Completed" path="/completed" handler={TodoList} />
        <Route name="Active" path="/active" handler={TodoList} />
    </Route>
);

Router.run(routes, function(Handler) {
    React.render(<Handler/>, document.querySelector('.todoapp'));
});

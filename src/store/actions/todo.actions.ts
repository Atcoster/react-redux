import { createAction } from 'redux-starter-kit';
import ITodo from '../models/interfaces/ITodo';

const addTodo = createAction<ITodo>('todos/add');
const toggleTodo = createAction<string>('todos/toggle');
const deleteTodo = createAction<string>('todos/delete');

export { addTodo, toggleTodo, deleteTodo };

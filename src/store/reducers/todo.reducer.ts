import { createReducer, AnyAction } from 'redux-starter-kit';
import { addTodo, toggleTodo, deleteTodo } from '../actions/todo.actions';
import TodosState from '../db/todos';
import ITodo from '../models/interfaces/ITodo';

const taskReducer = createReducer(TodosState, {
	[addTodo.type]: (state: ITodo[], action: AnyAction) => {
		const newTodo: ITodo = action.payload;
		state.push({ ...newTodo, completed: false });
	},
	[toggleTodo.type]: (state: ITodo[], action: AnyAction) => {
		const id: string = action.payload;
		const index: number = state.findIndex(x => x.id === id);
		const todo: ITodo = state[index];
		todo.completed = !todo.completed;
	},
	[deleteTodo.type]: (state: ITodo[], action: AnyAction) => {
		const id: string = action.payload;
		const index: number = state.findIndex(x => x.id === id);
		state.splice(index, 1);
	}
});

export default taskReducer;

import { createReducer, AnyAction } from 'redux-starter-kit';
import { filterTasks } from '../actions/filter.todo.actions';
import VisibilityState from '../db/filters';

const visibilityReducer = createReducer(VisibilityState, {
	[filterTasks.type]: (state: string, action: AnyAction) => {
		const filter: string = action.payload;
		return (state = filter);
	}
});

export default visibilityReducer;

import { createAction } from 'redux-starter-kit';

const filterTasks = createAction<string>('visibility');

export { filterTasks };

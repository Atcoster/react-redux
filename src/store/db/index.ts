import IDataBase from '../models/interfaces/IDataBase';
import Todos from './todos';
import Filters from './filters';

const State: IDataBase = {
	todos: Todos,
	visibilityFilter: Filters
};

export default State;

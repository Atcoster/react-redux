import ITodo from './ITodo';

export default interface IDataBase {
	todos: ITodo[];
	visibilityFilter: string;
}

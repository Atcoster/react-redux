import React, { ChangeEvent } from 'react';

import { eVisibilityFilter } from '../../../store/models/enums/visibility.filter.enum';
import { filterTasks } from '../../../store/actions/filter.todo.actions';

import store from '../../../store/store';

const dispatchFilterTask = (event: ChangeEvent<HTMLSelectElement>) => {
	const value: string = event.currentTarget.value;

	store.dispatch(filterTasks(value));
};

const FilterOptions = () => {
	const options: string[] = Object.keys(eVisibilityFilter);
	return (
		<select name="filter-options" onChange={e => dispatchFilterTask(e)}>
			{options.map((option, index) => {
				return (
					<option key={index} value={option}>
						{option}
					</option>
				);
			})}
		</select>
	);
};

export default FilterOptions;

import React, { Component } from 'react';
import { ReactReduxContext } from 'react-redux';
import { eVisibilityFilter } from '../../../store/models/enums/visibility.filter.enum';
import ITodo from '../../../store/models/interfaces/ITodo';

import TaskItem from '../task-item/task-item';
import FilterOptions from '../filter-options/filter-options';
import TaskForm from '../task-form/task-form';

import './task-list.scss';
import { Button, SIZES, COLORS, ICONS, SHAPES } from '../../shared/button/button';

interface Props {}
interface State {
	formIsActive: boolean;
}

class TaskList extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			formIsActive: false
		};
	}

	showTasks(todos: ITodo[], filter: eVisibilityFilter): any {
		const sortedTask = this.sortTask(todos, filter);

		return sortedTask.map((todo, index) => <TaskItem key={index} todo={todo} />);
	}

	sortTask(todos: ITodo[], filter: eVisibilityFilter): ITodo[] {
		let sortedTodos: ITodo[] = [];

		switch (filter) {
			case eVisibilityFilter.SHOW_ACTIVE:
				todos.filter(todo => {
					!todo.completed && sortedTodos.push(todo);
				});
				break;
			case eVisibilityFilter.SHOW_COMPLETED:
				todos.filter(todo => {
					todo.completed && sortedTodos.push(todo);
				});
				break;
			default:
				sortedTodos = todos;
				break;
		}

		return sortedTodos;
	}

	showForm() {
		this.setState({
			formIsActive: true
		});
	}

	render() {
		return (
			<ReactReduxContext.Consumer>
				{({ store }) => {
					const state = store.getState();
					const todos: ITodo[] = state.todos;
					const filter: eVisibilityFilter = state.visibility;
					return (
						<>
							<Button
								icon={ICONS.TYPE.PLUS}
								shape={SHAPES.BLOCK}
								btnColor={COLORS.SUCCESS}
								disabled={this.state.formIsActive}
								onClick={() => this.showForm()}
							/>
							<FilterOptions />
							<ul className="task-list">{this.showTasks(todos, filter)}</ul>
							{this.state.formIsActive && <TaskForm />}
						</>
					);
				}}
			</ReactReduxContext.Consumer>
		);
	}
}

export default TaskList;

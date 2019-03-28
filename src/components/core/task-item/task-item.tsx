import React from 'react';
import { ReactReduxContext } from 'react-redux';
import { Store } from 'redux';

import { Button, SIZES, COLORS, ICONS, SHAPES } from '../../shared/button/button';
import ITodo from '../../../store/models/interfaces/ITodo';

import { toggleTodo, deleteTodo } from '../../../store/actions/todo.actions';

import './task-item.scss';

interface Props {
	todo: ITodo;
}

const handleDelete = (store: Store, id: string) => {
	console.log(id);

	store.dispatch(deleteTodo(id));
};

const TaskItem = (props: Props) => {
	const textClass = {
		default: 'task__text',
		striked: 'task__text--striked'
	};

	return (
		<ReactReduxContext.Consumer>
			{({ store }) => {
				return (
					<li className="task">
						<label className="task__label">
							<input
								type="checkbox"
								className="task__label-input"
								name="checkbox"
								checked={props.todo.completed}
								onChange={() => store.dispatch(toggleTodo(props.todo.id))}
							/>
						</label>
						<span className={`${textClass.default}${props.todo.completed ? ` ${textClass.striked}` : ''}`}>
							{props.todo.text}
						</span>
						<Button
							type="button"
							shape={SHAPES.RADIUS}
							icon={ICONS.TYPE.TRASH}
							btnColor={COLORS.DANGER}
							onClick={() => handleDelete(store, props.todo.id)}
						/>
					</li>
				);
			}}
		</ReactReduxContext.Consumer>
	);
};

export default TaskItem;

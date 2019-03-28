import React, { FormEvent, createRef, RefObject } from 'react';

import { addTodo } from '../../../store/actions/todo.actions';
import { ReactReduxContext } from 'react-redux';
import ITodo from '../../../store/models/interfaces/ITodo';
import uuid from 'uuid';
import { Store } from 'redux';
import { Button, SIZES, COLORS, ICONS } from '../../shared/button/button';

const inputRef: RefObject<any> = createRef();

const handleSubmit = (event: FormEvent<HTMLFormElement>, store: Store) => {
	event.preventDefault();
	const text: string = inputRef.current.value;
	if (text.length <= 0) return alert("Title can't be empty");

	const id: string = uuid();
	const todo: ITodo = {
		id,
		text,
		completed: false
	};

	store.dispatch(addTodo(todo));
};

const TaskForm = () => {
	return (
		<ReactReduxContext.Consumer>
			{({ store }) => {
				return (
					<form onSubmit={e => handleSubmit(e, store)}>
						<label>
							Title: <input type="text" ref={inputRef} />
						</label>
						<Button type="submit" text="Submit" btnSize={SIZES.FULL} />
					</form>
				);
			}}
		</ReactReduxContext.Consumer>
	);
};

export default TaskForm;

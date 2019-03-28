import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faPlus, faEdit } from '@fortawesome/free-solid-svg-icons';
import './button.scss';

const ICONS = {
	TYPE: {
		TRASH: faTrash,
		PLUS: faPlus,
		EDIT: faEdit
	},
	POS: {
		CENTER: 'center',
		TOP: 'top',
		BOTTOM: 'bottom',
		RIGHT: 'right',
		LEFT: 'left'
	}
};

const COLORS = {
	PRIMARY: 'primary',
	WARNING: 'warning',
	DANGER: 'danger',
	SUCCESS: 'success'
};

const SIZES = {
	SMALL: 'small',
	MEDIUM: 'medium',
	LARGE: 'large',
	FULL: 'full'
};

const SHAPES = {
	BLOCK: 'block',
	RADIUS: 'radius',
	CIRCLE: 'circle'
};

interface Props {
	text?: string;
	type?: string;
	className?: string;
	icon?: IconDefinition;
	iconPos?: string;
	disabled?: boolean;
	shape?: string;
	btnColor?: string;
	btnSize?: string;
	onClick?: () => void;
}

const ERRORS = {
	NOTEXTNORICON: 'Button need to have a text or a Icon predefined as property',
	NOICONPOS: 'Icon position needs to be given'
};

const Button = (props: Props) => {
	if (!props.text && !props.icon) throw new Error(ERRORS.NOTEXTNORICON);
	if (props.icon && props.text && !props.iconPos) throw new Error(ERRORS.NOICONPOS);

	const classes = `button${props.btnColor ? ` button--${props.btnColor}` : ` button--${COLORS.PRIMARY}`}
	${props.btnSize ? ` button--${props.btnSize}` : ''}
	${props.shape ? ` button--${props.shape}` : ` button--${SHAPES.BLOCK}`}
	${props.iconPos ? ` button--${props.iconPos}` : ''}`;

	return (
		<button
			className={`${props.className ? `${props.className} ` : ''}${classes}`}
			type={props.type}
			disabled={props.disabled}
			onClick={props.onClick}
		>
			{props.text && <span>{props.text}</span>}
			{props.icon && <FontAwesomeIcon className="button__icon" icon={props.icon} />}
		</button>
	);
};

export { Button, SIZES, COLORS, ICONS, SHAPES };

import React from 'react';
import TodoItem from './TodoItem';
import { getIDs, getTodo, removeCompleted } from '../../todo';
import { getContext } from '../TodoContext';

export default function TodoContainer() {
	const { tabSelected, forceUpdate } = getContext();
	const ids = getIDs().filter(
		id => {
			const { completed } = getTodo(id);
			return (completed && tabSelected !== 'active')
				|| (!completed && tabSelected !== 'completed');
		}
	);
	return (
		<div className="pt-1">
			{
				ids.length ? ids.map(
					id => <TodoItem key={`todo${id}`} id={id} />
				) : ''
			}
			{
				(tabSelected === 'completed'
					&& getIDs().filter(id => getTodo(id).completed).length > 0) ?
					<div className="flex justify-end">
						<button
							className="focus:outline-none text-xs leading-15px font-semibold text-white rounded py-3 px-7 mt-4.5"
							style={{
								background: '#F18989',
								fontFamily: 'Montserrat'
							}}
							onClick={() => {
								removeCompleted();
								forceUpdate();
							}}
						>delete all</button>
					</div>
					: ''
			}
		</div>
	)
}
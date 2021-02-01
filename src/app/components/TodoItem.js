import React from 'react';
import { getTodo, toggleTodo, removeCompleted } from '../../todo';
import { getContext } from '../TodoContext';

export default function TodoItem({ id = 0 }) {
    const { text, completed } = getTodo(id);
    const { tabSelected, forceUpdate } = getContext();
    return <div className="flex my-3.5 justify-between">
        <button className="flex focus:outline-none" onClick={() => {
            toggleTodo(id);
            forceUpdate();
        }}>
            <span
                style={{
                    border: `1px solid ${completed ? '#6DA6F2' : '#828282'}`,
                    background: completed ? '#6DA6F2' : 'transparent',
                    color: completed ? 'white' : 'transparent'
                }}
                className="focus:outline-none w-6 h-6 box-content rounded mr-2">
                <span
                    className="material-icons">done</span>
            </span>
            <div
                style={{
                    fontFamily: 'Montserrat',
                    textDecoration: completed ? 'line-through' : 'none',
                    color: completed ? '#333' : 'black'
                }}
                className="font-medium text-lg leading-22px"
            >{text}</div>
        </button>
        {
            tabSelected === 'completed' && <button onClick={() => {
                removeCompleted(id);
                forceUpdate();
            }}
                className="w-3.5 h-3.5 focus:outline-none"
                style={{ color: "#BDBDBD" }}>
                <span className="material-icons">delete_outline</span>
            </button>
        }
    </div>
}
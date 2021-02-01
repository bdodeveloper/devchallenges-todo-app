import React, { useState } from 'react';
import { createTodoObj, saveTodo, getUsableID } from '../../todo';
import { getContext } from '../TodoContext';

export default function TodoInput() {
    const [todoText, setTodoText] = useState('');
    const { tabSelected, forceUpdate } = getContext();

    const handleSubmit = e => {
        if (!todoText) alert('enter some text!');
        else {
            const todo = createTodoObj(todoText);
            saveTodo(getUsableID(), todo);
            forceUpdate();
            setTodoText('');
        }
        e.preventDefault();
    }

    return tabSelected !== 'completed' && <form onSubmit={handleSubmit}>
        <div className="flex justify-between items-center mt-4.5 mb-2.5">
            <input
                placeholder="add details"
                value={todoText}
                onChange={e => setTodoText(e.target.value)}
                style={{
                    width: '476px',
                    border: '1px solid #BDBDBD',
                    color: '#828282',
                    fontFamily: 'Montserrat'
                }}
                className="px-3 py-5 rounded-xl box-border text-14px leading-17px font-normal placeholder-input-ph focus:outline-none"
            />
            <button
                type="submit"
                style={{
                    background: '#6DA6F2',
                    boxShadow: "0px 2px 6px rgba(127, 177, 243, 0.4)",
                    fontFamily: 'Montserrat'
                }}
                className="rounded-xl font-semibold text-sm leading-17px text-white px-10 py-5 focus:outline-none"
            >Add</button>
        </div>
    </form>
}

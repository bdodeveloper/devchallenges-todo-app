import React, { createContext, useState, useContext } from 'react';

export const TodoContext = createContext();

export const getContext = () => {
    return useContext(TodoContext);
}

export default function TodoProvider({ children }) {
    const [tabSelected, setTabSelected] = useState('all');
    const [, updateState] = useState({});
    return (
        <TodoContext.Provider
            value={{ tabSelected, setTabSelected, forceUpdate: () => { updateState({}) } }}
        >
            {children}
        </TodoContext.Provider>
    )
};

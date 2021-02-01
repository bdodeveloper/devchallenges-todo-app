function nonTestingError(err): void {
    if (!global.hasOwnProperty('it'))
        console.error(`Error: ${err}`);
}

function getIDs(): number[] {
    return JSON.parse(localStorage.getItem('todoIDs')) || [];
}

function setIDs(ids: number[] = []): void {
    localStorage.setItem('todoIDs', JSON.stringify(ids.sort((a, b) => a - b)));
}

function addID(id: number): void {
    if (id < 0) {
        nonTestingError(`${id} is not a positive number!`);
        return;
    }
    const ids = getIDs();
    ids.push(id);
    setIDs(ids);
}

function getUsableID(): number {
    const ids = getIDs();
    if (ids.length === 0) return 0;
    for (let i = 0; i <= Math.max(...ids) + 1; i++) {
        if (ids.indexOf(i) === -1) return i;
    }
}

function doesIDExist(id: number): boolean {
    return getIDs().indexOf(id) !== -1;
}

interface Todo {
    text: string,
    completed: boolean
}

function todoLSKey(id: number): string | undefined {
    if (id >= 0) return `todo_${id}`;
    nonTestingError(`${id} is not a positive number!`);
    return undefined;
}

function createTodoObj(text: string): Todo {
    return { text, completed: false };
}

function getTodo(id: number): Todo | undefined {
    if (!doesIDExist(id)) {
        nonTestingError(`todo with id ${id} doesn't exist!`);
        return undefined;
    }
    return JSON.parse(localStorage.getItem(todoLSKey(id)));
}

function saveTodo(id: number, todoObj: Todo, override: boolean = false): void {
    const todoExists = getIDs().indexOf(id) !== -1;
    if (!override && todoExists) {
        nonTestingError(`todo with id ${id} exists and can't be overriden!`);
        return;
    }
    if (!todoExists) addID(id);
    localStorage.setItem(todoLSKey(id), JSON.stringify(todoObj));
}

function toggleTodo(id: number): void {
    if (!doesIDExist(id)) {
        nonTestingError(`todo with id ${id} doesn't exist`);
    }
    const todo: Todo = getTodo(id);
    todo.completed = !todo.completed;
    saveTodo(id, todo, true);
}

function removeCompleted(id: number | undefined): void {
    if (typeof id === 'undefined') {
        getIDs().forEach(_id => {
            if (getTodo(_id).completed) {
                setIDs(getIDs().filter(__id => __id !== _id));
                localStorage.removeItem(todoLSKey(_id));
            }
            else nonTestingError(`todo with id ${_id} isn't completed yet!`);
        });
    }
    else if (getTodo(id).completed) {
        setIDs(getIDs().filter(__id => __id !== id));
        localStorage.removeItem(todoLSKey(id));
    }
    else nonTestingError(`todo with id ${id} isn't completed yet!`);
}

module.exports = {
    todoLSKey, createTodoObj, getTodo, saveTodo, toggleTodo, removeCompleted,
    getIDs, setIDs, addID, getUsableID, doesIDExist
};

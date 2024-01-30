import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 4,
            todo: "todo msg", 
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComelete: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider


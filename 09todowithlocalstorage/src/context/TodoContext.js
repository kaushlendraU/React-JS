import { createContext, useContext } from "react";


export const TodoContex = createContext({
    todo: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleCompleted: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContex)
}

export const TodoProvider = TodoContex.Provider
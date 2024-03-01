import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: localStorage.getItem('todos')
    ? JSON.parse(localStorage.getItem('todos'))
    : [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        isEditable: false,
        isChecked: false,
      };
      state.todos.push(todo);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    toggleEdit: (state, action) => {
      const { id } = action.payload;
      state.todos = state.todos.map(todo =>
        todo.id === id ? { ...todo, isEditable: !todo.isEditable } : todo
      );
      // localStorage.setItem('todos', JSON.stringify(state.todos));
    },
    updateTodo: (state, action) => {
      const { id, newText } = action.payload;
      state.todos = state.todos.map(todo =>
        todo.id === id ? { ...todo, text: newText, isEditable: false } : todo
      );
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },

    toggleCheck: (state, action) => {
      const { id } = action.payload;
      state.todos = state.todos.map(todo =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
      );
      localStorage.setItem('todos', JSON.stringify(state.todos));
    },
  }
});

export const { addTodo, removeTodo, updateTodo, toggleEdit, toggleCheck } = todoSlice.actions;

export default todoSlice.reducer;

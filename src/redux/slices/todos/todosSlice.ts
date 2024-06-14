import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import {getTodos} from "../../../api/todosApi";


export type Todo = { id: string, title: string, description: string, isCompleted: boolean }

// Define the initial state type
interface TodosState {
    todosList: Todo[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

// Initial state
const initialState: TodosState = {
    todosList: [],
    status: 'idle',
    error: null,
};

// Async thunk to fetch todos from an API
export const getTodosThunk = createAsyncThunk('todos/fetchTodos', async () => {
    const response = await getTodos()
    return response.data;
});

// Create the slice
const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTodosThunk.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(getTodosThunk.fulfilled, (state, action: PayloadAction<Todo[]>) => {
                state.status = 'succeeded';
                state.todosList = action.payload;
            })
            .addCase(getTodosThunk.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch todos';
            });
    },
});


export default todosSlice.reducer;
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchTodos, newTodo, removeTodo, saveTodo } from "./todoAction";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    isLoading: false,
    isError: false,
    isSuccess: false,
    allTodos: [],
    edit: {
      todo: {},
      isEdit: false,
    },
  },

  reducers: {
    edit : (state,action)=>{
      return{
        ...state,
        edit: {
          todo : action.payload,
          isEdit: true,
        },
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.allTodos = action.payload;
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      })
      .addCase(addTodo.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.allTodos = [...state.allTodos, action.payload];
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      })
      .addCase(deleteTodo.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      })
      .addCase(updateTodo.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.allTodos = state.todo.map((item)=>item._id===action.payload._id ? action.payload : item)
        state.edit = {todo : {}, isEdit: false}
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
      })
  },
});
export const {edit} = todoSlice.actions
export default todoSlice.reducer;

// FETCH ALL TODOS

export const getTodos = createAsyncThunk("FETCH/TODOS", async () => {
  try {
    return await fetchTodos();
  } catch (error) {
    console.log(error);
  }
});

// CREATE TODO

export const addTodo = createAsyncThunk("ADD/TODO", async (formData) => {
  try {
    return await saveTodo(formData);
  } catch (error) {
    console.log(error);
  }
});

//delete TODO

export const deleteTodo = createAsyncThunk("DELETE/TODO", async(_id)=>{
  try {
    return await removeTodo(_id)
  } catch (error) {
    console.log(error)
  }
});

//Update TODO

export const updateTodo = createAsyncThunk("UPDATE/TODO", async(updatedTodo)=>{
  try {
    return await newTodo(updatedTodo)
  } catch (error) {
    console.log(error)
  }
})

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const url = 'https://randomuser.me/api/?results=5'

const initialState = { 
  users: [],
  isLoading: false,
  error: null,
}

export const getUsers = createAsyncThunk('users/getUsers', async (name, thunkAPI) => {
    try {
      const res = await axios(url);
      return res.data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.isLoading = true
    },
    [getUsers.fulfilled]: (state, action) => {
      state.isLoading = false
      state.users = action.payload
    },
    [getUsers.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase('PENDING', (state) => {
  //     state.isLoading = true;
  //   });
  //   builder.addCase('FULFILLED', (state, action) => {
  //     state.isLoading = false;
  //     state.users = action.payload;
  //   });
  //   builder.addCase('REJECTED', (state, action) => {
  //     state.isLoading = false;
  //     state.error = action.payload;
  //   });
  // }
})

export default usersSlice.reducer

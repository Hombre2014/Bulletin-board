import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const initialState = [];

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const response = await axios.get(USERS_URL);
    console.log(response.data);
    return [...response.data]; // We can also just return response.data
  } catch (err) {
      return err.message;
  }
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    })
  }
});

export const selectAllUsers = (state) => state.users;

export const selectUserById = (state, id) => state.users.find(user => user.id === id);

export default userSlice.reducer;

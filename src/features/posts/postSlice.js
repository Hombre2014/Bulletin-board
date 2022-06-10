import { createSlice, nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns';

const initialState = [
  { id: '1',
    title: 'Learning Redux Toolkit',
    content: 'Redux Toolkit makes it easy to use Redux',
    date: sub(new Date(), { minutes: 10 }).toISOString()
  },
  { id: '2',
    title: 'Redux Rocks',
    content: 'Everyone uses Redux',
    date: sub(new Date(), { minutes: 5 }).toISOString()
  }
]

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return { payload:
          { id: nanoid(), title, content, date: new Date().toISOString(), userId }};
      }
    }
  }
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postSlice.actions;

export default postSlice.reducer;

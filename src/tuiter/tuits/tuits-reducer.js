import { createSlice } from "@reduxjs/toolkit";
import {
  createTuitThunk,
  deleteTuitThunk,
  findTuitsThunk,
  updateTuitThunk,
} from "../../services/tuits-thunks";

const initialState = {
  tuits: [],
  loading: false,
};

const currentUser = {
  userName: "Lululemon",
  handle: "@lululemon",
  image: "lululemon.jpeg",
};

const templateTuit = {
  ...currentUser,
  topic: "Pilates",
  time: "2h",
  liked: false,
  replies: 0,
  retuits: 0,
  likes: 0,
};

const tuitSlice = createSlice({
  name: "tuits",
  initialState,
  extraReducers: {
    [findTuitsThunk.pending]: (state) => {
      state.loading = true;
      state.tuits = [];
    },
    [findTuitsThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits = payload;
    },
    [findTuitsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [deleteTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits = state.tuits.filter((t) => t._id !== payload._id);
    },
    [createTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits.push(payload);
    },
    [updateTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id);
      state.tuits[tuitNdx] = {
        ...state.tuits[tuitNdx],
        ...payload,
      };
    },
  },
  reducers: {
    /*
    liked: (state, action) => {
      const { _id, likes, liked } = action.payload;
      const tuitToUpdate = state.find((tuit) => tuit._id === _id);
      if (tuitToUpdate) {
        tuitToUpdate.liked = !liked;
        tuitToUpdate.likes = likes + 1;
      }
    },
    unliked: (state, action) => {
      const { _id, likes, liked } = action.payload;
      const tuitToUpdate = state.find((tuit) => tuit._id === _id);
      if (tuitToUpdate) {
        tuitToUpdate.liked = !liked;
        tuitToUpdate.likes = likes - 1;
      }
    },
    createTuit: (state, action) => {
      state.unshift({
        ...action.payload,
        ...templateTuit,
        _id: new Date().getTime(),
      });
    },
    deleteTuit: (state, action) => {
      const index = state.findIndex((tuit) => tuit._id === action.payload);
      state.splice(index, 1);
    },*/
  },
});

export const { liked, unliked, createTuit, deleteTuit } = tuitSlice.actions;
export default tuitSlice.reducer;

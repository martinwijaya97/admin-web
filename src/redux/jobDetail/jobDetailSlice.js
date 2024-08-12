import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchJobDetail as fetchJobDetailAPI } from './jobDetailService';

const initialState = {
  job: null,
  loading: false,
  error: null,
};

export const fetchJobDetail = createAsyncThunk(
  'jobDetail/fetchJobDetail',
  async (id) => {
    const response = await fetchJobDetailAPI(id);
    return response;
  }
);

const jobDetailSlice = createSlice({
  name: 'jobDetail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.jobDetail = action.payload;
      })
      .addCase(fetchJobDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default jobDetailSlice.reducer;

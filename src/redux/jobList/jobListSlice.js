import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchJobList as fetchJobListAPI } from './jobListService';

const initialState = {
  jobList: [],
  loading: false,
  error: null,
  page: 1,
  hasMore: true,
};

export const fetchJobList = createAsyncThunk(
  'jobList/fetchJobList',
  async (params) => {
    const response = await fetchJobListAPI(params);
    const filteredResponse = response.filter((item) => item !== null);
    return filteredResponse;
  }
);

const jobSlice = createSlice({
  name: 'jobList',
  initialState,
  reducers: {
    resetJobList(state) {
      state.jobList = [];
      state.page = 1;
      state.hasMore = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobList.fulfilled, (state, action) => {
        state.loading = false;
        state.jobList = [...state.jobList, ...action.payload];
        state.page += 1;
        state.hasMore = action.payload.length > 0;
      })
      .addCase(fetchJobList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetJobList } = jobSlice.actions;
export default jobSlice.reducer;

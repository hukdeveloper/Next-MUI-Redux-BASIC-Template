import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  isSidebarOpen: false,
  isLoaderLoading: false,
};

const Slice = createSlice({
  name: "addUserSlice",
  initialState,
  reducers: {
    changeMode: (state, action) => {
      state.mode = action.payload;
    },
    changeSidebarMode: (state, action) => {
      state.isSidebarOpen = action.payload;
    },
    changeLoadingLoader: (state, action) => {
      state.isLoaderLoading = action.payload;
    },
  },
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(fetchUserDetails.pending, (state) => {
  //         // Handle pending state if needed
  //       })
  //       .addCase(fetchUserDetails.fulfilled, (state, action) => {
  //         state.userDetails = action.payload;
  //       })
  //       .addCase(fetchUserDetails.rejected, (state, action) => {
  //         // Handle rejected state if needed
  //       })

  //   },
});

export const {
  changeMode,
  changeSidebarMode,
  changeLoadingLoader,
  changeCategory,
} = Slice.actions;

export default Slice.reducer;

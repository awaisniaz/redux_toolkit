import { createReducer, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  name: "Awais Niaz",
  age: 20,
  status: "Single",
};

export const fetchUser = createAsyncThunk("fetchusername", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return users[0].name;
});

// Old Approach

// export default (state = initialState, action)=>{
//     if(action.type == "UPDATE_STATUS"){
//         return {
//             ...state,
//             status:action.payload
//         }
//     }
//     return state
// }

// Redux Toolkit Method to create reducer

// export default createReducer(initialState, (builder) => {
//   builder
//     .addCase("UPDATE_STATUS", (state, action) => {
//       state.status = action.payload;
//     })
//     .addCase("UPDATE_AGE", (state, action) => {
//       state.age = action.payload;
//     })
//     .addCase("UPDATE_NAME", (state, action) => {
//       state.name = action.payload;
//     });
// });

const userReducer = createSlice({
  name: "person",
  initialState,
  reducers: {
    updateName(state, action) {
      state.name = action.payload;
    },
    updateAge(state, action) {
      state.age = action.payload;
    },
    updateStatus(state, action) {
      state.status = action.payload;
    },
  },
  extraReducers: {
    [fetchUser.fulfilled]: (state, action) => {
      state.name = action.payload;
    },
    [fetchUser.pending]:(state,action)=>{
      state.name = "Please Wait ..."
    },
    [fetchUser.rejected]:(state,action)=>{
      state.name = "Sorry you are not found."
    }
  },
});
export const { updateName, updateStatus, updateAge } = userReducer.actions;
export default userReducer.reducer;

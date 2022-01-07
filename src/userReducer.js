import { createReducer } from "@reduxjs/toolkit";
const initialState = {
  name: "Awais Niaz",
  age: 20,
  status: "Single",
};

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


export default createReducer(initialState, (builder) => {
  builder
    .addCase("UPDATE_STATUS", (state, action) => {
      state.status = action.payload;
    })
    .addCase("UPDATE_AGE", (state, action) => {
      state.age = action.payload;
    })
    .addCase("UPDATE_NAME", (state, action) => {
      state.name = action.payload;
    });
});

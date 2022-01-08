import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import {updateName,updateInfo} from '../action';
import { updateName, updateStatus, updateAge,fetchUser } from "../userReducer";

function Profile() {
  const dispatch = useDispatch();
  const { name, age, status } = useSelector((state) => {
    return state;
  });
  const updateStatus1 = () => {
    //   dispatch({
    //       type:'UPDATE_STATUS',
    //       payload:"Committed"
    //   })
    dispatch(updateStatus("Commited"));
  };
  const updateAge1 = () => {
    // dispatch({
    //   type: "UPDATE_AGE",
    //   payload: 100,
    // });
    dispatch(updateAge(400));
  };

  const updateNmae =()=>{
        //      const res = await fetch('https://jsonplaceholder.typicode.com/users')
        //   const users = await res.json()
        // //   dispatch(updateName('Tayyab Niaz'))
        dispatch(fetchUser())
  }
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <p>{status}</p>
      <button
        onClick={() => {
          updateStatus1();
        }}
      >
        Update Status
      </button>
      <button
        onClick={() => {
          updateAge1();
        }}
      >
        Update Age
      </button>
      <button
        onClick={async() => {
          // const res = await fetch('https://jsonplaceholder.typicode.com/users')
          // const users = await res.json()
          // dispatch(updateName('Tayyab Niaz'))
          // dispatch({type:'UPDATE_NAME',payload:users[0].name})

        //   dispatch(fetchUser())
        updateNmae()

        }
    }
      >
        update name
      </button>
    </div>
  );
}
export default Profile;

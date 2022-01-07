import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {updateName,updateInfo} from '../action';

function Profile() {
    const dispatch = useDispatch()
    const {name,age,status} = useSelector((state)=>{
      return state
    })
    const updateStatus = ()=>{
      dispatch({
          type:'UPDATE_STATUS',
          payload:"Committed"
      })
    }
    const updateAge = ()=>{
        dispatch({
            type:'UPDATE_AGE',
            payload:100
        })
      }
    return (
        <div>
            <h1>{name}</h1>
            <h1>{age}</h1>
            <p>{status}</p>
            <button onClick = {()=>{
            updateStatus()
            }}>Update Status</button>
            <button onClick = {()=>{
            updateAge()
            }}>Update Age</button>
            <button onClick={async()=>{
                // const res = await fetch('https://jsonplaceholder.typicode.com/users')
                // const users = await res.json()
                // dispatch(updateName('Tayyab Niaz'))
                // dispatch({type:'UPDATE_NAME',payload:users[0].name})
                dispatch(updateInfo())
            }}>update name</button>
            
        </div>
    )
}
export default  Profile

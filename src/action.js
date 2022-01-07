// export default(name)=>{
//     return {
//         type:'UPDATE_NAME',
//         payload:name
//     }
// }

import {createAction} from '@reduxjs/toolkit'
// export const updateName = createAction('UPDATE_NAME')

export const updateInfo = ()=>{
     return async(dispatch)=>{
           const res = await fetch('https://jsonplaceholder.typicode.com/users')
                const users = await res.json()
                dispatch({type:'UPDATE_NAME',payload:users[0].name})
     }
}
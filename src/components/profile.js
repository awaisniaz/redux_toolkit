import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {
    const {name} = useSelector((state)=>{
      return state
    })
    return (
        <div>
            <h1>{name}</h1>
            
        </div>
    )
}
export default  Profile

import React, { useContext } from 'react'
import UserContext from '../Context/Context'
import UserNav from '../parts/userNav'

function Alltodos() {
    const {User} = useContext(UserContext)
    console.log(User)
  return (
    <div>
        <UserNav/>
        Alltodos
        <hr />
        {User.map(x=>{
            return<>
            <h5>Title : {x.title}</h5>
            <p>description : {x.description}</p>
        <hr />

            </>
        })}
        </div>
  )
}

export default Alltodos
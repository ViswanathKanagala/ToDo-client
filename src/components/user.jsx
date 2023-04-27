import axios from 'axios'
import React, { useContext, useRef } from 'react'
import UserNav from '../parts/userNav'
import UserContext from '../Context/Context'

function User() {
  const title = useRef()
  const des = useRef()
  const {UserSetter} = useContext(UserContext)

  const onSubmit = () => {
        UserSetter({
          title: title.current.value,
          description: des.current.value,
          isDone: false
        })
        alert('inserted successfully')
        console.log({
          title: title.current.value,
          description: des.current.value,
          isDone: false
        })
  }
  return (<>
  <UserNav />
      <div  className='card'>
      <h5>NewTodo</h5>
      <label> Title  :
        <input type='text'
          ref={title}
          placeholder='title' />
      </label><br /><br />
      <label> Description  :
        <input type='text'
          ref={des}
          placeholder='title' />
      </label><br /><br /> 
      <button onClick={onSubmit}>add</button>
    </div>
  </>

  )
}

export default User
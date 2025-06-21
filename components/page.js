import React from 'react'
import HomePage from './Minipro4'
import Task5 from './Task5'
import Home from '.'
import UserProfile from './profiles/[id]'


function Mainfile() {
  return (
    <div>
        <UserProfile/>
        <HomePage/>
        <Task5/>
    </div>
  )
}

export default Mainfile
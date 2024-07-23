import { useState } from 'react'
import React from 'react'
import TaskPage from './taskpage/TaskPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <TaskPage/>
        </div>
    </>
  )
}

export default App

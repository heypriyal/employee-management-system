import React from 'react'
import Header from '../others/Header'
import TaskNumBox from '../others/TaskNumBox'
import TasklistCard from '../TaskList/TasklistCard'

const EmployeeBoard = ({data,setloggedInUserData}) => {
  return (
    <div className='p-5 h-screen'>
      <Header data={data} setloggedInUserData={setloggedInUserData}/>
      <TaskNumBox data={data}/>
      <TasklistCard data={data}/>
    </div>
  )
}

export default EmployeeBoard

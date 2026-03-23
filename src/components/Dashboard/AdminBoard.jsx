import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTasks from '../others/AllTasks'

const AdminBoard = ({data,setloggedInUserData}) => {
  return (
    <div className='p-5 h-screen w-full'>
    <Header data={data} setloggedInUserData={setloggedInUserData}/>
    <CreateTask />
    <AllTasks />
    </div>
  )
}

export default AdminBoard

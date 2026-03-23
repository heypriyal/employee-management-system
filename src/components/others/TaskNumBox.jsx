import React from 'react'

const TaskNumBox = ({data}) => {
    return (
        <div className='flex gap-7 mt-10'>

            <div className='bg-red-400 rounded-2xl w-[25%] p-7'>
                <h1 className='font-semibold text-4xl'>{data.taskCounts.newTask}</h1>
                <h2 className='font-medium text-xl'>New Tasks</h2>
            </div>

            <div className='bg-green-400 rounded-2xl w-[25%] p-7'>
                <h1 className='font-semibold text-4xl'>{data.taskCounts.completed}</h1>
                <h2 className='font-medium text-xl'>Completed Tasks</h2>
            </div>

            <div className='bg-blue-400 rounded-2xl w-[25%] p-7'>
                <h1 className='font-semibold text-4xl'>{data.taskCounts.active}</h1>
                <h2 className='font-medium text-xl'>Active Tasks</h2>
            </div>

            <div className='bg-pink-400 rounded-2xl w-[25%] p-7'>
                <h1 className='font-semibold text-4xl'>{data.taskCounts.failed}</h1>
                <h2 className='font-medium text-xl'>Failed Tasks</h2>
            </div>

        </div>
    )
}

export default TaskNumBox

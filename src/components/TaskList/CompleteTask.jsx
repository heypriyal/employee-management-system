import React from 'react'

const CompleteTask = ({data}) => {
  return (
            <div className='h-full shrink-0 bg-green-600 w-80  rounded-2xl p-4 flex flex-col'>
                <div className='flex justify-between text-medium'>
                    <h1 className='bg-red-900 rounded py-1 px-3'>{data.category}</h1>
                    <h2 className='font-semibold'>{data.date}</h2>
                </div>
                <h1 className='font-bold text-2xl mt-5'>{data.taskTitle}</h1>
                <p className='mt-5 text-base'>{data.taskDescription}</p>
                <div className='mt-auto'>
                   <h1  className='font-xl font-semibold text-center'>Completed Successfully :)</h1>
                </div>
            </div>
  )
}

export default CompleteTask

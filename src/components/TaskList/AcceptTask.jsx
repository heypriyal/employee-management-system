import React from 'react'

const AcceptTask = ({data}) => {
  return (
            <div className='h-full shrink-0 bg-blue-500 w-80  rounded-2xl p-4 flex flex-col'>
                <div className='flex justify-between text-medium'>
                    <h1 className='bg-red-900 rounded py-1 px-3'>{data.category}</h1>
                    <h2 className='font-semibold'>{data.date}</h2>
                </div>
                <h1 className='font-bold text-2xl mt-5'>{data.taskTitle}</h1>
                <p className='mt-5 text-base'>{data.taskDescription}</p>
                <div className='flex justify-between mt-auto'>
                    <button className='bg-green-800 border-none px-3 py-2 rounded hover:scale-97 hover:bg-green-900 font-light'>Mark Completed</button>
                    <button className='bg-red-800 border-none px-3 py-2 rounded hover:scale-97 hover:bg-red-900 font-light'>Mark Failed</button>
                </div>
            </div>
  )
}

export default AcceptTask

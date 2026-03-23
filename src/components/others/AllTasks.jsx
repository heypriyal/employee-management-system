import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
const AllTasks = () => {

    const context = useContext(AuthContext)
    console.log(context)

    return (
        <div className='bg-[#202020] h-fit my-5 rounded-xl p-4 flex flex-col gap-4'>
         <div className='flex justify-between bg-blue-200 rounded px-4 py-2 text-xl'>
                        <h1 className='w-1/5 bg-blue-500 rounded text-center mx-2 text-xl font-semibold'>Name</h1>
                        <h1 className='w-1/5 bg-blue-500 rounded text-center mx-2 text-xl font-semibold'>New Task</h1>
                        <h1 className='w-1/5 bg-blue-500 rounded text-center mx-2 text-xl font-semibold'>Active Task</h1>
                        <h1 className='w-1/5 bg-blue-500 rounded text-center mx-2 text-xl font-semibold'>Completed</h1>
                        <h1 className='w-1/5 bg-blue-500 rounded text-center mx-2 text-xl font-semibold'>Failed</h1>
                    </div>

<div id='admin-alltask-scroll' className=''>
                {
                context.employees.map((e) => {
                    return <div className='flex justify-between bg-black     rounded px-4 py-2 text-xl my-2'>
                        <h1 className='w-1/5 border-2 border-pink-400 rounded text-center font-bold p-2 mx-2 text-xl'>{e.name}</h1>
                        <h1 className='w-1/5 border-2 border-yellow-300 rounded text-center font-bold p-2 mx-2 text-xl'>{e.taskCounts.newTask}</h1>
                        <h1 className='w-1/5 border-2 border-blue-300 rounded text-center  font-bold p-2 mx-2 text-xl'>{e.taskCounts.active}</h1>
                        <h1 className='w-1/5 border-2 border-green-300 rounded text-center p-2 font-bold mx-2 text-xl'>{e.taskCounts.completed}</h1>
                        <h1 className='w-1/5 border-2 border-red-300 rounded text-center p-2 mx-2 font-bold text-xl'>{e.taskCounts.failed}</h1>
                    </div>  
                })
            }
</div>

        </div>

    )
}

export default AllTasks

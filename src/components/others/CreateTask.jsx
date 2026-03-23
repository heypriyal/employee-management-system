import React, { useState } from 'react'

const CreateTask = () => {

const [taskTitle, settaskTitle] = useState('')
const [taskDescription, settaskDescription] = useState('')
const [date, setdate] = useState('')
const [assignTo, setassignTo] = useState('')
const [category, setcategory] = useState('')

const [Newtask, setNewtask] = useState({})

const submitHandler = (e) => {
 e.preventDefault();

 setNewtask({taskTitle,taskDescription,date,category,active:false,newTask:true,failed:false,completed:false})
  
 const data = JSON.parse(localStorage.getItem('employees'))

data.forEach(function(elem){
   if(elem.name.toLowerCase() === assignTo.toLowerCase()){
    elem.tasks.push(Newtask)
    elem.taskCounts.newTask = elem.taskCounts.newTask+1
}
})

localStorage.setItem("employees",JSON.stringify(data))

 setassignTo('') 
 setdate('')
 setcategory('')
 settaskTitle('')
 settaskDescription('')
}



    return (
        <div>

            <form onSubmit={(e)=>submitHandler(e)}>
                <div className='flex bg-[#202020] px-10 py-7 mt-5 justify-between rounded-xl'>
                    <div className='w-[30%] flex flex-col gap-4'>
                        <div className='flex gap-2 flex-col'>
                            <label htmlFor="c-title" className='text-xl font-light'>Task Title</label>
                            <input
                            value={taskTitle}
                            onChange={(e)=>settaskTitle(e.target.value)}
                                className='border-2 border-gray-500 text-xl p-1 rounded outline-none'
                                type="text" name="" id="c-title" placeholder='Enter Task Title' />
                        </div>

                        <div className='flex gap-2 flex-col'>
                            <label htmlFor="c-assignto" className='text-xl font-light'>Assign To</label>
                            <input
                                value={assignTo}
                            onChange={(e)=>setassignTo(e.target.value)}
                                className='border-2 border-gray-500 text-xl p-1 rounded outline-none'
                                placeholder='Employee name'
                                type="text" name="" id="c-assignto" />
                        </div>

                        <div className='flex gap-2 flex-col'>
                            <label htmlFor="c-category" className='text-xl font-light'>Category</label>
                            <input
                                value={category}
                            onChange={(e)=>setcategory(e.target.value)}
                                className='border-2 border-gray-500 text-xl p-1 rounded outline-none'
                                type="text" name="" id="c-category" placeholder='design,dev,etc' />
                        </div>

                    </div>


                    <div className='w-[30%] flex flex-col gap-5'>
                        <div className='flex gap-2 flex-col'>
                            <label htmlFor="c-descrption" className='text-xl font-light'>Task Description</label>
                            <textarea
                                value={taskDescription}
                            onChange={(e)=>settaskDescription(e.target.value)}
                                className='border-2 border-gray-500 text-xl p-1 rounded outline-none resize-none'
                                name="" id="c-descrption" cols="30" rows="7" placeholder='Enter detailed Description about Task'></textarea>
                        </div>
                    </div>


                    <div className='w-[30%] flex flex-col gap-5'>
                        <div className='flex gap-2 flex-col'>
                            <label htmlFor="c-date" className='text-xl font-light'>Date</label>
                            <input
                                value={date}
                            onChange={(e)=>setdate(e.target.value)}
                                className='border-2 border-gray-500 text-xl p-1 rounded outline-none'
                                type="date" name="" id="c-date" />
                        </div>

                        <button className='bg-cyan-700 text-2xl w-full m-auto px-15 py-2 rounded hover:bg-cyan-800 hover:scale-99 mt-2'>Create Task</button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default CreateTask

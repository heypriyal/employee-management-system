import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'


const TasklistCard = ({data}) => {
    return (
        <div id='TasklistCard' className='overflow-x-auto w-full h-[50%] mt-10 flex flex-nowrap gap-5'>
     
         {
            data.tasks.map((e,id)=>{
                if(e.active) {
                    return <AcceptTask key={id} data={e}/>
                }else if(e.failed){
                    return <FailedTask key={id} data={e}/>
                }else if(e.newTask){
                    return <NewTask key={id} data={e}/>
                }else if(e.completed){
                    return <CompleteTask key={id} data={e}/>
                }
            })
         }
        </div>
    )
}

export default TasklistCard

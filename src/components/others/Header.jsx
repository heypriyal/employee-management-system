import React from 'react'

const Header = ({data,setloggedInUserData}) => {

const logOutUser = () => {
  setloggedInUserData('')
  window.location.reload()
}

    return (
        <div className='flex items-center justify-between'>
            <div>
                <p className='text-xl font-semibold'>Hello,</p>
                <p className='text-2xl font-bold'>{data.name}👋🏼</p>
            </div>
            <button className='bg-red-800 text-white px-4 py-2 text-xl font-light rounded-xl cursor-pointer hover:bg-red-900 hover:scale-97'
            onClick={logOutUser}
            >Log Out</button>
        </div>
    )
}

export default Header

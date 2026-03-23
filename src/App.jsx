import { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import AdminBoard from './components/Dashboard/AdminBoard'
import EmployeeBoard from './components/Dashboard/EmployeeBoard'
import { AuthContext } from './context/AuthProvider'
import { setLocalStorage } from './utils/LocalStorage'


const App = () => {

  const [user, setuser] = useState(null)
  const authdata = useContext(AuthContext)
  const [loggedInUserData, setloggedInUserData] = useState(null)
 




  const handleLogin = (email, pswd) => {
      email = email.trim()
  pswd = pswd.trim()
    if (authdata.admin.find((e) => email == e.email && pswd == e.password)) {

      let admin = authdata.admin.find((e) => email == e.email && pswd == e.password)
      setuser({ role: 'admin' })
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      setloggedInUserData(admin)

    } else {
      const employee = authdata.employees.find((e) => email == e.email && pswd == e.password)
      if (employee) {
        setuser({role:'employee'})
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }))
        setloggedInUserData(employee)
      }else{
        alert('invalid credentials')
      }
    }
  }



  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user?.role === 'admin' && <AdminBoard data={loggedInUserData} setloggedInUserData={setloggedInUserData} />}
      {user?.role === 'employee' && <EmployeeBoard data={loggedInUserData} setloggedInUserData={setloggedInUserData}/>}
    </>
  )
}

export default App

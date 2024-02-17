import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState()

  useEffect(() => {
    fetch('https://randomuser.me/api?results=100')
      .then(async res => await res.json())
      .then(res => {
        setUsers(res.results)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
    <div className='App'>
      <h1>Random Users List</h1>
      {JSON.stringify(users)}
    </div>
  )
}

export default App

import axios from 'axios'
import React from 'react'
import { useState } from 'react'

function App () {

  let [username, setUsername] = useState(null)
  let [age, setAge] = useState(null)
  let [city, setCity] = useState(null)


  async function getRes() {
    const res = await fetch("http://localhost:8000/")
    //need to convert in json
    // let data = res.json();
    // data
    // .then((e)=>{
    //   console.log(e);
    // })
    // .catch((e)=>{
    //   console.log(e);
    // })

    axios.post("http://localhost:8000/",{
      username,  //this is the data we need to send on the server 
      age,
      city
    })   // MORE SIMPLER then fetch
    .then ((e)=>{
      console.log(e.data.age);
    })
    .catch ((e)=>{
      console.log(e);
    })
  }


  return (
    <div>
      {/* <button onClick = {()=>getRes()}>send</button> */}

      <input type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)} />
      <input type="text" placeholder="age" value={age} onChange={(e)=>setAge(e.target.value)} />
      <input type="text" placeholder="city" value={city} onChange={(e)=>setCity(e.target.value)}  />
      <button onClick={()=>getRes()}>send</button>
    </div>
  )
}

export default App

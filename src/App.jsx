import React from 'react'
import { useState, useEffect } from 'react'


const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc")
      .then((res) => res.json())
      .then(d => setData(d.results))
      .catch((e) =>console.log(e))
  },[])
  return (
    <>
      <section className="w-screen h-screen  flex justify-center items-center">
        {data.length > 0 && data.map((e) => {
          return (
              <div key={e.id} className= "flex rounded bg-gradient-to-r to-pink-400 from-purple-500 p-2 ">

                <div className='bg-yellow-700 flex h-40 w-40 '>
                  <img src={e.picture.large}  className='rounded '  />
                </div>
                <div className='flex flex-col justify-center p-2 space-y-3  w-max'>
                  <p className="capitalize "><span className='font-bold'>Name: </span>{e.name.title}. {e.name.first} {e.name.last}</p>
                  <p className="capitalize "><span className='font-bold'>gender: </span>{e.gender.toString().slice(0,1).toUpperCase()+e.gender.toString().slice(1)}</p>
                  <p className="capitalize "><span className='font-bold'>Phone No: </span>{e.phone}</p>
                </div>
              </div>
          )
        })}

      </section>

    </>
  )
}

export default App



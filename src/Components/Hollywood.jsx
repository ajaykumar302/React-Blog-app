import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import { store } from './Data'
export const Hollywood = () => {
  let [items] = useContext(store)
  const add = items.filter((data) => { return data.category === "Hollywood" })
  return (
    <div className='main'>
    
     <div className='articals'>
     <h1 className='heading'>Hollywood</h1>
      {
        add.map((e,index) => (
          <Link className='start' to={`/${e.category}/${e.id}`}>
              <div className='card' key={index}>
                <div className='img'>
                  <img src={e.image} alt='' />
                </div>
                <div className='context'>
                  <h1 className='start'>{e.title}</h1>
                  <p className='id-para'>{e.about}</p>
                  <h4 className='date'>{e.category}/{e.Date}</h4>
                </div>
              </div>
            </Link>
        ))
      }
     </div>
     
     <div className='top-list'>
     <h3 className='heading'>Toppost</h3>
     {
        add.map((e,index) => (
          <Link className='start' to={`/${e.category}/${e.id}`}>
              <div className='card' key={index}>
                <div className='img'>
                  <img src={e.image} alt='' />
                </div>
                <div className='context'>
                  <h4 className='start'>{e.title}</h4>
                  <h5 className='date'>{e.category}/{e.Date}</h5>
                </div>
              </div>
            </Link>
        ))
      }
      <div className='ads'><h2>Advertisement</h2></div>
     </div>
    </div>
  )
}

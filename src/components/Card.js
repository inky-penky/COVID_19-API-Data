import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Card.css'

const Card = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {

      axios
        .get("https://covidnigeria.herokuapp.com/api")
        .then(res => {
        setPosts(res.data.data)
        .catch(err => err)
        })
      
    },[]);

  return (
    <div className='cardBody'>

        <div className='card_1'>
          <p className='totalSampleTested'>Total Sample Tested: <em>{posts.totalSamplesTested}</em></p>
          <p className='totalConfirmedCases'>Total Confirmed Cases: <em>{posts.totalConfirmedCases}</em></p>
          <p className='totalActiveCases'>Total Active Cases: <em>{posts.totalActiveCases}</em></p>
          <p className='discharged'>Total Discharged: <em>{posts.discharged}</em></p>
          <p className='death'>Total Deaths: <em className='last'>{posts.death}</em></p>
        </div>
        
        <div className='card_2'>
          {posts.states.map((state) => (
            <div className='box'>
              <img src='/img/covid1.jpeg' alt='covid_image' />
              <p>{`Name: ${state.state}`}</p>
              <p>{`Confirmed Cases: ${state.confirmedCases}`}</p>
              <p>{`Cases On Admission: ${state.casesOnAdmission}`}</p>
              <p>{`Discharged: ${state.discharged}`}</p>
              <p>{`Death: ${state.death}`}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Card
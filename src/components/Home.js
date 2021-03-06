import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios'
// import {Link} from 'react-router-dom'

import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
// import CheckButton from 'react-validation/build/button'

//components
import FormGroup from './common/FormGroup'
import ButtonSpinner from './common/ButtonSpinner'
import Result from './Result.js'



const Home = () => {
    const form = useRef()
    // const checkBtn = useRef()

    const [location, setLocation] = useState('')
    const [submittedLocation, setSubmittedLocation] = useState('')
    const [loading, setLoading] = useState(false)
    const [yelpData, setYelpData] = useState([])

   
    const yelp = () => {
        let API_KEY='xNLbwe9rAHISyqVVqaMKfvBUgQBx8PmcB-cxt2n8XsauOJOzY5HFJowooEucmrMpWerZfBlAJ9bzOEbzDDGeyAYpW7f6E1Xk1NLe6JxjzaS_Vo6L86gUkT4PN6vwX3Yx'
        // let API_KEY = "opj0qRGSY4uyO7tbxbzc6OICo0yziXXjc-p1vwBmnqLU5WM9KesSE1t0s8Hgo5x4dCcJDYWEvDeRx7HpK8mG-RKp6G6x5eh0dcDYD8vgs7MWnu_W20lpvaZMICTVX3Yx"
        axios.get(`${'https://sleepy-stream-23951.herokuapp.com/'}https://api.yelp.com/v3/businesses/search`, {
        // axios.get('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search', {
            headers: {
                Authorization: `Bearer ${API_KEY}`
            },
        params: {
            location: `${location}`,
            categories: 'coffee', //this gives the best cafe results
            limit: 25 //we can make a limit for how many appear when they search
        }
    })
        .then((res) => {
            //set results to state
            setYelpData(res.data.businesses)
            //console log the yelp results for that searched location
            console.log(res.data.businesses)
        })
        .catch((err) => {
            console.log ('error connecting to YELP')
        })
    }

    const onChangeLocation = (e) => {
        const searchLocation = e.target.value
        setLocation(searchLocation)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        setLoading(true)
        form.current.validateAll()
        //call yelp api once form is submitted
        yelp()
        setLoading(false)
        let teaImage = document.querySelector('.disappearImage')
        teaImage.style.display = "none"
        let teaText = document.querySelector('.disappearText')
        teaText.style.display = "none"
    }

return(
    <div className="container searchContainer">
        
        
        <div className="searchFormContainer">
        <Form className="searchForm" onSubmit={handleSearch} ref={form}>
                        <Input 
                            style={{ borderRadius: '20px' }}
                            type='text'
                            placeholder="enter your location"
                            className='form-control'
                            name='location'
                            value={location}
                            onChange={onChangeLocation}
                        />
                        <button className="ml-1 roundedButton">Find Cafes</button>
                    {/* <ButtonSpinner text="Find Cafes" loading={loading} /> */}
        </Form>
        </div>
        <div className="imagesHome">     
        <img className="disappearImage" src="https://i.imgur.com/6DsCqIF.jpg" height="500vh" width="500vw"/>
        <div className="disappearText">Search to get started!</div>
        </div> 
        <Result yelpData={yelpData}/>
    </div>

   
)

}
export default Home
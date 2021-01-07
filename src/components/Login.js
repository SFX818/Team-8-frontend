//useRef lets us store data from our tags
import React, {useState, useRef} from 'react'

import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'

//components
import FormGroup from './common/FormGroup'
import ButtonSpinner from './common/ButtonSpinner'

//helper
import {login} from '../services/auth.service'
import { resMessage } from '../utilities/functions.utilities'

//Function given to react-validator
const required = (value) => {
    if(!value){
        return (
            <div className='alert alert-danger' role='alert'>
                This field is required!
            </div>
        )
    }
}

const Login = (props) => {
    const form = useRef()
    const checkBtn = useRef()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    //stores the username in our username state
    const onChangeUsername = (e) => {
        const username = e.target.value
        setUsername(username)
    }

    //stores the password in our password state
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        //clear out previous messages
        setMessage('')
        setLoading(true)
        //validates every field in your form
        form.current.validateAll()

        //validator stores errors and we can check if error exists
        if(checkBtn.current.context._errors.length === 0){
            login(username, password)
            .then(
                ()=>{
                    props.history.push("/profile")
                    window.location.reload()
                },
                //another way of formatting a .catch()
                (error) => {
                    //checking data received from backend
                    
                    setLoading(false)
                    setMessage(resMessage(error))
                }
            )
        }else{
            setLoading(false)
        }   
    }

    console.log(username, password)
    return(
        <div className="col-md-12">
            <div className="card card-container">
                <img 
                    src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                    alt="profile-img"
                    className="profile-img-card"
                />
                <Form onSubmit={handleLogin} ref={form}>
                    <FormGroup text="username">
                        <Input 
                            type='text'
                            className='form-control'
                            name='username'
                            value={username}
                            onChange={onChangeUsername}
                            validations={[required]}
                        />
                    </FormGroup>
                    <FormGroup text="password">
                        <Input 
                            type="password"
                            className='form-control'
                            name='password'
                            //give value of state password
                            value={password}
                            onChange={onChangePassword}
                            validations={[required]}
                        />
                    </FormGroup>

                    <ButtonSpinner text="login" loading={loading} />

                    {message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                    <CheckButton style={{display: "none"}} ref={checkBtn}/>
                </Form>
            </div>
        </div>
    )
}

export default Login
import React, { useState } from "react"

function Login(props) {
    const [userDetails, setuserDetails] = useState({
        email: '',
        password: ''
    })
    const [isEmailValid, setisEmailValid] = useState(true)
    const [emailError, setemailError] = useState('')

    const [isPasswordValid, setisPasswordValid] = useState(true)
    const [passwordError, setpasswordError] = useState('')
    const login = (event) => {
        console.log(event);
        event.preventDefault()
        console.log(userDetails);

        const isValid = validateEmail(userDetails.email)
        const isValidPass = validatePassword(userDetails.password)

        if (isValid && isValidPass) {
            // Programatically navigate
            console.log('props', props);
            props.history.push('/home')
        } else {
            console.error('not valid');
        }
    }
    const validateEmail = (email) => {
        if (email) {
            setisEmailValid(true)
            setemailError('')
            return true
        } else {
            setisEmailValid(false)
            setemailError('Please enter valid email')
            return false
        }
    }

    const validatePassword = (password) => {
        if (password) {
            setisPasswordValid(true)
            setpasswordError('')
            return true
        } else {
            setisPasswordValid(false)
            setpasswordError('Please enter valid password')
            return false
        }
    }
    // const handleEmailChange = (event) => {
    //     console.log(event);
    //     console.log('name', event.target.name);
    //     console.log('value', event.target.value);
    //     // 1. take a copy of the state
    //     const userDetailsCopy = { ...userDetails }
    //     userDetailsCopy.email = event.target.value
    //     setuserDetails(userDetailsCopy)
    // }
    // const handlePasswordChange = (event) => {
    //     // 1. take a copy of the state
    //     const userDetailsCopy = { ...userDetails }
    //     userDetailsCopy.password = event.target.value
    //     setuserDetails(userDetailsCopy)
    // }
    const handleChange = (event) => {
        console.log(event.target.name);
        const userDetailsCopy = { ...userDetails }
        userDetailsCopy[event.target.name] =
            event.target.value
        setuserDetails(userDetailsCopy)
    }
    return (
        <div className="inp">
            <form onSubmit={login} >
                <div >
                    <input type="email"
                        name="email"
                        placeholder="Enter email"
                        onChange={(event) => {
                            handleChange(event)
                        }}
                        value={userDetails.email}
                    />
                    {!isEmailValid ? <span style={{color:'red',display:'block',
                fontSize:'15px'}}>{emailError}</span> : null}
                </div>
                <div>
                    <input type="password"
                        name="password"
                        placeholder="Enter password"
                        onChange={(event) => {
                            handleChange(event)
                        }}
                        value={userDetails.password}
                    />
                    {!isPasswordValid ? <span style={{color:'red',display:'block',
                fontSize:'15px'}}>{passwordError}</span> : null}
                </div>
                <div>
                    <input type="submit" value="Login" />
                </div>
            </form>
        </div>
    )
}

export default Login


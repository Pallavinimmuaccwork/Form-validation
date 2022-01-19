import React, { useState , useEffect} from "react"

function Login(props) {
    const [userDetails, setuserDetails] = useState({

        firstName:'',
        lastName:'',
        phoneNum:'',
        Dob:'',
        email: '',
        password: '',
        confirmPass:'',
       
    })

    const [isfirstNamevalid, setisfirstNamevalid] = useState(true)
    const [firstNameError, setfirstnameError] = useState('')

    const [islastNamevalid, setislastNamevalid] = useState(true)
    const [lastNameError, setlastnameError] = useState('')

    const [isphoneNumValid, setisphoneNumValid] = useState(true)
    const [phonenumError, setphonenumError] = useState('')

    const [isDobValid, setisDobvalid] = useState(true)
    const [dobError, setdobError] = useState('')

    const [isEmailValid, setisEmailValid] = useState(true)
    const [emailError, setemailError] = useState('')

    const [isPasswordValid, setisPasswordValid] = useState(true)
    const [passwordError, setpasswordError] = useState('')

    const [isconfirmPassvalid, setconfirmPassvalid] = useState(true)
    const [confirmPassError, setconfirmPassError] = useState('')


    const login = (event) => {
        console.log(event);
        event.preventDefault()
        console.log(userDetails);

        const isValid = validateEmail(userDetails.email)
        
        const isValidPass = validatePassword(userDetails.password)
        const isfirstNamevalid = validateFirstname(userDetails.firstName)
        const islastNamevalid = validatelastname(userDetails.lastName)
        const isphonenumValid = validatephoneNum(userDetails.phoneNum)
        const isDobValid = validateDob(userDetails.Dob)
        const isconfirmPassvalid = validateconfirmPass(userDetails.confirmPass)


        if (isValid && isValidPass && isfirstNamevalid && islastNamevalid && isphonenumValid &&
            isDobValid && isconfirmPassvalid) {
            // Programatically navigate
            console.log('props', props);
            props.history.push('/home')
        } else {
            console.error('not valid');
        }
    }
    const validateFirstname = (firstName) => {
        if (firstName) {
            setisfirstNamevalid(true)
            setfirstnameError('')
            return true
        } else {
            setisfirstNamevalid(false)
            setfirstnameError('Please enter your firstname')
            return false
        }
    }

    const validatelastname = (lastName) => {
        if (lastName) {
            setislastNamevalid(true)
            setlastnameError('')
            return true
        } else {
            setislastNamevalid(false)
            setlastnameError('Please enter your lastname')
            return false
        }
    
    }

    const validatephoneNum = (phoneNum) => {
        if (phoneNum) {
            setisphoneNumValid(true)
            setphonenumError('')
            return true
        } else {
            setisphoneNumValid(false)
            setphonenumError('Please enter your phone num')
            return false
        }
    
    }

    const validateDob = (Dob) => {
        if (Dob) {
            setisDobvalid(true)
            setdobError('')
            return true
        } else {
            setisDobvalid(false)
            setdobError('Please enter your Dob')
            return false
        }
    
    }

    const validateconfirmPass = (confirmPass) => {
        if (confirmPass) {
            setconfirmPassvalid(true)
            setconfirmPassError('')
            return true
        } else {
            setconfirmPassvalid(false)
            setconfirmPassError('Please the confirm password')
            return false
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
        // console.log(event.target.name);
        const userDetailsCopy = { ...userDetails }
        userDetailsCopy[event.target.name] =
            event.target.value
        setuserDetails(userDetailsCopy)
    }
    return (
        <div className="inp1">
            <form onSubmit={login}>

            <div>
                    <input type="text"
                        name="firstName"
                        placeholder="Enter your firstname"
                        onChange={(event) => {
                            handleChange(event)
                        }}
                        value={userDetails.firstName}
                    
                    />
                    {!isfirstNamevalid? <span style={{color:'red',display:'block',
                fontSize:'15px'}}>{firstNameError}</span> : null}
                </div>

                <div>
                    <input type="text"
                        name="lastName"
                        placeholder="Enter your lastname"
                        onChange={(event) => {
                            handleChange(event)
                        }}
                        value={userDetails.lastName}
                    />
                    {!islastNamevalid? <span style={{color:'red',display:'block',
                fontSize:'15px'}}>{lastNameError}</span> : null}
                </div>

                <div>
                    <input type="tel"
                        name="phoneNum"
                        placeholder="Enter your phonenum"
                        onChange={(event) => {
                            handleChange(event)
                        }}
                        value={userDetails.phoneNum}
                    />
                    {!isphoneNumValid? <span style={{color:'red',display:'block',
                fontSize:'15px'}}>{phonenumError}</span> : null}
                </div>

                <div>
                    <input type="date"
                        name="Dob"
                        placeholder="Enter your Dob"
                        onChange={(event) => {
                            handleChange(event)
                        }}
                        value={userDetails.Dob}
                    />
                    {!isDobValid? <span style={{color:'red',display:'block',
                fontSize:'15px'}}>{dobError}</span> : null}
                </div>

                
                <div>
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
                    {!isPasswordValid?<span style={{color:'red',
                    display:'block',
                    fontSize:'15px'}}>{passwordError}</span>:null}
                </div>

                <div>
                    <input type="password"
                        name="confirmPass"
                        placeholder="confirm password"
                        onChange={(event) => {
                            handleChange(event)
                        }}
                        value={userDetails.confirmPass}
                    />
                    {!isconfirmPassvalid? <span style={{color:'red',display:'block',
                fontSize:'15px'}}>{confirmPassError}</span> : null}
                </div>

                <div>
                    <input type="submit" value="Login" />
                </div>
            </form>
        </div>
    )
}

export default Login


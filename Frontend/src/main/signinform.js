import React, { useState } from "react"
import { motion } from 'framer-motion';
import axios from "axios"
import { useNavigate} from "react-router-dom"
import { NavLink } from 'react-router-dom'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function SigninForm() {
  const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("https://ecommerce-backend-vd4h.onrender.com",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    alert("Signing In")
                    history("/home",{state:{id:email}})
                }
                else if(res.data==="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }
  return (
    <motion.div
      className="col-md-6 offset-md-3"
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ stiffness: 150 }}
    >
      <div style={{width:"1000px",marginLeft:"-100px"}}>
      <MDBContainer className='my-5'>
      <MDBCard>

        <MDBRow className='g-0 d-flex align-items-center'>

          <MDBCol md='6' >
            <MDBCardImage style={{height:"600px",width:"600px"}} src='https://www.addictioncenter.com/app/uploads/2020/01/online_shopping_addiction-scaled.jpeg' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
          </MDBCol>

          <MDBCol md='4'>

            <MDBCardBody style={{width:"400px",marginLeft:"50px"}}>

              <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'onChange={(e) => { setEmail(e.target.value) }}/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'onChange={(e) => { setPassword(e.target.value) }}/>

              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="!#">Forgot password?</a>
              </div>

              <MDBBtn className="mb-4 w-100"onClick={submit}>Sign in</MDBBtn>
              <div>
                <p className="mb-0">Don't have an account? <NavLink class="text-black-50 fw-bold" to="/signup">Sign up</NavLink></p>
              </div>
            </MDBCardBody>

          </MDBCol>

        </MDBRow>

      </MDBCard>
    </MDBContainer>
      </div>
</motion.div>
  );
}

export default SigninForm;

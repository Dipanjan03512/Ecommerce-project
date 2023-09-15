import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import Select from "react-select";
import axios from "axios"
import { useNavigate } from "react-router-dom"
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
}
from 'mdb-react-ui-kit';

function Signupform() {
  const Options=[
    { value: "1", label:"Electronics" },
    { value: "2",label:"Beauty"},
    { value: "3",label:"Mobiles"},
    { value: "4",label:"Laptop"},
    { value: "5" ,label:"Toys"},
    { value: "6",label:"Gaming Console"},
    { value: "7",label:"Grocery"},
    { value: "8", label:"Fashion"},
    { value: "9",label:"Appliances"},
    { value: "10", label:"Furniture"}
  ]
  const history=useNavigate();

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [selectedOptions, setSelectedOptions] =useState([]);
  const [phone,setPhone]=useState('')
  const [fullName,setFullName]=useState('')
  const [country,setCountry]=useState([])
 
  const handle =(e)=>{
    setCountry(e);
  } 
  const countryHandle=(selectedOption1)=>{
    setSelectedCountry(selectedOption1);
  }
  async function submit(e){
      e.preventDefault();
      handle(e);
      try{

          await axios.post("https://ecommerce-backend-vd4h.onrender.com/signup",{
              email,password,selectedOptions,phone,fullName,country
          })
          .then(res=>{
              if(res.data==="exist"){
                  alert("User already exists")
              }
              else if(res.data==="notexist"){
                alert("Sign up Complete")
                  history("/")
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
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        setSelectedCountry(data.userSelectValue);
      });
  }, []);
  return (
    <>
    <motion.div
      className="col-md-6 offset-md-3"
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ stiffness: 150 }}
    >
       <div style={{backgroundImage: 'url("https://img.freepik.com/free-vector/hand-drawn-shopping-pattern-design_23-2149633578.jpg?w=2000")',backgroundSize: "contain"}}>
    <MDBContainer>
      <MDBRow className='justify-content-center align-items-center m-5'>
        <MDBCard style={{marginTop:"90px"}}>
          <MDBCardBody className='px-4'>
            <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Create Account</h3>
            <MDBRow>
              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Full Name' size='lg' id='form1' type='text'onChange={(e) => { setFullName(e.target.value) }}/>
              </MDBCol>
              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Email' size='lg' id='form4' type='email' onChange={(e) => { setEmail(e.target.value) }}/>
            </MDBCol>
              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form2' type='password' onChange={(e) => { setPassword(e.target.value) }}/>
              </MDBCol>
              <MDBCol md='6'>
                <MDBInput wrapperClass='mb-4' label='Phone Number' size='lg' id='form5' type='rel' onChange={(e) => { setPhone(e.target.value) }}/>
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol md='6'>
              <Select
              isMulti
              value={selectedOptions}
              onChange={(e) => setSelectedOptions(e)}
              options={Options}
              isOptionDisabled={() => selectedOptions.length >= 4}
              placeholder="Select Any 4"
              />
              </MDBCol>
              <MDBCol md='6'>
              <Select
                options={countries}
                value={selectedCountry}
                onChange={(e)=> {handle(e);countryHandle()}}
                placeholder="Select Any Country"
                defaultValue={{ label: "Select country", value: 1 }}
               />
              </MDBCol>
              
            </MDBRow>
            <br></br>
            <div style={{textAlign: 'center'}}>
            <MDBBtn className='mb-4' size='lg' onClick={submit}>Submit</MDBBtn>
            </div>
            <div>
                <p className="mb-0">Already Have an Account? <a href="/" class="text-blue-50 fw-bold">SignIn</a></p>

              </div>
          </MDBCardBody>
        </MDBCard>
      </MDBRow>
    </MDBContainer>
    </div>
</motion.div>
    </>
    
 
  );
}

export default Signupform;

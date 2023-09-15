import React, { useState } from 'react';
import Head from './Head';
import ProfileContent from './ProfileContent';
import './Profile.css';
import { Footer, Navbar } from "../components";
import { motion } from 'framer-motion';

const Profile = () => {
  const [active, setActive] = useState(1);

  return (
    <>
     <motion.div
      className="col-md-15 offset-md-3"
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ stiffness: 150 }}
      id='animate'
      style={{marginLeft:"-10px"}}
    >
       <Navbar />
    <div className='profile_head'>
      <Head />
      <div className='profile_bodyContaint'>
        <ProfileContent active={active} />
      </div>
    </div>
    <Footer />
    </motion.div>
    </>
    
  )
}

export default Profile
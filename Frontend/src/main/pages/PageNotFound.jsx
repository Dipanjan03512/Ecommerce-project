import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components";
import { motion } from 'framer-motion';

const PageNotFound = () => {
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
      <div className="container my-3 py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-12 py-5 bg-light text-center">
              <h4 className="p-3 display-5">404: Page Not Found</h4>
              <Link to="/" className="btn  btn-outline-dark mx-4">
                <i className="fa fa-arrow-left"></i> Go Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default PageNotFound;

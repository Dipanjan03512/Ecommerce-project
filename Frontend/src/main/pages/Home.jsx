import { Navbar, Main, Product, Footer } from "../components";
import { motion } from 'framer-motion';

function Home() {
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
      <Main />
      <Product />
      <Footer />
    </motion.div>
    </>
  )
}

export default Home
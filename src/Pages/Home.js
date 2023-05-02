import React from 'react'
import About from './About';
import Service from './Service';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Skill from './Skill';
import Quality from './Quality';
import Footer from './Footer';
import Header from './Header';

const Home = () => {
  
  return (
    <div>
      <br></br><br></br>
      <Header/>
      <br></br><br></br>
       <About/>
       <Skill/>
       <Quality/>
       <Service/>
       <Portfolio/>
       <Contact/>
       <Footer/>
       

      

    </div>
  )
}

export default Home;

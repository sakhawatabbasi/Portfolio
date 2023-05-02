import React from 'react'
import Profile from '../img/profile.jpg'
const About = () => {
  return (
    <div>

      <div className="container-fluid py-5" id="about">
        <div className="container mt-5">
            <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white" >About</h1>
                <h1 className="position-absolute text-uppercase text-primary">About Me</h1>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-4 pb-4 pb-lg-0">
                    <img className="img-fluid rounded w-100" src={Profile} alt=""/>
                </div>
                <div className="col-lg-5">
                    <h3 className="mb-4">Junior Web Developer</h3>
                    <p>I want to learn more and seeking a position where i can utilize my potential by acquiring professional knowledge with practical skills.  I want to become a successful and most efficient employer. I really want to be dependable and shall prove to be an asset to any organization which i join.</p>
                    <div className="row ">
                        <div className="col-sm-6 py-2"><h6>Name: <span className="text-secondary">Sakhawat Abbasi</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Birthday: <span className="text-secondary">15 December 2000</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Degree: <span className="text-secondary">BSCS</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Experience: <span className="text-secondary">0.8 Years</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Phone: <span className="text-secondary">+92 316 0521967</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Email: <span className="text-secondary">sakhawatabbasi9@gmail.com</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Address: <span className="text-secondary">Islamabad,Pakistan</span></h6></div>
                        <div className="col-sm-6 py-2"><h6>Freelance: <span className="text-secondary">Available</span></h6></div>
                    </div>
                    <h1 className="btn blue btn-outline-primary mr-4">Hire Me</h1>
                    <h1 className="btn btn-outline-primary">Learn More</h1>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About

import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="container-fluid bg-primary text-white mt-5 py-1 px-sm-1 px-md-5">
        <div className="container text-center py-2">
            <div className="d-flex justify-content-center mb-5">
                <span className="btn btn-light btn-social mr-2"><i className="fab fa-twitter"></i></span>
                <span className="btn btn-light btn-social mr-2"><i className="fab fa-facebook-f"></i></span>
                <span className="btn btn-light btn-social mr-2"><i className="fab fa-linkedin-in"></i></span>
                <span className="btn btn-light btn-social"><i className="fab fa-instagram"></i></span>
            </div>
            <div className="d-flex justify-content-center ">
                <span className="text-white">Privacy</span>
                <span className="px-3">|</span>
                <span className="text-white">Terms</span>
                <span className="px-3">|</span>
                <span className="text-white" >FAQs</span>
                <span className="px-3">|</span>
                <span className="text-white" >Help</span>
            </div>
            <p className="m-0">&copy; <span className="text-white font-weight-bold">Created By </span> Sakhawat Abbasi
            </p>
        </div>
    </div>
    </div>
  )
}
export default Footer;
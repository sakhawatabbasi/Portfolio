import React from 'react'

const Service = () => {
  return (
    <div>
      <div className="container-fluid pt-5" id="service">
        <div className="container mt-5">
            <div className="service-h4 position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white" >Service</h1>
                <h1 className="position-absolute text-uppercase text-primary">My Services</h1>
            </div>
            <div className="row pb-3">
                <div className="service-box col-lg-4 col-md-6 text-center mb-5">
                    <div className="d-flex align-items-center justify-content-center mb-4">
                        <i className="fa fa-2x fa-laptop service-icon bg-primary text-white mr-3"></i>
                        <h4 className="font-weight-bold m-0">Web Design</h4>
                    </div>
                    <p>Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore eirmod erat clita</p>
                </div>
                <div className="service-box col-lg-3 col-md-6 text-center mb-5">
                    <div className="d-flex align-items-center justify-content-center mb-4">
                        <i className="fa fa-2x fa-laptop-code service-icon bg-primary text-white mr-3"></i>
                        <h4 className="font-weight-bold m-0">Development</h4>
                    </div>
                    <p>Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem</p>
                </div>
                <div className="service-box col-lg-4 col-md-6 text-center mb-5">
                    <div className="d-flex align-items-center justify-content-center mb-4">
                        <i className="fab fa-2x fa-android service-icon bg-primary text-white mr-3"></i>
                        <h4 className="font-weight-bold m-0">Apps Design</h4>
                    </div>
                    <p>Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore eirmod erat clita</p>
                </div>
                <div className="service-box col-lg-4 col-md-6 text-center mb-5">
                    <div className="d-flex align-items-center justify-content-center mb-4">
                        <i className="fab fa-2x fa-apple service-icon bg-primary text-white mr-3"></i>
                        <h4 className="font-weight-bold m-0">Apps Development</h4>
                    </div>
                    <p>Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem Amet lorem lorem</p>
                </div>
                <div className="service-box col-lg-3 col-md-6 text-center mb-5">
                    <div className="d-flex align-items-center justify-content-center mb-4">
                        <i className="fa fa-2x fa-search service-icon bg-primary text-white mr-3"></i>
                        <h4 className="font-weight-bold m-0">SEO</h4>
                    </div>
                    <p>Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem  </p>
                </div>
                <div className="service-box col-lg-4  col-md-7 text-center mb-5">
                    <div className="d-flex align-items-center justify-content-center mb-4">
                        <i className="fa fa-2x fa-edit service-icon bg-primary text-white mr-3"></i>
                        <h4 className="font-weight-bold m-0">Content Creating</h4>
                    </div>
                    <p>Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore eirmod erat clita</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Service

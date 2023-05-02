import React from 'react'
import portfolio from '../img/portfolio-1.jpg'
import portfolio2 from '../img/portfolio-2.jpg'
import portfolio3 from '../img/portfolio-3.jpg'
import portfolio4 from '../img/portfolio-4.jpg'
import portfolio5 from '../img/portfolio-5.jpg'
import portfolio6 from '../img/portfolio-6.jpg'


const Portfolio = () => {


  return (
    <div>
      <div className="container-fluid pt-5 pb-3" id="portfolio">
        <div className="container mt-5">
            <div className="position-relative d-flex align-items-center justify-content-center">
                <h1 className="display-1 text-uppercase text-white" >Gallery</h1>
                <h1 className="position-absolute text-uppercase text-primary">My Portfolio</h1>
            </div>
            <div className="row">
                <div className="col-12 text-center mb-2">
                    <ul className="list-inline mb-4" id="portfolio-flters">
                        <li className="btn btn-sm btn-outline-primary m-1 active"  data-filter="*">All</li>
                        <li className="btn btn-sm btn-outline-primary m-1" data-filter=".first">Design</li>
                        <li className="btn btn-sm btn-outline-primary m-1" data-filter=".second">Development</li>
                        <li className="btn btn-sm btn-outline-primary m-1" data-filter=".third">Marketing</li>
                    </ul>
                </div>
            </div>
            <div className="row portfolio-container">
                <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
                    <div className="position-relative overflow-hidden mb-2">
                        <img className="img-fluid rounded w-100" src={portfolio} alt=""/>
                        <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                            <a href={portfolio} data-lightbox="portfolio">
                                <i className="fa fa-plus text-white"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
                    <div className="position-relative overflow-hidden mb-2">
                        <img className="img-fluid rounded w-100" src={portfolio2} alt=""/>
                        <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                            <a href={portfolio2} data-lightbox="portfolio">
                                <i className="fa fa-plus text-white" ></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 portfolio-item third">
                    <div className="position-relative overflow-hidden mb-2">
                        <img className="img-fluid rounded w-100" src={portfolio3} alt=""/>
                        <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                            <a href={portfolio3} data-lightbox="portfolio">
                                <i className="fa fa-plus text-white" ></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
                    <div className="position-relative overflow-hidden mb-2">
                        <img className="img-fluid rounded w-100" src={portfolio4} alt=""/>
                        <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                            <a href={portfolio4} data-lightbox="portfolio">
                                <i className="fa fa-plus text-white" ></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
                    <div className="position-relative overflow-hidden mb-2">
                        <img className="img-fluid rounded w-100" src={portfolio5} alt=""/>
                        <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                            <a href={portfolio5} data-lightbox="portfolio">
                                <i className="fa fa-plus text-white" ></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 portfolio-item third">
                    <div className="position-relative overflow-hidden mb-2">
                        <img className="img-fluid rounded w-100" src={portfolio6} alt=""/>
                        <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
                            <a href={portfolio6} data-lightbox="portfolio">
                                <i className="fa fa-plus text-white" ></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Portfolio

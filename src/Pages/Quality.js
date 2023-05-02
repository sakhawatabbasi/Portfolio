import React from 'react'

const Quality = () => {
  return (
    <div>
    <div className="container-fluid py-5" id="qualification">
        <div className="container">
            <div className="position-relative d-flex align-items-center justify-content-center  mt-5">
                <h1 className="display-1 text-uppercase text-white" >Quality</h1>
                <h1 className="position-absolute text-uppercase text-primary">Education & Expericence</h1>
            </div>
            <div className="row align-items-center  mt-5">
                <div className="col-lg-6">
                    <h3 className="mb-4">My Education</h3>
                    <div className="border-left border-primary pt-2 pl-4 ml-2">
                        <div className="position-relative ex-me mb-4">
                            <h5 className="font-weight-bold mb-1">Bachelor of Computer Science</h5>
                            <p className="mb-2"><strong>University Of Azad Jammu And Kishmir</strong> | <small>2017 - 2021</small></p>
                            <p>Tempor eos dolore amet tempor dolor tempor.</p>
                             </div>
                        <div className="position-relative ex-me mb-4">
                            <h5 className="font-weight-bold mb-1">ICS</h5>
                            <p className="mb-2"><strong>Prime collage chinari</strong> | <small>2015 - 2017</small></p>
                            <p>Tempor eos dolore amet tempor dolor tempor.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <h3 className="mb-4">My Expericence</h3>
                    <div className="border-left border-primary pt-2 pl-4 ml-2">
                        <div className="position-relative ex-me mb-4">
                            <h5 className="font-weight-bold mb-1">Web Developer(Fresher)</h5>
                            <p className="mb-2"><strong>Eziline Software House </strong> | <small> Good</small></p>
                            <p>Tempor eos dolore amet tempor dolor tempor.</p>
                        </div>
                        <div className="position-relative ex-me mb-4">
                            <h5 className="font-weight-bold mb-1">Jr. Web Developer</h5>
                            <p className="mb-2"><strong>Alberuni Tech. Private Ltd.</strong> | <small> Excellent</small></p>
                            <p>Tempor eos dolore amet tempor dolor tempor.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Quality

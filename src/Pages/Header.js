import profile from '../img/profile.jpg'
const Header = () => {
    window.addEventListener("scroll", function() {
        var navbar = document.querySelector(".navbar");
        if (window.scrollY >10) {
          navbar.style.display = "flex";
          navbar.style.animation = "fadeIn 0.5s";
        } else {
          navbar.style.display = "none";
          navbar.style.animation = "fadeOut 0.5s";
        }
      });
  return (
    <div>
      <div className="container-fluid bg-dark d-flex align-items-center mb-5 py-5" id="home" >
        <div className="container mt-5">
            <div className="row align-items-center">
                <div className="col-lg-7 text-center text-lg-left">
                    <h3 className="text-white font-weight-normal mb-3">Hello, my name</h3>
                    <h1 className="display-4 text-uppercase text-primary mb-2" >Sakhawat Abbasi</h1>
                    <span className="typed-text-output d-inline font-weight-lighter text-white"></span>
                    <div className="typed-text d-none">Junoir Front End Developer, Front End Developer</div>
                    <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                        <span className="btn btn-white mr-4">Download CV</span>
                        <span className="btn btn-blue d-none d-sm-block">Play Video</span>
                    </div>
                </div>
                <div className="col-lg-4 px-6 pl-lg-0 pb-5 pb-lg-4 about-img">
                    <img className="img-fluid w-100 rounded-circle shadow-sm" src={profile} alt=""/>
                </div>
            </div>
        </div>
    </div>
  </div>
  )
}
export default Header;
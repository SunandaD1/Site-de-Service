import {Link} from 'react-router-dom';


function Footer(){
    return(
    <section className="section footer bg-dark text-white">
        <div className="container">
            <div className="row">

            <div className="col-md-4">
                <h6>Company Information</h6>
                <hr />
                <p>
                    Learnanda is a student-focused tutoring platform built to help learners of all 
                    ages unlock their full academic potential. 
                </p>
            </div>

            <div className="col-md-4">
                <h6>Quick Links</h6>
                <hr />
                <div><Link to="/">Home</Link></div>
                <div><Link to="/about">About</Link></div>
                <div><Link to="/contact">Book a Tutor</Link></div>
            </div>

            <div className="col-md-4">
                <h6>Contact Information</h6>
                <hr />
                <div><p className="text-white mb-1">Ottawa, Ontario</p></div>
                <div><p className="text-white mb-1">Office: (123)123-1244</p></div>
                <div><p className="text-white mb-1">Department: (123)123-1255</p></div>
                <div><p className="text-white mb-1">tutors@learnanda.com</p></div>
            </div>

            </div>
        </div>
        </section>

    );
}

export default Footer;
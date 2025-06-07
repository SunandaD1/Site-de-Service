import React from 'react'; //not really needed bc react is a newer version, compiles by itself does not need the tag!!
import Slider from '../includes/Slider';
import {Link} from 'react-router-dom';
import Alert from '../includes/Alert';
import NeedHelp from './include/NeedHelp';
import tutor1 from '../images/tutor1.jpg';
import tutor2 from '../images/tutor2.webp';
import tutor3 from '../images/tutor3.webp';


function Home() {
    return (

        <div> 
                <Alert/>
                <Slider />
            
            <section className='section'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">What is Learnanda?</h3>
                            <div className="underline mx-auto"></div>
                            <p>
                               Learnanda is a student-focused tutoring platform built
                                to help learners of all ages unlock their full academic
                                 potential. Whether you're preparing for a crucial 
                                 exam, catching up on difficult concepts, or aiming to
                                  go beyond the curriculum, Learnanda connects you 
                                  with tutors who truly understand your journey.
                            </p>
                            <div className="d-flex justify-content-center gap-3 mt-4">
                            <Link to="/about" className="btn btn-warning shadow me-3">Read More</Link>
                            <Link to="/contact" className="btn btn-warning shadow">Book a tutor today!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* tutors */}

            <section className="section bg-light border-top border-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Meet our Tutors!</h3>
                            <div className="underline mx-auto"></div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow"> 
                                <img src={tutor1} className="w-100 border-bottom" alt="Tutors"></img>
                                <div className="card-body">
                                    <h6>Melissa</h6>
                                    <div className="underline"></div>
                                    <p>G11 English</p>
                                    <p>$30/h</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow"> 
                                <img src={tutor2} className="w-100 border-bottom" alt="Tutors"></img>
                                <div className="card-body">
                                    <h6>Mark</h6>
                                    <div className="underline"></div>
                                    <p>G12 Math</p>
                                    <p>$45/h</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow"> 
                                <img src={tutor3} className="w-100 border-bottom" alt="Tutors"></img>
                                <div className="card-body">
                                    <h6>Cassie</h6>
                                    <div className="underline"></div>
                                    <p>G9 Science</p>
                                    <p>$35/h</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* need help section */}

            <NeedHelp></NeedHelp>


        </div>
    );
}

export default Home;
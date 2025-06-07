import React from 'react';

function Contact() {
    return (
        <div>
            <section className="py-4 bg-warning">
            <div className="container">
                <div className="row">

                <div className="col-md-4 my-auto">
                    <h4>Book a Tutor</h4>
                </div>

                <div className="col-md-8 my-auto">
                    <h6 className="float-end">
                    Home / Book a Tutor
                    </h6>
                </div>

                </div>
            </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <h6>Book and get a tutor within a day!</h6>
                                    <hr />
                                        <div className="form-group">
                                        <label className="mb-1">Full Name</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            className="form-control"
                                            placeholder="Enter Full Name"
                                        />
                                        </div>
                                        <div className="form-group">
                                        <label className="mb-1">Phone Number</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            className="form-control"
                                            placeholder="Enter your phone number"
                                        />
                                        </div>
                                        <div className="form-group">
                                        <label className="mb-1">Email Address</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            className="form-control"
                                            placeholder="Enter your Email Address"
                                        />
                                        </div>
                                        <div className="form-group">
                                        <label className="mb-1">Message</label>
                                        <textarea rows="3" className="form-control" 
                                        placeholder="Leave any extra comments to your tutor!"></textarea>
                                        </div>
                                        <div className="form-group py-3">
                                        <button type="button" className="btn btn-warning w-100">Finish booking</button>
                                        </div>
                                </div>
                                
                                <div className="col-md-6 border-start">
                                <h6>Select an appointment date</h6>
                                <hr />
                                <div className="form-group">
                                    <label className="mb-1">Appointment Date</label>
                                    <input
                                    type="date"
                                    name="appointmentDate"
                                    className="form-control"
                                    />
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Contact;
import React from 'react';

function About() {
    return (
    <div>
        <section className="py-4 bg-warning">
        <div className="container">
            <div className="row">

            <div className="col-md-4 my-auto">
                <h4>About Us</h4>
            </div>

            <div className="col-md-8 my-auto">
                <h6 className="float-end">
                Home / About Us
                </h6>
            </div>

            </div>
        </div>
        </section>

        <section className="section bg-light border-bottom">
        <div className="container">
            <h5>Our Company</h5>
            <div className="underline"></div>
                <p>
                    Learnanda was created with one simple goal: to make tutoring fast, easy, and available to everyone.
                    It all started when founder Sunanda Datta saw how many students were struggling to find help when they needed it most.
                    Some had tight deadlines, others just wanted someone to explain things in a way that made sense. All without the stress, delays, or complicated platforms.
                </p>
                <p>
                    So, she built Learnanda: a place where students can quickly connect with friendly, knowledgeable tutors who explain things clearly.
                    Whether it’s for a test tomorrow or a tough topic from class, Learnanda makes finding support simple.
                </p>
                <p>
                    We believe that learning should never feel out of reach. That’s why we focus on:
                </p>
                <ul>
                    <li><strong>Fast, reliable connections</strong> to qualified tutors</li>
                    <li><strong>Straightforward tools</strong> anyone can use</li>
                    <li><strong>Support that feels personal, not overwhelming</strong></li>
                </ul>
                <p>
                    Learnanda is here to help you move forward, one session at a time.
                </p>
        </div>
        </section>
    </div>

    );
}

export default About;
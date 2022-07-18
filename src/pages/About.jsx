import '../assets/css/about.css';

import portrait from '../assets/images/testimonial-1-new.jpg';


export default function About() {
    return (
        <section class="testimonial-section-one" id="about">
            <div class="auto-container">
                <div class="testimonial-outer">
                    <div class="client-testimonial-carousel owl-carousel owl-theme">
                        <div class="testimonial-block-one">
                            <div class="row">
                                <div class="col-md-5">
                                    <div class="image"><img src={portrait} alt="person"/></div>
                                    <div class="quote-icon"><span class="flaticon-quote"></span></div>
                                </div>
                                <div class="col-md-7">
                                    <div class="sec-title">
                                        <h2 class="aboutme" >About Me</h2>
                                    </div>
                                    <h4>I always consider design as an art of communication.
                                        By translating abstract ideas into approachable goals, designers are building
                                        bridges between fantasy and reality.
                                        
                                        <blockquote class="pullquote">
                                        "A good designer listens, understands and realizes clients' desires."
                                        </blockquote>
                                        As a designer with an engineering background, I'm more like a level-headed
                                        pragmatist instead of an idealist - I help clients find straightforward paths to
                                        their goals, delivering their concepts.
                                        Till today, my
                                        curiosity still leads me in the path of designer to explore more possibilities
                                        and innovative solutions.
                                        For me, the best design should be like breathable air - pure and
                                        unnoticeable, while it exists everywhere in everyone's life.
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </section >
    );
}
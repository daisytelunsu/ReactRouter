import '../assets/css/projects.css';
import '../assets/css/project.css'; //This one is totally downloaded from an online template only for animation purposes, not done by my own
import projectImage1 from '../assets/images/1-new.jpg';
import projectImage2 from '../assets/images/2-new.jpg';
import projectImage4 from '../assets/images/4-new.jpg';


export default function Projects() {
    return (
        <section class="gallery-section">
            <div class="auto-container">
                        <div class="items-container row-45">
                            <div class="col-md-6 col-sm-6 col-xs-12 pl-45 pr-45">
                                <div class="sec-title">
                                    <h2 class="blk">Case Study</h2>
                                </div>
                            </div>

                            <div class="col-md-6 col-sm-6 col-xs-12 projects-block-one">
                                <div class="inner-box">
                                    <figure class="image">
                                        <img src={projectImage1} alt="An app display"/>
                                            <div class="overlay">
                                            </div>
                                    </figure>
                                    <div class="caption-title">
                                        <h4>e-Cycle: UI | UX Design</h4>
                                        <span>E-bike sharing platform app, 2022</span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-sm-6 col-xs-12 projects-block-one">
                                <div class="inner-box">
                                    <figure class="image">
                                        <img src={projectImage2} alt="An app display"/>
                                            <div class="overlay">
                                            </div>
                                    </figure>
                                    <div class="caption-title">
                                        <h4>Little Builder: UI | UX Design</h4>
                                        <span>Time management app, 2021</span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6 col-sm-6 col-xs-12 projects-block-one">
                                <div class="inner-box">
                                    <figure class="image">
                                        <img src={projectImage4} alt="Web design work display"/>
                                            <div class="overlay">
                                            </div>
                                    </figure>
                                    <div class="caption-title">
                                        <h4>Daisy's Flower: Web Dev</h4>
                                        <span>Online flower store, 2021</span>
                                    </div>
                                </div>
                            </div>
                    </div>
                
            </div>
        </section>
    );
}
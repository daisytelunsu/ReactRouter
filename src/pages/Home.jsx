import '../assets/css/home.css'; //import page stylesheet
import '../assets/css/style.css'; //import general stylesheet
//import images
import projectImage1 from '../assets/images/1-new.jpg';
import projectImage2 from '../assets/images/2-new.jpg';
import projectImage4 from '../assets/images/4-new.jpg';


export default function Home() {
    return (
        <div class="container">
            {/* A brief personal statement */}
            <div class="home-section blk">
                <h1 class="text-centered gap">Hi, I'm Jingyun: A UI/UX Designer</h1>
                <h4>I'm a passionate and detail-oriented designer with a background of visual
                    design, web development and engineering. Dedicated to providing user-friendly and
                    functional designs that offer more effective solutions and smoother online
                    experience to the clients.</h4>
            </div>
            {/* Recent work display section */}
            <div class="home-section">
                <h1 class="gap blk">My Recent Work</h1> 
                <div class="image-container">
                    <img class="gallery-item" src={projectImage1} alt="project1" />
                    <img class="gallery-item" src={projectImage2} alt="project2" />
                    <img class="gallery-item" src={projectImage4} alt="project3" />
                </div>
            </div>
        </div>
    );
}
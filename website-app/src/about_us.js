import {Link} from 'react-router-dom';
import "./about_us.css";
import logo_airplane from './airplane_logo.png'


export default function (){
    return (
        <>
       
    <div class="about_over"> 
    <div id="about">
    <div class = "Head">
        <div class = "Header">
            <h1 id = "about_us" class="text text-center">
                About Us
            </h1>
        </div>
    </div>
    <br></br>
    <br></br>
    <div class = "text text-center">
        <p>
        L'avion is India's most preferred airline booking website, with an average traffic of 100 bookings per minute, it is one of the most user friendly and quick ticket booking website ever created in history.
Since our inception we have grown temendously and promise to grow even further in the future.

We promise you to provide a smooth experience while booking tickets with assured and safe transactions in no time!
</p>
        </div>

        

       </div>
       
       
       
       
        <Link to="/"> 
            <button id = "home" class="btn btn-warning">
                Home
            </button>
        </Link>

        </div>

    </>
    );
}

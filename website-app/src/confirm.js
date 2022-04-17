import './mainpage.css';
import back_confirm from "./airplane_bg_1.jpg"
import "./confirm.css";
import {Link} from "react-router-dom";
import icon from "./home_icon.png";

export default function(){
    return (
    <>

<div class ="home_page">
    <div class="row">
    <div id ="back" class="col-5 ">

    <img src={back_confirm}/>
    </div>
    </div>
    </div>
 <div class = "deatils">   
<h1>Your flight has been booked!
    <p>
        You will receive the flight details on your registered email.
    </p>
</h1>
</div>
<div id = "home_button"class="btn btn-warning btn-lg">
<Link to="/">
    home</Link>  

</div>


</>


);
}
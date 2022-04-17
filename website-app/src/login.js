import {Link} from "react-router-dom";
import air_window from "./aiplane_bg_2.jpg";
import "./login.css";


export default function (){
    return (
        <>
    
    <div class ="homePage">
    <div class="row">
    <div id ="back" class="col-5 ">

    <img src={air_window}/>
    </div>
    </div>
    </div>
    <div class = "credentials">
    <h1 id = "login">
        Username
    </h1>
    <input type = "text" name = "username" required >
    </input>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>

    <h1 id = "password">
        Password
    </h1>
    <input type = "password" name = "password" required>
    </input>
        
    </div>
    <br>
    </br>
        <div class  ="login_button text-centre mx--4">
        <Link to="/mainpage_after">
        <button class = "btn btn-danger">
            Login
        </button>
        </Link>
    </div>
    <div class="log text-center">
    <h1>Login</h1>
    </div>  



</>
);}

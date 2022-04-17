import airplane from './airplane_logo.png'
import home from './airplane_bg_3.png'
import './mainpage.css';

import {Link} from "react-router-dom";

export default function (){
    return (
        <>

<div class="navigation-bar">
    <nav class="navbar navbar-expand-md  navbar-dark " name = "navbar1">
   
    
        <div class="container-xxl ">
             <div class="row">
               <div class="col-5">
                    <img src={airplane}/></div>
                <div class="col-5">
                    <h1 id="companyname">L'avion</h1></div>
            </div>  
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav" aria-controls="main-nav" aria-expanded="false" aria-label="Toggle-navigation">
                <span class="navbar-toggler-icon">
    
                </span>
            </button>    
    </div>
</nav>

</div>


<div class ="home_page">
<div class="row">
<div class="col-5">
<img src={home}/>
</div>
</div>
</div>

<div class= "button-group">
    <Link to="/about_us">
    <button id = "About_us" class = "btn btn-warning">
        About us
    </button>
    </Link>
    <Link to="/login">
    <button id="login" class="btn btn-warning">
        Login
    </button>
    </Link>
    <Link to = "/signup">
    <button is = "Signup" class = "btn btn-warning">
        Signup
    </button>
    </Link>    
</div>

<textarea id = "home_page_des" name = "home_page_descrip" rows = "4" cols = "10">
   Book a flight to 
    your dream
    destination with
    L'avion
</textarea>
<div class = "input_group">

<div class="from">
    <p>

        <div class="row">
    
        <div class="from_place">
        <p >
            From:
            </p>

        </div>
        <div class="col-2">
        <span class="required">*</span> <select name = "From" id = "source" required>
                <option value="">--select your starting point--</option>
                <option value="BLR">Bangalore</option>
                <option value="DEL">Delhi</option>
                <option value="MAA">Chennai</option>
                <option value="HYD">Hyderabad</option>
                <option value="BOM">Mumbai</option>


            </select> 
            </div>
            </div>
    </p>
</div>


<div class="to">
    <p>

        <div class="row">
    
        <div class="to_place">
        <p >
            To:
            </p>

        </div>
        <div class="col-3">
        <span class="required">*</span> <select name = "To" id = "Destination" required>
                <option value="">--select your starting point--</option>
                <option value="BLR">Bangalore</option>
                <option value="DEL">Delhi</option>
                <option value="MAA">Chennai</option>
                <option value="HYD">Hyderabad</option>
                <option value="BOM">Mumbai</option>
                


            </select> 
            </div>
            </div>
    </p>
</div>
<div class ="Date-of-Departure">
<p>
<div class ="dep_date">

    
    Date of Dep:
    
</div>
    <span class="required">*</span><input type="date" name="DateofExpiry" id="DateofExpiry" required>
</input>
</p>
 </div>
<button id = "details" class="btn btn-warning btn-lg" name="book-home">
    <Link to="/BLR_MAA">
    Book your flight</Link>
</button>

</div>


</>
    );
}


  
            
            
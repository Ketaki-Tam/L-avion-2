import background_plane from './plain_blue.webp'
import indigo from './download_indigo.jpeg'
import './blr-maa.css'
import {Link} from "react-router-dom";

export default function(){
    return (
        <>
    <div class ="home_page">
    <div class="row">
    <div id ="back" class="col-5 ">

    <img src={background_plane}/>
    </div>
    </div>
    </div>

    <div class = "Heading">
        <h1>
            BLR -> MAA
        </h1>

    </div>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <br>
    </br>
    <div class = "row">
        <div class="col-2">
            <h2>
                Flight No
            </h2>
            </div>
            <div class="col-2">
            <h2>
                Dep time
            </h2>
            </div>
            <div class="col-2">
            <h2>
                Arrival time            </h2>
            </div>
            <div class="col-2">
            <h2>
                Price
            </h2>
            </div>
    </div>


    <div class="row">
    <div class="col-2">
        <img id = "indigo" src = {indigo}/>
    <h2 id = "flight_no">
                6e 327
            </h2>
    </div>
    <div  class="col-2">
    <h2>
         4:00
   </h2>
   </div>
   <div class="col-2">
       <h2>
           5:00
       </h2>
    </div>
    <div id="price" class="col-2">
        <h2>
            2499INR
        </h2>
    </div>
    <div id = "button" class="col-2">
        <div class = "btn btn-warning">
        
            <Link to="/payment_gateway">
                Book
            </Link>

        </div>
    </div>
</div>
<br>
</br>
<br>
</br>
<div class="row">
    <div class="col-2">
        <img id = "indigo" src = {indigo}/>
    <h2 id = "flight_no">
                6e 350
            </h2>
    </div>
    <div  class="col-2">
    <h2>
         14:30
   </h2>
   </div>
   <div class="col-2">
       <h2>
           15:15
       </h2>
    </div>
    <div id = "price"class="col-2">
        <h2>
            2499INR
        </h2>
    </div>
    <div id = "button" class="col-2">
        <div  class = "btn btn-warning">
        <Link to="/payment_gateway">
                Book
            </Link>
        </div>
    </div>
</div>


    
</>
    );}
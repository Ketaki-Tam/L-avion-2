
import home from './airplane_bg_3.png'
//import './mainpage.css';
import './payment_gateway.css'
import { Link } from 'react-router-dom';
import './signup.css'


export default function(){
return(
<>
<div class ="homePage2">
<div class="row">
<div class="col-5">
<img src={home}/>
</div>
</div>
</div>


<div class="signup text-center">
<h1>Signup</h1>
</div>





<div class = "credentials2">
    <h1 id = "login">
        Username
    </h1>
    <input type = "text" name = "username" required >
    </input>
    <br>
    </br>
    <br>
    </br>
    

    <h1 id = "password">
        Password
    </h1>
    <input type = "password" name = "password" required>
    </input>

    <br>
    </br>
    <br>
    </br>
    

    <h1 id = "password">
        Confirm Password
    </h1>
    <input type = "password" name = "con_password" required>
    </input>
        
    </div>
    <div class  ="login_button">
        <Link to="/login">
        <button class = "btn btn-danger">
            Login
        </button>
        </Link>
    </div>



</>


);

}
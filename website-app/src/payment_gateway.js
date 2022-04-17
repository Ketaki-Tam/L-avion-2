import airplane from './airplane_logo.png'
import home from './airplane_bg_3.png'
import pay from './visa_img.png'
//import './mainpage.css';
import './payment_gateway.css'
import { Link } from 'react-router-dom';

export default function (){
    return (
        <>
    

<div id="main">
<div class="Heading">

    <h2>
        Payment_Gateway
    </h2>


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
<br>
</br>
<form class = "formm">
    
        <h2>Payment Details </h2>
        <br>
        </br>
        
        <p>
            Card Type <span class="required">*</span> <select name = "Card_Type" id = "Card_Type" required>
                <option value="">--select a card type--</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>

            </select>

        </p>
        <br>
        </br>
        
        <p>
            Card Number <span class="required">*</span> <input type="number" name="card_number" id="card_number" required placeholder="1111-2222-3333-4444"></input>
        </p>
        <br>
        </br>
        
        <p>
            CVV <span class="required">*</span><input type="password" name="Cvv" id="Cvv" required></input>
        </p>
        <br>
        </br>
        
        <p>
            Date of Expiry <span class="required">*</span><input type="date" name="DateofExpiry" id="DateofExpiry" required></input>
        </p>
        <br>
        </br>
        <br>
        </br>

    

        <div class = "Payment_Gateway_Button">
        <button id ="paynow"class = "btn btn-warning">
        <Link to="/Confirmation_page">
            Pay Now
            </Link>
        </button>                
        </div>
</form>


<div>
<img src={pay} id="visa"></img>
</div>


</div>

</>
    );
}


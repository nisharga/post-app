import React from 'react';
import Container from '@material-ui/core/Container';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <Container maxWidth="lr" className="contact">
                <h1>GET IN TOUCH</h1>
                <h2>Message Us</h2>
                <p>If you wish to be considered for employment at Weifield, please do not send a message, here – instead, please complete Weifield’s job application  and our Human Resources department will contact you after their review of your submitted information.</p>

                <div className="contactUs">
                    <div className="address">
                    <h3>ADDRESS</h3>
<p>Weifield Group Contracting  <br></br>
6950 S. Jordan Road <br></br>
Centennial, CO 80112</p> <br></br> 

Industrial Division Office <br></br>
1270 Automation Drive #500 <br></br>
Windsor, CO 80550 <br></br> <br></br>

Wyoming Office <br></br> 
308 Southwest Dr Unit E <br></br>
Cheyenne, WY 82007 <br></br> <br></br>

Texas Office <br></br>
1421 Wells Branch Pkwy. Ste 303 <br></br>
Pflugerville, TX 78660 <br></br>
                    </div>

                    <div className="phone">
                    <h3>PHONE</h3>
Weifield Group Contracting <br></br>
303.428.2011 phone <br></br>
303.202.0466 facsimile <br></br> <br></br>

Weifield 24/7 Service Department <br></br>
303.428.2011 <br></br>
(Then press 2 for emergency calls) <br></br>
                    </div>

                    <div className="email">
                  <h3>EMAIL</h3>
Request for Proposal <br></br>
nisharga-kabir.com  <br></br> <br></br>

All Bid Opportunities <br></br>
kabirnisharga@gmail.com <br></br>
                    </div>
                </div>


            </Container>
        </div>
    );
};

export default Contact;
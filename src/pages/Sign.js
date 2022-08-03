// import {Auth} from'../Auth';
// import Login from '../containers/Login';
import React from 'react';
import'./sign.css';
import { styled } from '@mui/material/styles';
import { Card, Link, Container, Typography } from '@mui/material';
import illustration from '../resources/illustration_login.png';


const SectionStyle = styled(Card)(({ theme }) => ({
    width: '100%',
    maxWidth: 464,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: theme.spacing(2, 0, 2, 2),
  }));

function Sign (){
  return (
<>
<section class="sign">
    <div class='Log'>
        <div class="sign--head">
            {/* </div> */}
            <h1 class="sign--title">Sign in</h1>
            <p class="signup-message">New to Youth Touch? <a href="">Create an Account</a></p>

        </div>
        <form class="sign--form" autocomplete="off" method="post">


            <div class="form-element">
              
            <input id="username_input" class="form-element--input" type="email" name ="username" required placeholder='username'></input>
            <label-username class="form_element--label" for="username_input"> </label-username>
            </div>

            <div class="form-element">
                <input id="password_input" class="form-element--input"  type="password" name="password" required placeholder='Password' />
                <label class="form-element--lable" for="password_input"> </label>
                <span class="form-element--error-message">This field is required</span>
            </div>

            <div>
                <input id="keep_signed_in" type="checkbox" name="keep_signed_in"/>
                <label for="keep_signed_in">Keep me signed in on this device</label>
            </div>
            
            <button type="submit" class="signin-button">Sign In</button>
        </form>
        
        
            <p class="form-footer--description">Need to find <a href="">your username</a> or <a href=""> your password</a>?</p>
        {/* </div> */}
        </div>
    </section>
    
    
    <section className='Login'>
        <SectionStyle>
            <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
              Hi, Welcome Back
            </Typography>
            <img src={illustration} alt=''></img>
          </SectionStyle>
        <div class='login-illustration'>
            

            
        </div>
        </section>

</>
 )
  
};

export default Sign;
import React, {useState, useContext} from 'react';
import {themeContext} from '../Context/theme';
import { AuthContext } from '../Context/auth';

const NavBar = () => {
  
    const {themedata} = useContext(themeContext);
    const {isLightTheme, light, dark} = themedata;
    const {isAuthenticationstatus, userAuthentication} = useContext(AuthContext);
      console.log(isAuthenticationstatus);
     const theme = isLightTheme ? light : dark;
    return ( 
     
      <nav style={{background:theme.ui, color:theme.syntax}}>
       <h2>Olu-johnson Todo List</h2>
      
          <ul>
              <li>...make your goals known and when they are achieved</li>
              
          </ul>

      </nav>

     );
}
 
export default NavBar;
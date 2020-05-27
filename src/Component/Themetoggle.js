import React, {useState, useContext} from 'react';
import { themeContext } from '../Context/theme';
import { AuthContext } from '../Context/auth';

const Themetoggle = () => {
   const {themedata, dispatch} = useContext(themeContext);
   const {userAuthentication} = useContext(AuthContext);

    return (
        <>
        dark theme  <input type="checkbox" onClick={()=>dispatch({type:'ThemeToggle'})} />
        </>
     );
}
 
export default Themetoggle;
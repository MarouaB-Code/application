/**rafce */
import React ,{useRef, useEffect,useState, Fragment}from 'react';

import {Link } from 'react-router-dom'
const Landing = () => {
 
  const [btn,setbtn] = useState (false);
  console.log(btn);
  
  const refandroid =useRef(null);
  
  useEffect ( () => {
    refandroid.current.classList.add("startingImg");
    setTimeout(() => {
      refandroid.current.classList.remove("startingImg");
setbtn(true)
    }, 1000);
  }, [] )

const setleftImg =() => {
  refandroid.current.classList.add("leftImg");
}

const setRightImg =() => {
  refandroid.current.classList.add("rightImg");
}
const clearImg =() => {
   if(refandroid.current.classList.contains("leftImg")){
   refandroid.current.classList.remove("leftImg")
} else if ( refandroid.current.classList.contains("rightImg")){

  refandroid.current.classList.remove("rightImg")
}

}

 const displayBtn = btn && (
<Fragment>
  <div onMouseOver={setleftImg}  onMouseOut={clearImg}  className="leftBox">
      <Link className= "btn-welcome" to ="/signup"> Inscription</Link>
    </div>

    <div onMouseOver={setRightImg}  onMouseOut={clearImg}  className="rightBox">
      <Link className="btn-welcome" to ="/login"> Connexion </Link>
    </div>
    </Fragment>
)
  
  
  
  return(
   
    <main ref={refandroid}  className="welcomePage">
    
    {displayBtn}
    </main>
    
      
    )
  }
  
  export default Landing;
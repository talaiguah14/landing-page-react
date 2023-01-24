import React, { useEffect, useState } from "react";
import Footer from "../organisms/footer/footer";
import Header from "./../organisms/header";

const LandinHome = () => {

  const [redirectLogin, setRedirectLogin] = useState(false);
  const [redirectRegistre, setRedirectRegistre] = useState(false);

  if(redirectLogin){
    window.location.href="/login"
    
  }else if (redirectRegistre){
    window.location.href="/registro"
  }
  return (
    <div id="Header">
      <Header />
      <div className="ButtonPosition " id="Botones">
          <button id="login" className="button btn_style"  onClick={()=>{
            setRedirectLogin(true)
          }}>Login</button>
          <button className="button btn_style"onClick={()=>{
             setRedirectRegistre(true)
          }}>Registro</button>
        </div>
      <Footer></Footer>
    </div>
  );
};
export default LandinHome;

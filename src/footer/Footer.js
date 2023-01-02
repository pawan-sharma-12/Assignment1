import React from 'react';


export const Footer = () => {
    const year = new Date().getFullYear();
  return (
   <>
   <div style={{textAlign : "center",
          background :"rgb(128,128,128)",
        
         width :"100%"
         ,height :"40px"
         ,margin : "auto auto 0px auto"
        }}>
   <footer>
        <p style={{
          width :"100%"
          ,lineHeight :"40px"
          
        }} >copyright © {year}</p>
    </footer>

   </div>
   
   </>
  );
}
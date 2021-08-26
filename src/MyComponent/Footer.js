import React from 'react';
var style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%",
}

var phantom = {
display: 'block',
padding: '20px',
height: '60px',
width: '100%',
}
export const Footer = () => {
    return (
    
    <div>
    <div style={phantom}/>
    
    
    <div style={style}>
    <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} IBM INDIA PRIVATE LIMITED | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
    
     </div>

</div>
      );
    } 
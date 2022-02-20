import React from "react";

const date = new Date();
const Year = date.getFullYear();

function Footer(){
    return <div className="footer">
        <p>Copyright ©{Year}</p>
    </div>
}

export default Footer;
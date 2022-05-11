import "./mailList.scss";

import React from "react";

const MailList = () => {
   return (
      <div className="mail">
         <div className="mail__title">Save time, save money!</div>
         <span className="main__desc">
            Sign up and we'll send the best deals to you!
         </span>
         <div className="mail__input">
            <input type="text" placeholder="Your Email" />
            <button>Subscribe</button>
         </div>
      </div>
   );
};

export default MailList;

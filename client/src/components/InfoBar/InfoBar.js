import React from 'react';

import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';

import './InfoBar.css';

const InfoBar = ({ room }) => (
<div className="infoBar">
    <div className="leftInnerContainer">
<img className="onlineIcon" src={onlineIcon} alt='online img'/>
<h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
        {/* doing a full page refreash since calling a query string and to clean out socket may revisit and isolate the refreash but it works well for this situation*/}
        <a href='/'><img src={closeIcon} alt='close img' /></a>
        </div>

</div>

)

export default InfoBar;
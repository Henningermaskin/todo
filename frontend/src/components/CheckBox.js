import React from "react";
import PropTypes from "prop-types";


const CheckBox = ({type,className, checked = false, onChange}) => (
    <div>
        <input type ={type} className={className} checked={checked} onChange = {onchange}/>
    </div>

);


CheckBox.propTypes = {
    type: PropTypes.string,
    
    checked: PropTypes.bool,
    onChange: PropTypes.func.isRequired,

};

CheckBox.defaultProps ={
    type: "checkbox",
    className: "toggle"

}

export default CheckBox;
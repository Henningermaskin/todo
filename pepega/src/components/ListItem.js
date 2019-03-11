import React from "react";

const ListItem = props => {
    return(
        <li>
            {props.item}
            <button className="action" onClick={
                () => {props.handleRemove(props.itemIndex)}
            }>
            x
            </button>
        </li>
    );
};

export default ListItem;
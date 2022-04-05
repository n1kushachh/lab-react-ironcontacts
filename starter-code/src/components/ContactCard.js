import React from "react";

const ContactCard = (props) => {
    return(
            <tr>
                <td><img className="item-contact-picture" src={props.pictureUrl}></img></td>
                <td>{props.name}</td>
                <td>{props.popularity}</td>
            </tr>
    )
}

export default ContactCard;
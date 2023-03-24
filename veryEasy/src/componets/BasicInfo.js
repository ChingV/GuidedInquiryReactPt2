import React from "react";

const BasicInfo = (props)=> {
    return(
        <ul>
            <li>{props.person.name}</li>
            <li>{props.person.age}</li>
            <li>{props.person.number}</li>
        </ul>
    )
}

export default BasicInfo;
import React from "react"

export default function Card(props) {
    return(
        <div className="container">
            <img src={`../images/${props.imageUrl}`} alt='hero' className= "main-image" />
            <div className="text-wrapper">
                <div className="first-line">
                    <img src="../images/location.png" alt="location icon" className="location-icon" />
                    <div className="country">{props.location}</div>
                    <a href={`${props.googleMapsUrl}`}>View on google maps</a>
                </div>
                <h2>{props.title}</h2>
                <h6>{props.startDate} - {props.endDate}</h6>
                <p>{props.description}   </p>
            </div>
        </div>
    )
}
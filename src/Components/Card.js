import React from 'react'
import './Card.css'

/* функциональный компонент */
function Card() {
    return (
        <div className='Card'>
            <div className='upper-container'>
                <div className='image-container'>
                    <img src='https://thumbs.dreamstime.com/b/young-happy-man-thumbs-up-sign-casuals-isolated-white-background-38152994.jpg' alt='' height="100px" width="100px"></img>
                </div>
            </div>

            <div className='lower-container'>
                <h3>John Bradley</h3>
                <h4>React Developer</h4>
                <p>Best worker in da world</p>
                <p>Investigated technology:</p>
                <ul>
                    <li>HTML</li>
                    <li>Javascript</li>
                    <li>Css</li>
                </ul>
            </div>
        </div>
    )
}

export default Card
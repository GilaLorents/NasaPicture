import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

function mapStateToProps(state) {
    return {
        user: state.users
    }
}
export default connect(mapStateToProps)(function NasaPictures(props) {
    const { user } = props;
    const [picture, setPicture] = useState([]);
    console.log("state" + user)
    function add(picture) {

        debugger;
        setPicture(picture)
        console.log("current user    " + user)

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        // myHeaders.append('Access-Control-Allow-Origin', '*')
        myHeaders.append("authorization", user);
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(picture),
        };


        fetch("http://localhost:3000/picture/newPicture", requestOptions)
            .then(response => response.json())
            .then(res => console.log(res))
            .catch(error => console.log('error', error));



        // לעשות שליחה לשרת // fetch(" https://api.nasa.gov/planetary/apod?api_key=qjHyfpXmMLioWSrTTvMmStyV8gJikAfdl2Gilea8")


    }

    useEffect(() => {
        fetch(" https://api.nasa.gov/planetary/apod?api_key=qjHyfpXmMLioWSrTTvMmStyV8gJikAfdl2Gilea8")
            .then(response => response.json())
            .then(result => {
                debugger;
                add(result)
            })
            .catch(error => console.log('error', error));
    }, [])

    return (

        <>
            <h1>Pictures</h1>
            {/* style="width: 18rem;" */}
            <div className="card" style={{ width: "25rem" }}>
                <h1>NASA Astronomy Picture Of The Day</h1>
                <h2>{picture.title}</h2>
                <p className="card-text">{picture.date}</p>
                <img src={picture.url} className="card-img-top" alt="img" />
                <div className="card-body">
                    <p className="card-text">{picture.explanation}</p>

                </div>
            </div>

        </>
    )
})

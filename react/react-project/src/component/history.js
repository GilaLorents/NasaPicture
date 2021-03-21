import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

function mapStateToProps(state) {
    return {
        user: state.users
    }
}
export default connect(mapStateToProps)(function HistoryPictures(props) {
    const { user } = props;
    const [newPicture, setNewPicture] = useState(0);
    const [historyPicture, setHistoryPicture] = useState();

    console.log("state" + user)
    console.log("current user    " + user)


    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("authorization", user);
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
    };


    useEffect(() => {
        fetch("http://localhost:3000/picture/getAllPicture", requestOptions)
            .then(response => response.json())
            .then(response => {
                setHistoryPicture(response);
            })
            .catch(error => console.log('error', error));

    }, [])




    function myFunc(event) {


        var fileReader = new FileReader()

        fileReader.onload = ((e) => {
            debugger;
            setNewPicture(e.target.result);
            requestOptions.body = JSON.stringify({ "url": e.target.result, "title": 'my own picture', "date": Date.now(), "explanation": "i added this picture" });
            fetch("http://localhost:3000/picture/newPicture", requestOptions)
                .then(response => response.json())
                .then(res => console.log(res))
                .catch(error => console.log('error', error));



        })
        setNewPicture(fileReader.readAsDataURL(event.target.files[0]))

    }
    const myStyle = {

        width: "25%",
        hight: "1000px",
        display: "inline-block"
    }
    const imgStyle =
    {
        width: "300px",
        hight: "500px"


    }


    return (

        <>
            <h1 style={{ color: "red" }}>My History Pictures</h1>
            <h4>Choose your own picture</h4>
            <h5>  <input type="file" accept="url" className="historyPicture" onChange={myFunc} /> </h5>


            {historyPicture !== undefined ?

                <>

                    {


                        historyPicture.picture.picture.map((item, index) => (

                            <div class="card" style={myStyle} key={index}>
                                <h2>{item.title}</h2>
                                <p class="card-text">{item.date}</p>
                                <img src={item.url} class="card-img-top" alt="img" style={imgStyle} />
                                <div class="card-body">
                                    {/* <p class="card-text">{item.explanation}</p> */}

                                </div>
                            </div>

                        ))}

                </>
                :

                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="loader12">
                                <div class="loader-inner-1 box-1 box-red"></div>
                                <div class="loader-inner-2 box-2 box-pink"></div>
                                <div class="loader-inner-1 box-3 box-blue"></div>
                                <div class="loader-inner-2 box-4 box-yellow"></div>
                                <div class="loader-inner-1 box-5 box-peach"></div>
                                <div class="loader-inner-2 box-6 box-pink"></div>
                                <div class="loader-inner-1 box-7 box-green"></div>
                                <div class="loader-inner-2 box-8 box-purple"></div>
                            </div>
                        </div>
                    </div>

                </div>


            }



        </>
    )

})

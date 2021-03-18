import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

function mapStateToProps(state) {
    return {
        user: state.users
    }
}
export default connect(mapStateToProps)(function HistoryPictures(props) {
    const { user } = props;
    var reader = new FileReader();

    const [urlImg, setUrlImg] = useState();
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
                debugger;
                setHistoryPicture(response);
            })
            .catch(error => console.log('error', error));

    }, [])
   



    function onChange(e) {
        let files = e.target.files;
        console.log(files);
        reader.onload = r => {
            console.log("malki" + reader.result)

        };
        debugger;


        //לשמור שתיקיית 

        setUrlImg(reader.readAsDataURL(files[0]))


    }


    return (

        <>    {historyPicture !== undefined ?
            <>
                <h1>history</h1>
                {

                    historyPicture.picture.picture.map((item, index) => (

                        <div class="card" style={{ width: "25%" }, { display: "inline-block" }} key={index}>
                            <h1>NASA Astronomy Picture Of The Day</h1>
                            <h2>{item.title}</h2>
                            <p class="card-text">{item.date}</p>
                            <img src={item.url} class="card-img-top" alt="img" />
                            <div class="card-body">
                                <p class="card-text">{item.explanation}</p>

                            </div>
                        </div>

                    ))}

            </>
            :

            <div>Loading</div>


        }



            <input type="file" id="userfile" onChange={(event) => onChange(event)}></input>


        </>
    )

})

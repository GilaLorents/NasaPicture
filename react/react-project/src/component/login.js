import react, { createRef } from 'react'
import { connect } from 'react-redux'
import { actionsStore } from '../redux/actions/actions'
import { Redirect } from 'react-router-dom'
import {
    withRouter
} from 'react-router-dom'
function mapStateToProps(state) {
    return {
        user: state.users
    }
}
const mapDispatchToProps = (dispatch) => ({

    addNewUser: (token) => dispatch(actionsStore.addNewUser(token)),

})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(function Login(props) {
    const { addNewUser, history } = props
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const reftoName = createRef();
    const reftoPassword = createRef();
    function login() {
        debugger;
        const user = {
            "name": reftoName.current.value,
            "password": reftoPassword.current.value
        }
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(user),
        };

        fetch("http://localhost:3000/user/login", requestOptions)
            .then(response => response.json())
            .then(res => { addNewUser(res.token) })
            .then(() => { history.push("/NasePicture") })
            .catch(error => console.log('error', error));

    }
    return (
        <div className="container">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div id="loader4">
                            <span class="loader loader-1"></span>
                            <span class="loader loader-2"></span>
                            <span class="loader loader-3"></span>
                            <span class="loader loader-4"></span>
                        </div>
                    </div>
                </div>
                <br /><br />
            </div>
            <div className="row">
                <div className="col-3">

                </div>
                <div className="col-6">
                    <form>
                        <h1>Login</h1>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" ref={reftoName} />
                        </div>


                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" ref={reftoPassword} />
                        </div>

                    </form>
                    <button className="btn btn-primary" onClick={login}>Login</button>

                </div>

            </div >

        </div >


    )
}))
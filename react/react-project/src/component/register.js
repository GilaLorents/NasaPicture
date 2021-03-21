import react, { createRef } from 'react'
import { connect } from 'react-redux'
import { actionsStore } from '../redux/actions/actions'
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(function Register(props) {
    const { addNewUser, history } = props
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const reftoName = createRef();
    const reftoLastName = createRef();
    const reftoPassword = createRef();
    function register() {
        debugger;
        const user = {
            "name": reftoName.current.value,
            "lastName": reftoLastName.current.value,
            "password": reftoPassword.current.value
        }
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(user),
        };

        fetch("http://localhost:3000/user/register", requestOptions)
            .then(response => response.json())
            .then(res => { addNewUser(res.token) })
            .then(() => { history.push("/NasePicture") })
            .catch(error => console.log('error', error));
    }

    return (
        <div className="container">
            <div class="container">
                <br /><br />
                <div class="row">
                    <div class="col-md-12">
                        <div class="loader9">
                            <div class="box-1"></div>
                            <div class="box-2"></div>
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
                        <h1>Register</h1>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" ref={reftoName} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="lastName" ref={reftoLastName} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" ref={reftoPassword} />
                        </div>

                    </form>
                    <button className="btn btn-primary" onClick={register}>Register</button>

                </div >

            </div >

        </div >


    )
}))
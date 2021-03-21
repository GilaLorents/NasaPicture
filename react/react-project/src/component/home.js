import React from 'react'
import { connect } from 'react-redux'
import {
    Link

} from 'react-router-dom'

function mapStateToProps(state) {
    return {
        user: state.users
    }
};
export default connect(mapStateToProps)(function Home(props) {
    const { user } = props;
    debugger;
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a class="navbar-brand" href="#">Nasa Site-</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/Login">Login</Link>
                        </div>
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/Register"> Register </Link>
                        </div>
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/History"> History </Link>
                        </div>

                    </div>
                </div>
            </nav>

        </>

    )
})

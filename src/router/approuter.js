import React from "react";
import { connect } from "react-redux";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Login from "../components/login";
import Register from "../components/register";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div className="conatiner">
                <Switch>
                    <Route path="/" component={Login} exact={true} />
                    <Route path="/Register" component={Register} />
                </Switch>
            </div>
        </BrowserRouter>
    )
};


const mapStateToProps =(state) => ({
    auth: state.auth
});

export default connect(mapStateToProps)(AppRouter);

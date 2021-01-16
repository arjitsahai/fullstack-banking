import React from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { validateFields } from "../utils/common";


class Login extends React.Component {
    state ={
        email : '',
        password: '',
        error: ''
    };

    handleLogin = (event) => {
        event.preventdefault();
        const {email, password} = this.state;
        const fields =[{email}, {password}];

        const allfields = validateFields(fields);
        if(!allfields){
            this.setState({
                error: {
                    signin_error:""
                }
            });
        }
    };

    handleInputChange = (event) => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        });
    };

    render() {
        const {error}= this.state;
        return(
            <div className="login-page">
                <h1>Banking</h1>
                <div className="login-form">
                    <Form onSubmit={this.handleLogin}>
                        {error && error.signin_error && (
                            <p className="error centered-message">
                                {error.signin_error}
                            </p>
                        )}
                        <Form.Group controlId="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter Email" onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Enter Password" onChange={this.handleInputChange} />
                        </Form.Group>
                        <div className="action-items">
                            <Button variant="primary" type="submit">Login</Button>
                            <Link to="/register" className="btn btn-secondary">Create Account</Link>
                        </div>
                    </Form>
                </div>
            </div>
        );
    }
}
export default connect()(Login);
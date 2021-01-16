import React from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { validateFields } from "../utils/common";

class Register extends React.Component{
    state = {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirmPassword: "",
        success: "",
        error: "",
        isSubmitted: false
    }

    registerUser = (event) => {
        event.preventDefault();
        const {first_name, last_name, email, password, confirmPassword} = this.state;

        const fields =[
            {first_name},
            {last_name},
            {email},
            {password},
            {confirmPassword}
        ];

        const allFields = validateFields(fields);
        if(!allFields) {
            this.setState({
                error: {
                    signup_error: "Please enter all fields!"
                }
            });
        }else{
            if(password !== confirmPassword){
                this.setState({
                    error: {
                        signup_error: "Passwords do not match!"
                    }
                })
            } else {
                this.setState({isSubmitted: true});
            }
        }
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    render(){
        const {error, success, isSubmitted} = this.state;
        return(
            <div className="login-page">
                <h2>Register User</h2>
                <div className="login-form">
                    <Form onSubmit={this.registerUser}>
                        {error && error.signup_error ? (
                            <p className="error centered-message">
                                {error.signup_error}
                            </p>
                        ) : (
                            isSubmitted && (
                                <p className="success centered-message">{success}</p>
                            )
                        )}
                        <Form.Group controlId="first_name">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" name="first_name" placeholder="Enter First Name" onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="last_name">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" name="last_name" placeholder="Enter Last Name" onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter Email" onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Enter Password" onChange={this.handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="confirm_password">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" name="confirm_password" placeholder="Enter Password Again" onChange={this.handleInputChange} />
                        </Form.Group>
                        <div className="action-items">
                            <Button variant="primary" type="submit">Register</Button>
                            <Link to="/" className="btn btn-secondary">Login</Link>
                        </div>
                    </Form>
                </div>
            </div>
        )
    }
};


export default connect()(Register);
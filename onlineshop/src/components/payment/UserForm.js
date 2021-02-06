import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import Success from './Success'

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        address:'',
        email:'',
    }

// Proceed next Step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

// Handle field change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {
        const { step } = this.state;
        const { firstName, lastName, address, email } = this.state;
        const values = { firstName, lastName, address, email }

        switch(step) {
            case 1:
                return (
                  <FormUserDetails
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                  />
                )
            case 2:
                return <Success/>
        }
    }
}

export default UserForm

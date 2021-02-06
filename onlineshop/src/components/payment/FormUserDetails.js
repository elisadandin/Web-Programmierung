import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'



export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
              <React.Fragment>
                  <AppBar title="Kontaktdaten" />
                  <TextField
                  floatingLabelText="Vorname"
                  onChange={handleChange('firstName')}
                  defaultValue={values.firstName}
                  />
                  <br/>
                  <TextField
                  floatingLabelText="Nachname"
                  onChange={handleChange('lastName')}
                  defaultValue={values.lastName}
                  />
                  <br/>
                  <TextField
                  floatingLabelText="Adresse"
                  onChange={handleChange('address')}
                  defaultValue={values.address}
                  />
                  <br/>
                  <TextField
                  floatingLabelText="E-Mail"
                  onChange={handleChange('email')}
                  defaultValue={values.email}
                  />

              </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default FormUserDetails


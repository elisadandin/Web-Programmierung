import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class Success extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Bestästigung"/>
                    <br/>
                    <h1>Vielen Dank für deinen Einkauf!</h1>
                    <br/>
                    <p>Die Bestellbestästigung wurde an deine E-Mail Adresse verschickt</p>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}


export default Success
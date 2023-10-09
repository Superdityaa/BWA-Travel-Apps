import React, { Component } from "react";
import Header from "parts/header";

export default class Landingpage extends Component() {
    render(){
        return(
            <>
                <Header {...this.props} />
            </>
        );
    }
}
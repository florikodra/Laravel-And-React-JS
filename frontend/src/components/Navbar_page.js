import React, { Component } from "react";
import {
    Navbar
   
  } from "reactstrap";

class Navbar_page extends Component{

    render(){
        return(
        <React.Fragment>
        <Navbar class="{navbar navbar-light bg-light static-top}">
            <div  class="container">
            <div class="navbar-left">
                <img class="navbar-brand" src="img/zengrowth-logo.png" width="200px" />
            </div>
            <div class="navbar-right">
                <a class="navbar-brand" href="#">Services</a>
                <a class="navbar-brand" href="#">About Us</a>
                <a class="navbar-brand" href="#">Blog</a>
                <a class="btn btn-primary" href="#">GET STARTED</a>
                <a class="navbar-brand" href="#"><i class="icon-magnifier m-auto text-primary"></i></a>
            </div>
            <div class="navbar-mobile">
            <a class="navbar-brand" href="#"><i class="icon-menu m-auto"></i></a>
            </div>
            </div>
        </Navbar>
        </React.Fragment>
    );
    }


}

export default Navbar_page;
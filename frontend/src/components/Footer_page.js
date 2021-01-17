import React, { Component } from "react";


class Footer_page extends Component{

    render(){
        return(
        <React.Fragment>
        <footer class="footer bg-light">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 h-100 text-center text-lg-left my-auto">
          <img class="navbar-brand" src="img/zengrowth-logo.png" width="200px" alt="logo" />
        </div>
        <div class="col-lg-6 h-100 text-center text-lg-right my-auto">
          <ul class="list-inline mb-0">
            <li class="list-inline-item mr-3">
              <a href="#">
                <i class="fab fa-facebook fa-2x fa-fw"></i>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <i class="fab fa-linkedin fa-2x fa-fw"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr/>
      <div class="row">
        <div class="col-lg-6 h-100 text-center text-lg-left my-auto">
          <p class="text-muted small mb-4 mb-lg-0">&copy; 2021 Zengrowth. All rights reserved.</p>
        </div>
        <div class="col-lg-6 h-100 text-center text-lg-right my-auto">      
          <ul class="list-inline mb-2">
            <li class="list-inline-item">
              <a href="#">AGB</a>
            </li>
            <li class="list-inline-item">
              <a href="#">Privacy</a>
            </li>
            <li class="list-inline-item">
              <a href="#">Cookies</a>
            </li>
            <li class="list-inline-item">
              <a href="#">Impressum</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
        </React.Fragment>
    );
    }


}

export default Footer_page;
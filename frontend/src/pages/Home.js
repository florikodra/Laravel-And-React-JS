//import { render } from "@testing-library/react";
import Home_form from './../components/Home_form.js';



function Home(){




    return(
  <header class="masthead text-white text-center">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-6 col-sm-12 text-left first-column">
          <h1>Get In Touch</h1>
          <p>Want to see how Zengrowth can help you and your team? We’ll listen to your story and propose a data-driven growth plan with channels that fit across your customer journey.</p>
          <div class="bullets"> 
            <p><svg viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="14" cy="14.673" r="14" fill="#343FFF"></circle>
              <path d="M7.972 14.207l2.767 4.617 9.858-8.302" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>Predictable Lead Generation</p>

            <p><svg viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="14" cy="14.673" r="14" fill="#343FFF"></circle>
              <path d="M7.972 14.207l2.767 4.617 9.858-8.302" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>Rapid Marketing Experimentation</p>

            <p><svg viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="14" cy="14.673" r="14" fill="#343FFF"></circle>
              <path d="M7.972 14.207l2.767 4.617 9.858-8.302" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>Predictable Lead Generation</p>

            <p><svg viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="14" cy="14.673" r="14" fill="#343FFF"></circle>
              <path d="M7.972 14.207l2.767 4.617 9.858-8.302" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>Predictable Lead Generation</p>
          </div>
          <hr />
          <div class="row">
            <p class="trusted-partners">Trusted growth partner for hyper-growth companies:</p>
            <div class="parter-companies-logos">
              <img src="img/team-viewer.png" alt="logo1" />
              <img src="img/demodesk.png" alt="logo2" />
              <img src="img/urban-sports-club.png" alt="logo3" />
              <img src="img/loyalty-prime.png" alt="logo4" />
            </div>
          </div>
        </div>
            <Home_form />
        </div>
    </div>
  </header>
        );
}

export default Home;
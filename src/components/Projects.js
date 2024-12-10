import React from "react";
import campingsite from "../images/campingsite.png";
import vendingmachine from "../images/vendingmachine.png";
import deliveryservice from "../images/deliveryservice.png";
import email from "../images/email.png";

function Projects() {
  return (
    <div className="test-p bordlength has-background-success">
      <h1 className="has-text-centered has-text-weight-bold is-size-1">
        Projects
      </h1>

      <div className="columns">
        {/* Camping Site Reservation System */}
        <div className="column">
          <a href="https://github.com/zjzy1002/CampingSiteReservation-System" target="blank">
            <img src={campingsite} alt="CampingSiteReservation-System"></img>
          </a>
          <h1 className="has-text-centered">CampingSiteReservation-System</h1>
          <div className="has-text-centered">
            <a
              href="https://github.com/zjzy1002/CampingSiteReservation-System"
              target="blank"
            >
              GitHub Repository
            </a>
          </div>
        </div>

        {/* Delivery System */}
        <div className="column">  
          <a href="https://github.com/zjzy1002/DeliverySystem" target="blank">    
            <img src={deliveryservice} alt="DeliverySystem"></img>
          </a>
          <h1 className="has-text-centered">DeliverySystem</h1>
          <div className="has-text-centered">
            <a
              href="https://github.com/zjzy1002/DeliverySystem"
              target="blank"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </div>

      <div className="columns">
        {/* Vending Machine */}
        <div className="column">
          <a href="https://rocky-stream-46867.herokuapp.com/" target="blank">
            <img src={vendingmachine} alt="Vending Machine"></img>
          </a>
          <h1 className="has-text-centered">Vending Machine</h1>
          <div className="has-text-centered">
            <a
              href="https://github.com/zjzy1002/VendingMachine"
              target="blank"
            >
              GitHub Repository
            </a>
          </div>
        </div>

        {/* Email Generation Application */}
        <div className="column">
          <a href="https://github.com/zjzy1002/EmailGenerationApplication" target="blank">
            <img src={email} alt="EmailGenerate"></img>
          </a>
          <h1 className="has-text-centered">EmailGenerationApplication</h1>
          <div className="has-text-centered">
            <a
              href="https://github.com/zjzy1002/EmailGenerationApplication"
              target="blank"
            >
              GitHub Repository
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Projects;

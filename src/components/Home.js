import React from "react";
import me from "../images/me.jpg";
import "../Style.css"


function Home() {
  return (
    <div className="test-p bordlength columns has-background-warning">
      <div className="column is-three-fifths">
        <h1 className="has-text-centered has-text-weight-bold is-size-1">
          About Me
        </h1>
        <p className="has-text-centered">
          I’m Sherry Li. I’m currently a graduate student in computer science at Boston University 
          and will graduate in this Dec. Before I joined BU, I worked as a budget and accounting analyst in 
          the finance industry for 3 years. I found that manually detection and correction of accounting 
          errors consumed a large portion of my time in every monthly closing phrase. As a problem solver 
          by nature, I couldn’t help rethinking the process. I tried to use programming to improve the 
          efficiency of accounting work, and was curious about how technology helped with accounting works.
          
          Therefore, I decided to joined BU to learn comprehensive computer science background knowledge and 
          practice. During my study in Boston University, I equipped myself with solid foundation in: 
          software development with technology skills in Java, mySQL, Restful API .etc. 
          My passion for technology led me secure the sde internship in Amazon last summer and URBN this 
          summer where I gained my hands-on industrial experience in Agile work environment, and collaborated 
          closely with customers and talented team member and earn trust from both of them.
          
          I believe with a combined background with business and tech, I would be a well-rounded problem-solver 
          and effective communicator for the team, and would like to contribute my dedication, creative insights 
          to the community. 
          <br />
          <br />
          
          This site was built with React.
        </p>
      </div>

      <div className="column is-half has-text-centered ">
        <img src={me} alt="Sherry Li"></img>
        <br></br>
        <a href="https://github.com/" target="blank">
          Github
        </a>
        <br />
        <a
          href="https://drive.google.com/file/d/1TpT9fqRT-NEcRKIU6n2-ZvVS1iVzqaRU/view?usp=sharing"
          target="blank"
        >
          Resume
        </a>
        <br />
        <a
          href="https://www.linkedin.com/in/sherry-li-758455b2/"
          target="blank"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Home;

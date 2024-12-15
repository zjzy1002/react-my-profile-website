import React from "react";

function Contact() {
  return (
    <div className="test-p has-background-primary bordlength">
      <div className="has-text-centered has-text-weight-bold is-size-1">
        Contact
      </div>
      <div className="columns">
        <div className="column is-1"></div>

        <div className="column has-text-centered is-size-4">
          Phone: 123.456.7890
          <br />
          Email: lsxcs@bu.edu <br />
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/sherry-li-758455b2/">
              https://www.linkedin.com/in/sherry-li-758455b2/
          </a>
        </div>

        <div className="column is-1"></div>
      </div>
    </div>
  );
}

export default Contact;

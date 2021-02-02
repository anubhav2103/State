import React, { Component } from "react";
import "../footer/footer.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";



export default class footer extends Component {
  render() {
    return (
      <div>
        <center>
          <div>
            This Data Is Provided By:-
            <a href="https://www.covid19india.org/" target="_blank">
              link
            </a>
          </div>
          <div className="footerdiv">
            <footer className="footer_text">
              <label className="copyright">
                <br />
              </label>
              <label className="soc_acc_txt">
                <a href="https://www.linkedin.com/in/anubhav-kumar-43a9241b1/" target="_blank">
                  {" "}
                  <FaLinkedinIn /> ANUBHAV
                </a>{" "}
                |
                <a href="https://github.com/anubhav2103" target="_blank">
                  {" "}
                  <FaGithub /> ANUBHAV
                </a>
              </label>
            </footer>
          </div>
        </center>
      </div>
    );
  }
}
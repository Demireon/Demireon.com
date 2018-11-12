import React from 'react';
import Icon from '../icon';
import Github from '../icon/github.icon';
import Linkedin from '../icon/linkedin.icon';
import Medium from '../icon/medium.icon';
import Email from '../icon/email.icon';
import './_footer.scss';

const Footer = () =>
  (<footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="footer-content">
            <span className="header-logo">
                Let&#39;s connect :)
            </span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="footer-content">
            <a href="https://github.com/Demireon" aria-label="Github" target="_blank" rel="noopener noreferrer" className="footer-icon">
              <Icon icon={Github} width={72} height={72} fill={'#fff'} />
            </a>
            <a href="https://linkedin.com/in/demireon" aria-label="Linkedin" target="_blank" rel="noopener noreferrer" className="footer-icon">
              <Icon icon={Linkedin} width={72} height={72} fill={'#fff'} />
            </a>
            <a href="https://medium.com/@Demireon" aria-label="Medium" target="_blank" rel="noopener noreferrer" className="footer-icon">
              <Icon icon={Medium} width={72} height={72} fill={'#fff'} />
            </a>
            <a href="mailto:alidemir95@gmail.com" aria-label="Email" target="_blank" rel="noopener noreferrer" className="footer-icon">
              <Icon icon={Email} width={72} height={72} fill={'#fff'} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>);

export default Footer;

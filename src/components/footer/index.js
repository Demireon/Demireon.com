import React from 'react';
import Icon from '../icon';
import Github from '../icon/github.icon';
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
            <a href="https://github.com/Demireon" target="_blank" rel="noopener noreferrer" className="footer-icon">
              <Icon icon={Github} width={72} height={72} fill={'#fff'} />
            </a>
          </div>
        </div>
      </div>

    </div>
  </footer>);

export default Footer;

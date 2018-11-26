import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/header';
import Footer from '../components/footer';

import '../../sass/style.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>Ali Demirci</title>
      <meta name="Description" content="Hi there! I am Ali Demirci and this is my personal site." />
    </Helmet>
    <Header />
    {children()}
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;

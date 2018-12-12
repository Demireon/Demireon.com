import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

import './_how-to.scss';

const NewsListing = () =>
  (<section className="work" id="work">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h4 className="work-title">Sample work</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <Card body>
            <CardTitle>Personal Website</CardTitle>
            <CardText>Interfacing with the rest of the world</CardText>
            <Button href="https://github.com/Demireon/Demireon.com">Repo</Button>
          </Card>
        </div>
        <div className="col-6">
          <Card body>
            <CardTitle>Github</CardTitle>
            <CardText>Code pieces</CardText>
            <Button href="https://github.com/Demireon/">Profile</Button>
          </Card>
        </div>
      </div>
    </div>
  </section>);

export default NewsListing;

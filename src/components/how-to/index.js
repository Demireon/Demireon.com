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
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Go somewhere</Button>
          </Card>
        </div>
        <div className="col-6">
          <Card body>
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Go somewhere</Button>
          </Card>
        </div>
      </div>
    </div>
  </section>);

export default NewsListing;

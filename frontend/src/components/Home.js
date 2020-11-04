import React from 'react';
import Sidebar from './sidebar/Sidebar';
import { Row, Col } from 'reactstrap';
import FilteredImage from './filtered-image/FilteredImage';

function Home() {

  return (
      <div>
        <Row style={{width: '100%', marginTop: '10px'}}>
          <Col sm='2'>
            <Sidebar />
          </Col>

          <Col sm='8'>
            <FilteredImage />
          </Col>
        </Row>
      </div>
  )
}

export default Home;

import React from 'react';
import Sidebar from './sidebar/Sidebar';
import { Row, Col } from 'reactstrap';
import FilteredImage from './filtered-image/FilteredImage';

function Home() {

  return (
      <div style={{display: 'grid', gridTemplateColumns: '300px auto'}}>
          <div style={{float: 'left', width: '250px'}}>
            <Sidebar/>
          </div>
          <div style={{float: 'left'}}>
            <FilteredImage />
          </div>
      </div>
  )
}

export default Home;

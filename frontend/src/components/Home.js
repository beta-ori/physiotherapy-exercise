import React from 'react';
import Sidebar from './sidebar/Sidebar';
import FilteredImage from './filtered-image/FilteredImage';

function Home() {

  return (
      <div style={styles.rootDiv}>
          <div style={styles.sidebar}>
            <Sidebar/>
          </div>
          <div style={styles.ilteredImage}>
            <FilteredImage />
          </div>
      </div>
  )
}

const styles = {
  rootDiv: {
    display: 'grid', 
    gridTemplateColumns: '300px auto',
    marginTop: '70px'
  },

  sidebar: {
    float: 'left', 
    width: '250px'
  },

  filteredImage: {
    float: 'left' 
  }
}

export default Home;

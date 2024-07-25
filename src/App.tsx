import React from 'react';
import './App.css';

import { Listing } from './components/Listing';

const data = require('./db/data.json')

function App() {
  return (
    <div className="wrapper">
      <Listing
        items={data}
      />
    </div>
  );
}

export default App;

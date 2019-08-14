import React from 'react';
import {connect} from 'react-redux';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = ({car, store, additionalPrice}) => {
  
  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} />
      </div>
      <div className="box">
        <AdditionalFeatures store={store} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state =>({
  car: state.car,
  store: state.store,
  additionalPrice: state.additionalPrice
})

export default connect(mapStateToProps)(App);

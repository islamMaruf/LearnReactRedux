import React from 'react';
import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import HookCakeContainer from './components/HooksCakeContainer'
import {Provider} from 'react-redux'
import store from './redux/store'
import IceCreamContainer from './components/IceCreamContainer';

function App() {
  return (
    <Provider store={store}> 
      <div className="App">
      <CakeContainer />
      {/* <HookCakeContainer/> */}
      <IceCreamContainer/>
    </div>
    </Provider>
    
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import HookCakeContainer from './components/HooksCakeContainer'
import {Provider} from 'react-redux'
import store from './redux/store'
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';

function App() {
  return (
    <Provider store={store}> 
      <div className="App">
      <CakeContainer />
      <HookCakeContainer/>
      <IceCreamContainer/>
      <NewCakeContainer/>
      <ItemContainer cake/>
      <ItemContainer/>
    </div>
    </Provider>
    
  );
}

export default App;

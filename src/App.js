import React from 'react';
import CakeContainer from './components/CakeContainer';
import HookCakeContainer from './components/HooksCakeContainer'
import {Provider} from 'react-redux'
import store from './redux/store'
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}> 
      <div className="App">
      {/* <CakeContainer />
      <HookCakeContainer/>
      <IceCreamContainer/>
      <NewCakeContainer/>
      <ItemContainer cake/>
      <ItemContainer/> */}
      <UserContainer/>
      
    </div>
    </Provider>
    
  );
}

export default App;

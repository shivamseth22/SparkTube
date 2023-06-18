import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Component.jsx/Header';
import Body from './Component.jsx/Body';
import { Provider } from 'react-redux';
import store from './utils/store';


const App = ()=> {
 

  return (
    <Provider store={store}>
    <div>
      <Header/>
      <Body/>
      
      {/* 
      * Header
      * Body
            sidebar
              MneuItem
            MainContainer
              ButtonList
              VideoCOntainer
                  VideoCard
      *
      *
      */}
      </div>
       
    </Provider>
  )
}

export default App;

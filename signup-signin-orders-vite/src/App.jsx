import React from 'react';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Orders from './Components/Orders';


function App() {
  return (
    <div>
      <h1>Signup, Signin & Orders Flow</h1>
      <Signup />
      <Signin />
      <Orders />
    </div>
  );
}

export default App;

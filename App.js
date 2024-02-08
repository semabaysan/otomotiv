// app.js

import React from 'react';
import { UserData } from './UserDataContext';
import Navigator from './Navigator';

const App = () => {
  return(
    <UserData>
      <Navigator />
    </UserData>
  );
}

export default App;

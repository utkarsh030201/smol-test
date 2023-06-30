import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

import Auth from './auth/Auth';
import Folder from './components/Folder';
import SubFolder from './components/SubFolder';
import './styles/App.css';

const App: React.FC = () => {
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  if (!user) {
    return <Auth />;
  }

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Folder} />
          <Route path="/folder/:folderId" component={SubFolder} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
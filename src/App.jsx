import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="app">
        <SideBar />
        <div className="content">
          <Switch>
            <Route exact path="/">
            {/* <LeftInputCodeMain />
            <RightOutputCodeMain /> */}
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App

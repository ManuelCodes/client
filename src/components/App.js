import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
  return <div>PageOne</div>;
}

const PageTwo = () => {
  return <div>PageTwo</div>;
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/PageTwo" exact component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

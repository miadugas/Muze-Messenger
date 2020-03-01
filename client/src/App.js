import React from 'react';

//to pass props as query parameters ... to simplify this
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

const App = () => (
<Router>
    <Route path="/" exact component={Join} />
    <Route path="/chat" component={Chat} />
</Router>

);

export default App;


// import ReactDOM from 'react-dom';


// import App from './App'


// ReactDOM.render(<App />, document.querySelector('#root'));
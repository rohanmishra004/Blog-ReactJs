import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './components/Create'
import Navbar from './components/Navbar';
import Home from './components/Home';
import BlogDetails from './components/BlogDetails';
import NotFound from './components/NotFound';


function App() {
  return (
    <Router >
      <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/create'>
            < Create/>
            </Route>
            <Route exact path='/blogs/:id'>
            < BlogDetails/>
            </Route>
            {/* If none of the routes match the above , then it will show this component */}
            <Route path="*">
              < NotFound />
            </Route>
        </Switch>
      </div>
    </div>
    </Router>
    
  );
}

export default App;

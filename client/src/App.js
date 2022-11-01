import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class = "header">
        <h1>Blair's Booming Business</h1>
        <Link to="/"> Home </Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/create/new"> Create a recipe </Link> &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/recipes"> View All recipes </Link>
        <hr/>
      </div>
      <Switch>
        <Route path = "/recipes/update/:id">
          <Update/>
        </Route> 
        <Route exact path = "/recipes">
          <All/>
        </Route>
        <Route exact path = "/create/new">
          <Form/>
        </Route> 
        <Route path ="/recipes/:id">
          <ViewOne/>
        </Route> 
      </Switch>
    </div>
  );
}

export default App;

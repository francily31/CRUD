import {BrowserRouter as  Router, Switch, Route, Link} from 'react-router-dom' 
import  {Home}  from './components/pages/Home';
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'


function App() {
 
  return (
    //aqui é o JSX, dentro dele eu faço as alterações para aparecer na parte de front-end/visual do usuário
   <Router>
    {/**parte fisica do jsx */}
    <ul>
      <Link to="/">Home</Link>
      <Link to="/contact">Contato</Link>
      <Link to="/company">Empresa</Link>
      <Link to="/newproject">Novo Projeto</Link>
    </ul>

    {/**alterar as paginas do projeto */}
    <Switch>

      {/**home do projeto */}
      <Route exact path='/'>
        <Home />
      </Route>

      <Route exact path='/contact'>
        <Contact />
      </Route>

      <Route exact path='/newproject'>
        <NewProject />
      </Route>

    </Switch>

    <p>footer</p>

   </Router>
  );
}

export default App;

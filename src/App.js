import {BrowserRouter as  Router, Switch, Route, Link} from 'react-router-dom' 
import  Home  from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer'


function App() {
 
  return (
    //aqui é o JSX, dentro dele eu faço as alterações para aparecer na parte de front-end/visual do usuário
   <Router>
    {/**parte fisica do jsx */}
    <Navbar />

    {/**alterar as paginas do projeto */}
    <Switch>
      <Container customClass="min-height">

      {/**home do projeto */}
      <Route exact path='/'>
        <Home />
      </Route>

      <Route exact path='/contact'>
        <Contact />
      </Route>

      <Route exact path='/company'>
        <Company />
      </Route>

      <Route exact path='/newproject'>
        <NewProject />
      </Route>

      </Container>
    </Switch>

    <Footer />

   </Router>
  );
}

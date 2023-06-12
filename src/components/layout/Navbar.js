import { Link } from 'react-router-dom'

import Container from './Container';

import style from './Navbar.modeule.css';

import logo from '../../img/costs_logo.png';
/**
 *Não precisa de props
 *  Se precisasse de login seria aqui**/

function Navbar() {
    return (
        <nav>
            <Container>
                <Link to="/">
                    <img src="{logo}" alt="Costs">
                </Link>
                <Link to="/">Home</Link>
                <Link to="/contact">Contato</Link>
                <Link to="/company">Empresa</Link>
                <Link to="/newproject">Novo Projeto</Link>
            </Container>
        </nav>
    );
}

export default Navbar;


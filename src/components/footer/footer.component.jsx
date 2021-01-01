import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
    NavbarText
  } from 'reactstrap';
  import {Link} from 'react-router-dom';  
  import './footer.styles.css';

const Footer = () => {
    return (
        <div>
            <Navbar className='footer' color="light" light expand="xs">
                <Nav className="m-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to='/'>Indian Stats</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to='/state/Tamil Nadu'>District Stats</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink tag={Link} to='/global'>Global Stats</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
            <Navbar className='footer' color="light"><NavbarText className='m-auto'>Stay Home, Stay Safe</NavbarText></Navbar>
            <Navbar className='footer' color="light"><NavbarText className='m-auto'>Any comments or suggestions? Let me know <a href="https://akashamba-feedback.netlify.app/coronavirus-tracker">here</a>.</NavbarText></Navbar>
            <Navbar className='footer' color="light"><NavbarText className='m-auto'>&copy; <a href="https://akashamba-portfolio.netlify.app/" target="none" id="portfolio">Akash Ambashankar</a></NavbarText></Navbar>
            <Navbar className='footer' color="light"><NavbarText className='m-auto'><a href="https://github.com/akashamba"><i id="github" className="fab fa-github"></i></a> &emsp; <a href="https://in.linkedin.com/in/akash-ambashankar-48b8111b7"><i id="linkedin" className="fab fa-linkedin"></i></a></NavbarText></Navbar>
        </div>
    )
}

export default Footer;
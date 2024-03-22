
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Nav from './Nav';

const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
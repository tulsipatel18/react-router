import {Link} from "react-router-dom";

const Layout = () => {

    return (
        <>
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        
        <Link to="/contact">Contact</Link>
        {/* <Outlet /> */}
        </>
    )
}

export default Layout;
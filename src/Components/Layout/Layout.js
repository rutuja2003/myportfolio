
import MyNav from "./Navbar";
import Footer from "./Footer";

const Layout = ({children}) => {
    return(
        <>
            <MyNav/>
            {children}
            <Footer/>
        </>
    )
}

export default Layout;

import Navbar from "../componentes/navbar.js";
import Main from "../componentes/main.js";
import Listing from "../componentes/listing.js";
import Footer from "../componentes/footer.js";
import { useEffect } from 'react';
export default function Home() {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
            <div id="preloader">
                <div className="jumper">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <Navbar />
            <Main />
            <Listing />
            <Footer /></>
    )
}

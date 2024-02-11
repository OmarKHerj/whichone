import Navbar from "../componentes/navbar.js";
import Footer from "../componentes/footer.js";
import Read from "../componentes/read.js";
import Related from "../componentes/related.js";
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
export default function Post() {
    const { id } = useParams();
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
            <div className="all">
                    <Navbar />
                    <Read id={id} />
                    <Related />
                    <Footer />
            </div>
        </>
    )
}
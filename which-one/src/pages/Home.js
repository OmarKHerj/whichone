import Navbar from "../componentes/navbar";
import Main from "../componentes/main";
import Listing from "../componentes/listing";
import Footer from "../componentes/footer";
export default function Home() {
    return (
        <>
            <div className="all">
                
                    <Navbar />
                    <Main />
                    <Listing />
                    
                    <Footer />
            </div>
        </>
    )
}

import Navbar from "../componentes/navbar";
import Footer from "../componentes/footer";
import Read from "../componentes/read";
import Related from "../componentes/related";
export default function Post() {
    return (
        <>
            <div className="all">
                    <Navbar />
                    <Read />
                    <Related />
                    <Footer />
            </div>
        </>
    )
}
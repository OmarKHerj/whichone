

export default function Navbar() {
    return (
        <div className="navbar">
                <div className="logo">
                    <div className="name">LOGO</div>
                </div>
                <div className="navitems">
                    <button className="btn compareContainer" onClick={() => window.location.href = "/post"}><div className="compare">Compare</div></button>
                    <div className="dealsContainer"><div className="deals">Deals</div></div>
                    <div className="howtoContainer"><div className="howto">How to</div></div>
                    <div className="aboutusContainer"><div className="aboutus">About Us</div></div>
                    <div className="signupContainer"><div className="signup">Sign-Up</div></div>
                </div>
            </div>
    )
}
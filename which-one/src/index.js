import ReactDOM from "react-dom/client";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals.js";


// Import CSS files
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/fontawesome.css';
import './assets/css/templatemo-stand-blog.css';
import './assets/css/owl.css';

// Import JavaScript files
import './assets/js/custom.js';
import './assets/js/owl.js';
import './assets/js/slick.js';
import './assets/js/isotope.js';
import './assets/js/accordions.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />

);

reportWebVitals();

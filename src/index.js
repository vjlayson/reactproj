// import React and ReactDOM  libraries
import React from "react"; // manage components
import ReactDOM from "react-dom"; // renderer, para ma-display
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./css/index.css"
import Main from "./components/Main";
import Gallery from "./components/Gallery";

// import {createRoot} from "react-dom/client"; //React18

// const container = document.getElementById("root")
// const root = createRoot(container)

// create react component
// ALways capital first
const App = () => {
    return (
        <div>
            <Header/>
            {/* <Main/> */}
            <Gallery/>
            {/* <Footer/> */}
        </div>
    )
}

// take the react component and show on screen
// (,san gusto i-output)
// close yung jsx <jsx/>
ReactDOM.render(<App/>, document.getElementById("root"))

// root.render(<App/>); // React18
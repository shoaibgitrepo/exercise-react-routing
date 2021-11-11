import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useLocation,
    useParams
} from "react-router-dom";
import "./style.css";

function App() {
    return (
        <Router>
            <Nav />

            <Route path="/" component={Home} />
            <Route path="/about/:color" component={About} />
            <Route path="/contact/" component={Contact} />
            <Route path="*" component={NotFound} />
        </Router>
    );
}

function Nav() {
    return (
        <>
            <Link to="/?name=jamis">Home</Link> | <Link to="/about/red">About</Link> |{" "}
            <Link to="/contact">Contact</Link> | <Link to="/arstarst">arstart</Link>
        </>
    );
}

function Home() {
    var params = new URLSearchParams(useLocation().search);
    var name = params.get("name");
    return <p>Hello {name}!</p>;
}

function About() {
    var params = useParams();
    console.log("params", params);
    return <p>About Page color is {params.color}</p>;
}

function Contact() {
    return <p>Contact Page</p>;
}

function NotFound() {
    return <p>Oh no! Page not found!</p>;
}

render(<App />, document.getElementById("root"));


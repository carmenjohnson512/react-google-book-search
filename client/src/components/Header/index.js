import React from "react";
import {Jumbotron} from "react-bootstrap";
import style from "./style.css";

function Header(props) {
    return (
        <Jumbotron className="text-center container" style={style} >
                <h1>Google Books Search</h1>
        </Jumbotron>
    );
}

export default Header;

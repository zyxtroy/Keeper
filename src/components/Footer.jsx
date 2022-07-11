import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p>Copyright TROY ZHU {currentYear}</p>
        </footer>
    );
}

export default Footer;
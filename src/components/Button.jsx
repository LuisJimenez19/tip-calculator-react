import "../components/scss/Button.scss";
import { useState, useEffect } from "react";

function Button({ discount }) {
    // useState para dar estilo
    const [active, setActive] = useState(false);

    // useEffect
    useEffect(() => {
        console.log(active);
    },[active]);

    function handleClik(e) {
        console.log(e.target)
        if (active) {
            setActive(false);
        } else {
            setActive(true)
        }
    }

    return (
        <button
            className={
                active === true
                    ? "button--active button-discount"
                    : "button-discount "
            }
            onClick={(e) => {
                handleClik(e);
            }}
        >
            {discount}%
        </button>
    );
}

export default Button;

import "../components/scss/Button.scss";
import { useState, useEffect,useContext } from "react";
import { TipContext } from "../context/TipContext";



function Button({ discount, active, setChangeStyle, changeStyle, ind, aux, cash, people}) {
    const context = useContext(TipContext)

    function handleClik(ind) {
        
        if (changeStyle[ind] == 1) {
            aux = [0, 0, 0, 0, 0];
            setChangeStyle(aux);

        } else {
            aux = [
                0, 0, 0, 0, 0,
            ]; /* Primero seteo el estado a 0 para quitar estilo a aglun boton si ya lo tiene */
            setChangeStyle(aux);

            aux[ind] = 1; /* Luego en la posición indicada cambio su valor */
            // setChangeStyle(aux);
        }

        if (people) {
            context.setErrorEmpty(false)
            context.tipCalculator(cash, people, discount)
        } else {
            context.setErrorEmpty(true)
        }
        
    }


    return (
        <button
            id={ind}
            className={
                active === 1
                    ? "button--active button-discount"
                    : "button-discount "
            }
            onClick={(e) => {
                handleClik(ind, discount, cash,people);
            }}
        >
            {discount}%
        </button>
    );
}
export default Button;

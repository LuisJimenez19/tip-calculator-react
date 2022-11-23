import { useState, useContext } from "react";
/* components */
import Button from "./Button";
/* Style */
import "../components/scss/Inputs.scss";
/* Context */
import { TipContext } from "../context/TipContext";

function Inputs() {
    /* Estados para los inputs*/
    const [cash, setCash] = useState("");
    const [people, setPeople] = useState("");

    const [custom, setCustom] = useState("");

    

    const cantButton = [
        5, 10, 15, 25, 50,
    ]; /* Con este array se generan los componentes */

    let aux = [
        0, 0, 0, 0, 0,
    ]; /* Auxiliar para saber que componente debe cambiar su estado */
    const [changeStyle, setChangeStyle] = useState(aux);

    /* Context */
    const context = useContext(TipContext);

    function handleCustom(cash, people, porcentaje) {
        if (people) {
            context.setErrorEmpty(false)
            context.tipCalculator(cash, people, porcentaje);
        } else {
            context.setErrorEmpty(true)
        }
    }

    return (
        <div className="inputs">
            <div className="label-input">
                <label className="label-cash label" htmlFor="cash">
                    Bill
                </label>
                <input
                    className="input-cash"
                    id="cash"
                    type="Number"
                    placeholder="0"
                    onChange={(e) => {
                        setCash(e.target.value);
                    }}
                    value={cash}
                />
                <p className="placeholder placeholder-cash"></p>
            </div>

            <p className="label-button label">Select Tip %</p>
            <div className="buttons-container">
                {cantButton.map((value, index) => {
                    return (
                        <Button
                            discount={value}
                            key={index}
                            ind={index}
                            active={changeStyle[index]}
                            changeStyle={changeStyle}
                            setChangeStyle={setChangeStyle}
                            aux={aux}
                            cash={cash}
                            people={people}
                        />
                    );
                })}

                <input
                    className="input-custom"
                    type="Number"
                    id="custom"
                    placeholder="Custom "
                    onChange={(e) => {
                        setCustom(e.target.value);
                        // handleCustom(cash, people, parseInt(custom));
                    }}
                    onKeyDown={() => {
                        handleCustom(cash, people, parseInt(custom));
                        
                    }}
                    value={custom}
                    onFocus={() => {
                        aux = [0, 0, 0, 0, 0];
                        setChangeStyle(aux);
                        
                    }}
                />
            </div>
            <div className="label-input">
                <label
                    className={
                        context.errorEmpty == true
                            ? "label label-people error"
                            : "label label-people"
                    }
                    htmlFor="people"
                >
                    Number Of People
                    <span className="label-error">Can't be zero</span>
                </label>
                <input
                    type="Number"
                    id="people"
                    className="input-people"
                    placeholder="0"
                    onChange={(e) => {
                        setPeople(e.target.value);
                    }}
                    onFocus={() => {
                        context.setErrorEmpty(false)
                    }}
                    value={people}
                />
                <p className="placeholder placeholder-people"></p>
            </div>
        </div>
    );
}

export { Inputs };

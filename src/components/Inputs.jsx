import { useState } from "react";
import Button from "./Button";
import "../components/scss/Inputs.scss";

function Inputs() {
    const [cash, setCash] = useState(0);

    const [people, setPeople] = useState(0);

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
                    onChange={(e) => {
                        console.log(e.target.value);
                    }}
                />
                <p className="placeholder placeholder-cash"></p>
            </div>

            <p className="label-button label">Select Tip %</p>
            <div className="buttons-container">
                <Button discount="5" />
                <Button discount="10" />
                <Button discount="15" />
                <Button discount="25" />
                <Button discount="50" />
                <input
                    className="input-custom"
                    type="Number"
                    id="custom"
                    placeholder="Custom "
                />
            </div>
            <div className="label-input">
                <label className="label label-people" htmlFor="people">
                    Number Of People
                </label>
                <input
                    type="Number"
                    id="people"
                    className="input-people"
                    placeholder="0"
                    onChange={(e) => {
                        console.log(e.target.value);
                    }}
                />
                <p className="placeholder placeholder-people"></p>
            </div>
        </div>
    );
}

export { Inputs };

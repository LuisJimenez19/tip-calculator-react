import { useContext } from "react";
import "../components/scss/Outputs.scss";
import { TipContext } from "../context/TipContext";

function Outputs() {
    const context = useContext(TipContext);

    function handleReset() {
        context.tipCalculator(0,0,0)
    }
    return (
        <div className="outputs">
            <div>
                <div className="output-amount output">
                    <p className="output__label">
                        Tip Amount <br /> <span> / person</span>
                    </p>
                    <p className="output__amount">
                        $<span id="amount">{context.amount}</span>{" "}
                    </p>
                </div>
                <div className="output-total output">
                    <p className="output__label">
                        Total
                        <br /> <span> / person</span>
                    </p>
                    <p className="output__amount">
                        $<span id="total">{context.total}</span>{" "}
                    </p>
                </div>
            </div>
            <button className="reset-btn" onClick={() => {
                handleReset()
            }}>RESET</button>
        </div>
    );
}

export { Outputs };

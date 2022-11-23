import { createContext, useState } from "react";

export const TipContext = createContext();

export function TipContextProvider(props) {
    const [outAmount, setOutAmount] = useState(0);
    const [outTotal, setOutTotal] = useState(0);

    const [errorEmpty, setErrorEmpty] = useState("");

    function tipCalculator(cash, people, porcentaje) {
        if (cash == 0 && people == 0 && porcentaje == 0) {
            setOutAmount(0);
            setOutTotal(0);
            setErrorEmpty(false);
        } else {
            const tipPorcentaje =
                (cash * porcentaje) / 100; /* cuanta propina hay que darle */

            const amount =
                tipPorcentaje /
                people; /* cuanta propina le toca dar a cada uno */
            // el total incluyendo la propina y el monto que le toca a cada uno
            const total = amount + cash / people;

            setOutAmount(amount.toFixed(2));
            setOutTotal(total.toFixed(2));
            return {
                amount,
                total,
            };
        }
    }

    return (
        <TipContext.Provider
            value={{
                tipCalculator,
                amount: outAmount,
                total: outTotal,
                errorEmpty,
                setErrorEmpty,
            }}
        >
            {props.children}
        </TipContext.Provider>
    );
}

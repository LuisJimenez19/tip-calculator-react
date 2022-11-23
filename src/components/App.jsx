import "./scss/App.scss";
import { Inputs } from "./Inputs";
import { Outputs } from "./Outputs";

const App = () => {
    return (
        <div className="main-container">
            <Inputs />
            <Outputs />
        </div>
    );
};

export default App;

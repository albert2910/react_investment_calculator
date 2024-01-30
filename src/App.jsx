import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import {useState} from "react";
import Results from "./components/Result.jsx";

function App() {

    const [userInput, setUserInput] = useState({
        initialInvestment: 1000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    const isValidDuration = userInput.duration >= 1;

    function handleChange(inputIndentifier, newValue) {
        setUserInput((preUserInput) => {
            return {
                ...preUserInput,
                [inputIndentifier]: +newValue
            }
        })
    }

    return (
        <>
            <Header/>
            <UserInput userInput={userInput} onChange={handleChange}/>
            {!isValidDuration && <p className="center">Please enter a duration greater than zero</p>}
            {isValidDuration && <Results input={userInput}/>}
        </>
    )
}

export default App

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

    function handleChange(inputIndentifier, newValue) {
        setUserInput((preUserInput) => {
            return {
                ...preUserInput,
                [inputIndentifier]: newValue
            }
        })
    }

    return (
        <>
            <Header/>
            <UserInput userInput={userInput} onChange={handleChange}/>
            <Results input={userInput}/>
        </>
    )
}

export default App

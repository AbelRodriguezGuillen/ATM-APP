import React, { useState, useEffect, useRef } from 'react';
import ATM from './ATM';
import Transactions from './transactions';
import App from '../App';


function LoginPage() {
    const [input, setInput] = useState("");
    const [pin, setPin] = useState("1234");
    const prevInput = useRef('')

    useEffect(() => {
        prevInput.current = input
    }, [input])

function HandleSubmit(e) {
    e.preventDefault();
    if(input === pin) {
        alert('Correct PIN');
        document.getElementById(`transactionPage`).removeAttribute('style');
        document.getElementById(`ATMPage`).removeAttribute('style');
        document.getElementById(`main`).style.display = "none";
    }else{
        alert('Incorrect PIN')
    }
    }

const HandleLength = (e) => {
    if (e.target.value.length >= 4){
        e.preventDefault()
    } 
}

return (
    <form onSubmit={HandleSubmit} id='pinForm'>
        <div>
            <label>Enter your PIN</label>
            <input type={"number"}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyPress={HandleLength}
            required />
            <button>Submit</button>
        </div>
    </form>
)
}

export default LoginPage
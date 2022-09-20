import React, { useState, useEffect, useRef } from 'react';
import ATM from "./ATM";

class Transactions extends ATM{
// const [input, setInput] = useState("")
// const [tranHistory, setTranHistory] = useState([])

// const prevInput = useRef('')
// useEffect(() => {
//     prevInput.current = input
// }, [input])


// function Withdraw(e){
//     let inputAmount = e.target.value;
//     setInput(inputAmount);
//     e.preventDefault();
//         switch (inputAmount){
//             case  inputAmount - this.ATM.Balance < 1:
//             case `e`:
//             case 0: 
//             case undefined:
//                 alert("Invalid amount or insufficient funds, please try again");
//                 break;
//             default:
//                 this.ATM.Balance(prevBalance => this.ATM.Balance - Number(input));
//                 setTranHistory(prevTranHistory => [
//                     ...prevTranHistory,
//                     `Type: WITHDRAWAL`,
//                     `Amount: -${inputAmount.toString()}`,
//                     `Date: ${new Date().toString()}`,
//                     `Balance: ${this.ATM.Balance}`
//                 ])
//                 console.log(`it worked`)
//         }
// };

// function Deposit(e){
//     const inputAmount = e.target.value;
//     setInput(inputAmount);
//     e.preventDefault();
//     switch (inputAmount){
//         case  inputAmount + this.ATM.Balance < 1:
//         case `e`:
//         case 0: 
//         case undefined:
//             alert("Invalid amount or insufficient funds, please try again");
//             break;
//         default:
//             this.ATM.Balance(prevBalance => this.ATM.Balance += Number(input));
//             setTranHistory(prevTranHistory => [
//                 ...prevTranHistory,
//                 `Type: DEPOSIT`,
//                 `Amount: -${inputAmount.toString()}`,
//                 `Date: ${new Date().toString()}`,
//                 `Balance: ${this.ATM.Balance}`
//             ])
//             console.log(`it worked`)
//     }
// };


// return (
//     <div id='transactionPage' style={{"display": "none"}}>
//         <h1>Welcome, please make a transaction</h1>
//         <form id='tranForm'>
//                 <div>
//                     <label>$</label>
//                     <input type={"number"}
//                     value={input}
//                     onChange={e => setInput(e.target.value)}
//                     placeholder='Enter an amount'/>
//                     <button id='withdraw' onClick={Withdraw}>Withdraw</button>
//                     <button id='withdraw' onClick={Deposit}>Deposit</button>
//                 </div>
//         </form>
//         <h2 id='tranHistory'>
//             <label>Transaction History</label>
//             <span>
//                 <h2 id='history'>
//                     {tranHistory}
//                 </h2>
//             </span>
//         </h2>
//     </div>
//     )
// }


    constructor(props){
        super(props)}
        
}

export default Transactions

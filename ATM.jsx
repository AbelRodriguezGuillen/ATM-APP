import React, { useState, useEffect, useRef } from 'react';

// function Balance(){
//     const [balance, setBalance] = useState(100)

//     function CurrentBalance(){
//         setBalance()
//     }

//     return (
//         <div id='balancePage' style={{"display": "none"}}>
//             <h2>Balance: ${balance}</h2>
//         </div>
//         )
//     }

class ATM extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            balance: 100
        }
        return (
            <div id='ATMPage' style={{"display": "none"}}>
                <h2>Balance: ${this.state.balance}</h2>
            </div>
            )
    }
}

export default ATM


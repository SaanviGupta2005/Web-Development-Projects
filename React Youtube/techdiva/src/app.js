import React from "react";

import Expenses from "./components/Expenses/Expenses";

const App = () => {
    let expenses = [
        {
            id: 'e1',
            title: 'School Fee',
            amount: 250,
            date:new Date(2023,2,9)
        },
        {
            id: 'e2',
            title: 'Books',
            amount: 230,
            date:new Date(2023,1,22)
        },
        {
            id: 'e3',
            title: 'House Rent',
            amount: 700,
            date:new Date(2023,2,3)
        },
        {
            id: 'e4',
            title: 'Food',
            amount: 500,
            date:new Date(2023,0,14)
        }
    ];

    return (
        <div>
            <h2>Let's get started!!!</h2>
            <Expenses item={ expenses} />
        </div>);
        
}

export default App;


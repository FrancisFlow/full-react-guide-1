import "./expenseitems.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import React, { useState } from "react";

const ExpenseItems = (props) => {
    // The props.title passed sets the title to the initial state. Thus props is also used in the initial render of the component. Thus we go directly for it.
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated');

    }
    
    return    (
        <Card className="expense-item">
            
            <ExpenseDate date={props.date}/>
          
            <h2 className="expense-item__description" >Title: {title}</h2>

            <div className="expense-item__price">Amount: ${props.amount}</div>
            <button onClick={clickHandler}>ChangeTitle </button>
        </Card>
      );
}
 
export default ExpenseItems;
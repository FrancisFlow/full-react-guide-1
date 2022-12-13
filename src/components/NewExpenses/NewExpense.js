import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
import { useState } from "react";
const NewExpense = (props) => {
    const getExpenseData= (addedData, ) => {
        const expenseData= {
            ...addedData,
            id: Math.random().toString()

        };

        props.onNewExpenseAdd(expenseData);
        setShowForm(false);
        setShowButton(true);

    };
    const [showForm, setShowForm] = useState(false);
    const [showButton, setShowButton] = useState(true);

    const handleShowForm= () => {
        setShowForm(true);
        setShowButton(false);
    }
    const handleCancelForm= () => {
        setShowForm(false);
        setShowButton(true);
    };

    



    return ( 
        <div className="new-expense">
            { showButton && <button onClick={ handleShowForm}>Add new Expense</button>}

            {showForm && <ExpenseForm  hideThisForm={handleCancelForm} onSaveExpenseData={getExpenseData} />}
            
            
        </div>
     );
}
 
export default NewExpense;
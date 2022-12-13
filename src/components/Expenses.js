import './expenses.css';
import Card from './Card';
import { useState } from 'react';
import ExpensesFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpenseChart';
const Expenses = (props) => {
    const [theDate, setTheDate]=useState('2020')
    const handleSelection = (theDate) => { 
      setTheDate(theDate);
    };
    const filteredExpenses=props.expenses.filter(expense=>{
      return expense.date.getFullYear().toString() === theDate;
    });
    
    

    return (

      
        <Card className="expenses">
          <ExpensesFilter value={theDate} onSelected={handleSelection} />
        
          <ExpenseChart expenses={filteredExpenses} />
          <ExpensesList item={filteredExpenses} />
      
        </Card>

      );
}
 
export default Expenses;
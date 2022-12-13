import './Expenseslist.css';
import ExpenseItems from './Expenseitems';

const ExpensesList = (props) => {

    if(props.item.length===0) {
        return <h2 className='expenses-list__fallback' >No Expense items found!</h2>
    }

    return ( 

        <ul className="expenses-list" >
           {props.item.map((expense) => (
        <ExpenseItems 
            key={expense.id}
            title={expense.title} 
            amount={expense.amount}
            date={expense.date}
            />
            ))};

        </ul>
     );
}
 
export default ExpensesList;
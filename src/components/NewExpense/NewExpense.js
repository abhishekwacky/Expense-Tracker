import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

function NewExpense(props){

    const saveExpenseHandler = (enteredExpenseData)=>{

        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString(),
        }

        props.onAddData(expenseData);
    }

    return <div className='new-expense'>
        <button>Add New Expenses</button>
        <ExpenseForm onSaveExpenseData={saveExpenseHandler}/>
    </div>
}

export default NewExpense;
import './NewExpense.css';
import {useState} from 'react';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) =>{
    const [openForm, setOpenForm] = useState(false)
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.saveExpense(expenseData);
        setOpenForm(!openForm);
    };
    function openFormHandler(){
        setOpenForm(!openForm);
    }

    if (openForm === false){
        return(<div className='new-expense'><button onClick={openFormHandler}>Add New Expense</button></div>)
    }


    return(<div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancelForm={openFormHandler} />
    </div>)

};

export default NewExpense;


import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';
import ExpenseFilter from './components/Expenses/ExpenseFilter';
import { useState } from "react";
const fakeExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 4),

  },
  {
    id: 'e2',
    title : 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e3',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021,2,12)
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
]



function App() {
  const [expenses, setExpenses] = useState(fakeExpenses);

  // const saveExpenseDataHandler = (data) =>{
  //   expenses.push(data);
  //   console.log(expenses);
  
  // };

  const addExpenseHandler = (expense) =>{
    setExpenses((prevExpense) => {
      console.log(expenses);
      return [expense, ...prevExpense];
    });
  };


  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense saveExpense ={addExpenseHandler} />
      <Expenses expenseList={expenses} />
    </div>
  );
}

export default App;

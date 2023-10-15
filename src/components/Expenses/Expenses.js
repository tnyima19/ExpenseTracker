import {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';
function Expenses(props){
    //const expenseList = props.expenseList

   
    const [filteredYear, setFilteredYear] = useState('2020');
    let filteredList = props.expenseList.filter((item)=> item.date.getFullYear().toString() === filteredYear);
    // let filterInfoText = '2019, 2021 & 2022';
    // if (filteredYear === '2019'){
    //   filterInfoText = '2020, 2021 & 2022';
    // }else if(filteredYear === '2020'){
    //   filterInfoText = '2019, 2021 & 2022';
    // }else if(filteredYear === '2021'){
    //   filterInfoText = '2019, 2020 & 2022';
    // }else{
    //   filterInfoText = '2019, 2020 & 2021';
    // }



    function filterDateHandler(selectedYear) {
      console.log('expenses.js');
      setFilteredYear(selectedYear);

      console.log(filteredList);
      
      //console.log(filteredDate);

    }



    return(
    <div>
   
    <Card className="expenses">
      <ExpenseFilter 
        selected={filteredYear} 
        onChangeFilter={filterDateHandler}
        />
      <ExpensesChart expenses={filteredList}/>
      <ExpensesList filteredItems={filteredList}/>
    </Card>
    </div>
    )
}

export default Expenses;
import './ExpenseFilter.css';
import {useState} from 'react';


function ExpenseFilter(props){
    const [date, setDate] = useState('');

    const filterChangeHandler = (event) =>{
        console.log(event.target.value);
        setDate(event.target.value); 
        // I want to send the date value to Expense component, 
       props.onChangeFilter(event.target.value);

    }
    return(
        <div className="expenses-filter">
            <div className="expenses-filter__control">
            <label>Filter by year</label>
            <select value={props.selected} id="year" name="year" onChange={filterChangeHandler}>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
            </select>
            </div>
            
        </div>
    )
}

export default ExpenseFilter;

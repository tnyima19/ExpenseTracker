import {useState} from 'react';
import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem({ date, title, amount }) {
    
    const [newTitle, setTitle] = useState(title);  // hooks start with use

    const clickHandler = () => {
        setTitle('Updated!');
        console.log(newTitle);
    };

    return (
        <li>
        <Card className="expense-item">
            <ExpenseDate date={date} />
            <div className="expense-item__description">
                <h2>{newTitle}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
            <button onClick={clickHandler}>Click</button>
        </Card>
        </li>

    )
    // shift + alt + f  -> format document. 
}

export default ExpenseItem; 
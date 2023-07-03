import Card from '../UI/Card';
import ExpenseDate from '../Expenses/ExpenseDate';
import './ExpenseItem.css'
import { useState } from 'react';

/** Create your first component */
function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);
    console.log('ExpenseItem evaluated by React');

    const btnClickEvent = () => {
        setTitle('Title changed');
        console.log(title);
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount} </div>
            </div>
            <button onClick={btnClickEvent}>BUTTON</button>
        </Card>
    );
}

export default ExpenseItem;
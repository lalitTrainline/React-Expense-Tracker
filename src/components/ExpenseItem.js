import './ExpenseItem.css'

/** Create your first component */
function ExpenseItem(props) {
    const day = props.date1.toLocaleString('en-US', {day: '2-digit'});
    const month = props.date1.toLocaleString('en-US', {month: 'long'});
    const year = props.date1.getFullYear();

    return (
        <div className='expense-item'>
            <div>
                <div>{day}</div>
                <div>{month}</div>
                <div>{year}</div>
            </div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount} </div>
            </div>
        </div>
    );
}

export default ExpenseItem;
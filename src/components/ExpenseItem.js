import './ExpenseItem.css'

/** Create your first component */
function ExpenseItem() {
    const expenseDate = new Date(2023, 6, 23);
    const expenseDescription = 'Health Insurance';
    const expensePrice = 120.80;

    return (
        <div className='expense-item'>
            <div>{expenseDate.toDateString}</div>
            <div className='expense-item__description'>
                <h2>{expenseDescription}</h2>
                <div className='expense-item__price'>${expensePrice} </div>
            </div>
        </div>
    );
}

export default ExpenseItem;
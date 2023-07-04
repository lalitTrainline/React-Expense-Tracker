import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date('Jul 12 2011'),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date('Jul 12 2011') },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date('Jul 12 2012'),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date('Jul 12 2013'),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log('App.js');
    console.log(expense);
  }



  return (
    <div>
      <h2>Let's get started!!</h2>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses expensesDetails={expenses}/>
    </div>
  );
}

export default App;

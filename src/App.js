import Expenses from "./components/Expenses";

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
  return (
    <div>
      <h2>Let's get started!!</h2>
      <Expenses expensesDetails={expenses}/>
    </div>
  );
}

export default App;

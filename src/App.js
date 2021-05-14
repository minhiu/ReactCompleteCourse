import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses = [
    {
      id: 1,
      date: new Date(),
      title: "Harman Speaker",
      price: "350.12"
    },
    {
      id: 2,
      date: new Date(),
      title: "Xiaomi Projector",
      price: "124.25"
    },
    {
      id: 3,
      date: new Date(),
      title: 'Bedroom Decorators',
      price: "167.54"
    }
  ];

  return (
    <Expenses expenses={expenses} />
  );
}

export default App;

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {

  return (
    <Card className="expenses">
      {props.expenses.map(item => <ExpenseItem key={item.id} item={item} />)}
    </Card>
  );
}

export default Expenses;
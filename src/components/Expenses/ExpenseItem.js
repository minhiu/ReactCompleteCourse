import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import { useState } from 'react';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.item.title);

  const clickHandler = (prop) => {
    setTitle('Updated');
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.item.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.item.price}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
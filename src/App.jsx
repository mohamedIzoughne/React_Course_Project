import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import ExpenseItem from './components/ExpenseItem'
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/newExpense/NewExpense';

const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];



function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES)

  const addExpenseHandler = expense => {
    // setExpenses([expense, ...expenses]) // it would not really be correct instead because you depend on the previous state
    // question: Why?
    setExpenses(previousState => {
      return [expense, ...previousState]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items = {expenses} />
    </div>
  )
}

export default App

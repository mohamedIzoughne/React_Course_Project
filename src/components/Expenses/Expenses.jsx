/* eslint-disable react/prop-types */
import '../UI/Expenses.css'
// import ExpenseItem from './ExpenseItem'
import Card from './Card'
import ExpensesFilter from './ExpensesFilter'
import { useState } from 'react'
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('')

  const filterChangeHandler = (selected) => {
    setFilteredYear(selected)
  }

  const filteredExpenses = props.items.filter((filtered) => {
    return filtered.date.getFullYear().toString() === filteredYear
  })

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  )
}

export default Expenses

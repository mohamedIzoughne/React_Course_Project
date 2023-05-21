import '../UI/ExpenseForm.css'
import { useState } from 'react'

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  })

  const titleChangeHandler = (event) => {
    // replacing(not merging): so we need to also ensure that the other two pieces of data don't get lost
    // setUserInput({
    //     // ...userInput,
    //     // enteredTitle: event.target.value,
    // })
    setUserInput((previousState) => {
      // will automatically recieve the previous state snapshot which is:
      // const [userInput, setUserInput] = useState({
      //     enteredTitle: '',
      //     enteredAmount: '',
      //     enteredDate: '',
      // })
      return { ...previousState, enteredTitle: event.target.value }
    })
  }

  const amountHandler = (event) => {
    setUserInput((previousState) => {
      return { ...previousState, enteredAmount: event.target.value }
    })
  }
  const dateHandler = (event) => {
    setUserInput((previousState) => {
      return { ...previousState, enteredDate: event.target.value }
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    }

    props.onSaveExpenseData(expenseData)
    setUserInput(() => {
      return { enteredTitle: '', enteredAmount: '', enteredDate: '' }
    })
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor=''>Title</label>
          <input
            type='text'
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor=''>Amount</label>
          <input
            type='number'
            min='0.01'
            value={userInput.enteredAmount}
            step='0.01'
            onChange={amountHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor=''>Date</label>
          <input
            type='date'
            min='2022-01-01'
            max='2023-05-09'
            value={userInput.enteredDate}
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm

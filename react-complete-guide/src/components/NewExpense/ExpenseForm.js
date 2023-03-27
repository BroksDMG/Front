import React from 'react'

function ExpenseForm() {
    const changeTitleHandler=(e)=>{
        console.log(e);
    }
  return (
    <form className='bg-violet-300 rounded-2xl w-card p-3 my-5'>
        <div className='flex flex-wrap mr-20 '>
            <div className='flex flex-col mr-4'>
                <label htmlFor="" className='font-bold'>Title</label>
                <input type="text" onChange={changeTitleHandler} className='w-52 rounded-md' />
            </div>
            <div className='flex flex-col mr-4'>
                <label htmlFor="" className='font-bold'>Amount</label>
                <input type="number" min='0.01' step='0.01' className='w-52 rounded-md' />
            </div>
            <div className='flex flex-col mr-4'>
                <label htmlFor="" className='font-bold'>Date</label>
                <input type="date" min='2019-01-01' max='2022-12-31' className='w-52 rounded-md px-1' />
            </div>
        </div>
        <div>
            <button type='submit' className='flex items-center justify-center ml-auto  text-white h-9 w-28  bg-purple-900 rounded-lg'>Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm
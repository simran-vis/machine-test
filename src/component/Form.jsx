import React from 'react'

const Form = () => {
  return (
    <div className='max-w-md mx-auto mb-6 p-6'>
        <h2 className='text-2xl font-bold mb-4 text-center'>Form</h2>
        <form  className='space-y-4'>
            <div>
                <lable className="block font-medium">Name</lable>
                <input type="text" 
                name="name"
                className='w-full border p-2 rounded mt-1'
                />

                 <lable className="block font-medium">Email</lable>
                <input type="email" 
                name="email"
                className='w-full border p-2 rounded mt-1'
                />

                 <lable className="block font-medium">Mobile</lable>
                <input type="text" 
                name="mobile"
                className='w-full border p-2 rounded mt-1'
                />

            </div>
            <button type='submit'
            className='bg-gray-400 text-white px-4 py-2 rounded w-full hover:bg-gray-500'>
Submit
            </button>

             <button type='submit'
            className='bg-gray-400 text-white px-4 py-2 rounded w-full hover:bg-gray-500'>
Reset
            </button>
        </form>
    </div>
  )
}

export default Form
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Form from './Form';

function Dashboard() {
    const navigate = useNavigate();

const [data, setData] = useState([]);
const [search ,setSearch] = useState('');

const [pagination , setPagination] = useState(1);
const [loading ,setLoading ] = useState(false);

const itemPerPage =10;
//api 
useEffect(() => {
    setLoading(true) 
fetch('https://dummyjson.com/users')
    .then((res) => {
        if(!res.ok){
            throw new Error("api failed");
        }
        return res.json();
    } )
    .then((result) => {
        setData(result?.users || [] ) ;
    })
    .catch((err) => {
        console.error("api ailed :", err)
        setData([]);
    })
 .finally(() => {
    setLoading(false);
 });
},[]);


// search filed
const filteredData = data.filter((item) => 
item.firstName.toLowerCase().includes(search.toLowerCase()));
 

//pagination
const indexOfLast = pagination * itemPerPage ;
const indexOfFirst = indexOfLast - itemPerPage;

const currentItems= filteredData.slice(indexOfFirst, indexOfLast);

const totalPages =  Math.ceil(filteredData.length / itemPerPage);

  return (
   <>
    <div className='p-6 bg-gray-100 min-h-screen'>
        <h1 className='text-3xl  font-bold text-center m-4 text-gray-800'>Dashboard</h1>
        {/* searvh */}
        <div className='max-w-md mx-auto mb-6'>
            <input type="text" 
        name="text" 
        placeholder='search your value'
        value={search}
        onChange={(e) => {
            setSearch(e.target.value);
            setPagination(1);
        }}
        className='border p-2 m-2 rounded-xl w-full shadow-sm ' />
        </div>

       
        <div className='bg-white shadow rounded-xl overflow-hidden'>
            {loading ? (
                <p className='text-center py-6  text-lg font-medium'>
                    loading data....
                </p>  ) : (
<>
<table className='w-full text-sm text-left'>
    <thead className='bg-blue-500  text-sm text-white'>
        <tr>
            <th className='px-3 py- 4'> FirstName</th>
             <th className='px-3 py- 4'> LastName</th>
            <th className='px-3 py- 4'> age</th>
            <th className='px-3 py- 4'>City</th>
            <th className='px-3 py- 4'> Email</th>
            <th className='px-3 py- 4'> Gender</th>

        </tr>
        </thead>
        <tbody>
            {currentItems.length > 0 ? (
                currentItems.map((item) => (
                <tr key={item.id} 
                className='border-b text-blacke bg-gray-100'>
<td className='px-4 text-black py-4'>{item.firstName}</td>
<td className='px-4 py-4 text-black'>{item.lastName}</td>
<td className='px-4 py-4 text-black'>{item.age}</td>
<td className='px-4 py-4 text-black'>{item.city}</td>
<td className='px-4 py-4 text-black'>{item.email}</td>
<td className='px-4 py-4 text-black'>{item.gender}</td>

                </tr>) ) 
                ) : (
                    <tr>
                        <td colSpan="8" 
                        className='text-center py-4 text-gray-500'>
no data found
                        </td>
                    </tr>
    
                )}
        </tbody>
</table>
<div className='flex justify-center items-center gap-2 p-4 flex-wrap'>
     <button onClick={() => setPagination((prev) => prev -1 )}
    disabled={pagination === 1}>prev</button>

    {[...Array(totalPages)].map((_,index)=>(
        <button
         key={index}
        onClick={() => setPagination(index + 1)}
        className ={`px-3 py-1 border rounded ${  pagination === index + 1 ? "bg-blue-500 text-white" : ""  }`}>
        {index +1}

        </button>    ))}
        <button onClick={() => setPagination((prev) => prev + 1)}
        disabled={pagination === totalPages}
        className='  bg-gry-200'>
            next
        </button>
</div>

</>
                )}
        </div>
        
           
    </div>
    
    <Form></Form>
    </>
  )
}

export default Dashboard
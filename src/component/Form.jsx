import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', mobile: ''
  });
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }
    if (!formData.mobile) {
      newErrors.mobile = "Mobile is required";
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile must be 10 digits";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmittedData([...submittedData, formData]);
      setFormData({
        name: '',
        email: '',
        mobile: ''
      });
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      mobile: ''
    });
    setErrors({});
  };

  return (
    <div className='max-w-md mx-auto mb-6 p-6'>
      <h2 className='text-2xl font-bold mb-4 text-center'>Form</h2>

      <form onSubmit={handleSubmit} className='space-y-4'>

        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className='w-full border p-2 rounded mt-1'
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className='w-full border p-2 rounded mt-1'
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        
        <div>
          <label className="block font-medium">Mobile</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className='w-full border p-2 rounded mt-1'
          />
          {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
        </div>
        <button
          type='submit'
          className='bg-gray-500 text-white px-4 py-2 rounded w-full hover:bg-gray-600'>
          Submit
        </button>

        <button
          type='button'
          onClick={handleReset}
          className='bg-red-500 text-white px-4 py-2 rounded w-full hover:bg-red-500'>
          Reset
        </button>

      </form>

      <div className='mt-6'>
        <h3 className='text-xl font-semibold mb-2'>Submitted Data</h3>

        {submittedData.length === 0 ? (
          <p>No data</p>
        ) : (
          submittedData.map((item, index) => (
            <div key={index} className=" p-3  mb-2">
              <p><strong>Name:</strong> {item.name}</p>
              <p><strong>Email:</strong> {item.email}</p>
              <p><strong>Mobile:</strong> {item.mobile}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Form;
import { useState } from 'react';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string()
  .required('نام الزامی است')
  .matches(/^[a-zA-Z\s]*$/, 'نام و نام خانوادگی باید رشته باشد ') ,
    
  email: Yup.string()
  .email('آدرس ایمیل نامعتبر است')
  .matches(
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    'آدرس ایمیل نامعتبر است'
  )
 .matches(/^[^0-9]*$/, {
  message: 'آدرس ایمیل نباید با عدد شروع شود',
})
  .required('آدرس ایمیل الزامی است'),
   
  password: Yup.string()
  .trim()
    .min(8, 'رمز عبور باید حداقل ۸ کاراکتر باشد')
    .required('رمز عبور الزامی است')
  
  

});

function MyForm() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
    

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    validationSchema.validate(values, { abortEarly: false })
      .then(() => {
        // اعتبارسنجی موفق بوده است، می‌توان فرم را ارسال کرد
        alert('اعتبارسنجی موفق بوده است.');
      })
      .catch((err) => {
        // اعتبارسنجی ناموفق بوده است، ارورها را نمایش دهید
        alert('اعتبارسنجی ناموفق بوده است.');
        const newErrors = {};
        err.inner.forEach((error) => {
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
      });
  };

  return (
    <div className='container py-20 flex justify-center' dir="rtl">
    <div className="w-full max-w-xs" >
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
      <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
   نام و نام خانوادگی
      </label>
    
      <input className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="name" onChange={handleChange} onBlur={handleChange} />
      {errors.name && <div className='text-red-600 text-[15px]' >{errors.name}</div>}
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        ایمیل
      </label>
    
      <input className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="email" onChange={handleChange} onBlur={handleChange} />
      {errors.email  && <div  className='text-red-600 text-[15px]' >{errors.email}</div>}
    </div>
     
     
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        گذرواژه
      </label>
    
      <input className="shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" name="password" onChange={handleChange} onBlur={handleChange} />
      {errors.password  && <div  className='text-red-600 text-[15px]' >{errors.password}</div>}
    </div>
     

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"  type="submit">ثبت نام </button>
    </form>
    </div>
    </div>
  );
}

export default MyForm;
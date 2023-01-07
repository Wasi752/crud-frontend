
import React from 'react';
import { Formik } from 'formik';

const inputClass = "h-[10%] w-[50%] p-4 border border-blue-300 rounded-md m-1";
const lableClass = "ml-0 pr-2 mt-5 text-xl font-bold";
const divClassRight = "flex flex-col w-full h-full ml-40";
const divClassLeft = "flex flex-col w-full h-full ml-72";

const validate = values => {
    const errors = {};
    if (!values.brandName) {
        errors.brandName = 'Required';
    } else if (values.brandName.length < 4) {
        errors.brandName = 'Name must be at least 4 characters';
    }
    if (!values.email) {
        errors.email = 'Required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }
    if (!values.mobile) {
        errors.mobile = 'Required';
    }
    else if (values.mobile.length < 11) {
        errors.mobile = 'Mobile number is not valid';
    }
    else if (!/^[0-9]*$/i.test(values.mobile)) {
        errors.mobile = 'Mobile Number must be in valid formate';
    }
    if (!values.password) {
        errors.password = 'Required';
    }
    else if (!/(?=.*?[A-Z])/i.test(values.password)) {
        errors.password = 'At least one Uppercase';
    }
    else if (!/(?=.*?[a-z])/i.test(values.password)) {
        errors.password = 'At least one Lowercase';
    }
    else if (!/(?=.*?[0-9])/i.test(values.password)) {
        errors.password = 'At least one digit';
    }
    else if (!/(?=.*?[#?!@$%^&*-])/i.test(values.password)) {
        errors.password = 'At least one Special Characters';
    }
    else if (!/.{8,}/i.test(values.password)) {
        errors.password = 'At least minumum 8 characters';
    }
    if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Password dase not match';
    }
    console.log(JSON.stringify(errors));
    return errors;
}
const onSubmit = (values, { setSubmitting }) => {

        fetch('http://localhost:3001/users', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
            .then((response) => {
                alert(JSON.stringify(values, null, 2))
                setSubmitting(false);
            });
    

}
const Form = ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) =>

(
    <div className="w-full h-full flex mt-20 mb-56">
        <div className="w-[20%] h-full"></div>

        <div className="w-[60%] h-full bg-gray-100 ">
            <p className="mt-5 mb-5 text-3xl text-red-700 font-bold font-serif text-center">Add New Mobile in Stock</p>
            <div className="flex w-full h-full justify-center divide-x-2 divide-slate-500">
                <div className="mt-1 flex flex-col w-full h-full">
                    <form onSubmit={handleSubmit}>
                        <div className={divClassLeft}>
                            <input
                                type='text'
                                name='brandName'
                                placeholder='Enter Brand Name'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.brandName}
                                className={inputClass}
                            />
                            <span className='text-red-500'>
                                {touched.brandName && errors.brandName}
                            </span>

                        </div>
                        <div className={divClassLeft}>
                            <label className={lableClass}>02. E-mail :</label>
                            <input
                                type="text"
                                name='email'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                className={inputClass}
                            />
                            <span className='text-red-500'>
                                {errors.email && touched.email && errors.email}
                            </span>
                        </div>
                        <div className={divClassLeft}>
                            <label className={lableClass}>03. Mobile Number :</label>
                            <input
                                type="text"
                                name='mobile'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.mobile}
                                className={inputClass}
                            />
                            <span className='text-red-500'>
                                {errors.mobile && touched.mobile && errors.mobile}
                            </span>
                        </div>
                        <div className={divClassLeft}>
                            <label className={lableClass}>04. Password :</label>
                            <input
                                type="password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                className={inputClass}
                            />
                            <span className='text-red-500'>
                                {errors.password && touched.password && errors.password}
                            </span>
                        </div>
                        <div className={divClassLeft}>
                            <label className={lableClass}>05. Confirm Password :</label>
                            <input
                                type="password"
                                name='confirmPassword'
                                value={values.confirmPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={inputClass} />
                            <span className='text-red-500'>
                                {errors.confirmPassword && touched.confirmPassword && errors.confirmPassword}
                            </span>
                        </div>
                        <div className={divClassLeft}>
                            <label className={lableClass}>06. Image :</label>
                            <input
                                type="file"
                                name='image'
                                onChange={handleChange}
                                className={inputClass} />
                        </div>
                        <div className={divClassRight}>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="text-center text-2xl text-white font-bold h-[10%] w-[50%] p-4 border border-blue-300 rounded-md ml-32 mb-5 mr-3 mt-12 bg-blue-600 hover:text-blue-300">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className="w-[20%] h-full"></div>
    </div>

)
const iValue = { brandName: '', modelName: '', price: '', config: '', image: '' }
const MobileCreate = () => (
    <div>
        <Formik
            initialValues={iValue}
            validate={validate}
            component={Form}
            onSubmit={onSubmit}
        >
        </Formik>
    </div>
);

export default MobileCreate;
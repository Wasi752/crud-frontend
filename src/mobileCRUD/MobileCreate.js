
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";


const inputClass = "h-[10%] w-[50%] p-4 border border-blue-300 rounded-md m-1";
const divClassRight = "flex flex-col w-full h-full ml-40";
const divClassLeft = "flex flex-col w-full h-full ml-72";

const MobileSchema = Yup.object().shape({
    brandName: Yup.string()
        .min(4, 'Brand Name must be at least 4 characters')
        .max(50, 'Too Long!')
        .required('Required'),
    modelName: Yup.string()
        .min(4, 'Model Name must be at least 4 characters')
        .max(50, 'Too Long!')
        .required('Required'),
    price: Yup.number()
        .min(1000, 'Price must be at least 1000')
        .max(1000000, 'Too Long!')
        .required('Required'),
    inStock: Yup.number()
        .min(1, 'Stock must be at least 1')
        .max(1000, 'Too Long!')
        .required('Required'),
    config: Yup.string()
        .min(20, 'Configuration must be at least 20 characters')
        .max(50, 'Too Long!')
        .required('Required'),
});

const Form = ({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) =>

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
                                type='name'
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
                            <input
                                type="text"
                                name='modelName'
                                placeholder='Model Name'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.modelName}
                                className={inputClass}
                            />
                            <span className='text-red-500'>
                                {touched.modelName && errors.modelName}
                            </span>
                        </div>
                        <div className={divClassLeft}>
                            <input
                                type="text"
                                name='price'
                                placeholder='Price'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.price}
                                className={inputClass}
                            />
                            <span className='text-red-500'>
                                {touched.price && errors.price}
                            </span>
                        </div>
                        <div className={divClassLeft}>
                            <input
                                type="text"
                                name="config"
                                placeholder='Configaration'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.config}
                                className={inputClass}
                            />
                            <span className='text-red-500'>
                                {touched.config && errors.config}
                            </span>
                        </div>
                        <div className={divClassLeft}>
                            <input
                                type="text"
                                name="inStock"
                                placeholder='In Stock'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.inStock}
                                className={inputClass}
                            />
                            <span className='text-red-500'>
                                {touched.inStock && errors.inStock}
                            </span>
                        </div>
                        <div className={divClassLeft}>
                            <input
                                type="file"
                                name='image'
                                placeholder='Upload an Image'
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
const iValue = { brandName: '', modelName: '', price: '', config: '', image: '', inStock: '' }
const MobileCreate = () => {
    const navigate = useNavigate();
    const onSubmit = (values, { setSubmitting }) => {
        fetch('http://localhost:3001', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        })
            .then((response) => {
                navigate('/');
            });

    }
    return (
        <div>
            <Formik
                initialValues={iValue}
                validationSchema={MobileSchema}
                component={Form}
                onSubmit={onSubmit}
            >
            </Formik>
        </div>
    );
};

export default MobileCreate;
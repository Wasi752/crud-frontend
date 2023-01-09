
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
        errors.brandName = 'Brand Name must be at least 4 characters';
    }
    if (!values.modelName) {
        errors.modelName = 'Required';
    } else if (values.modelName.length < 4) {
        errors.modelName = 'Model Name must be at least 4 characters';
    }
    if (!values.price) {
        errors.price = 'Required';
    } else if (values.price.length < 4) {
        errors.price = 'price must be at least 4 digits';
    } else if (!/^[0-9]*$/i.test(values.price)) {
        errors.price = 'price must be in digits';
    }
    if (!values.config) {
        errors.config = 'Required';
    }
    else if (values.config.length < 20) {
        errors.config = 'At least 20 characters';
    }
    if (!values.inStock) {
        errors.inStock = 'Required';
    } else if (!/^[0-9]*$/i.test(values.inStock)){
        errors.inStock = 'Stock must be a digit';
    }
    if(!values.image){
        errors.image ='Required'
    }

    console.log(JSON.stringify(errors));
    return errors;
}
const onSubmit = (values, { setSubmitting }) => {
        fetch('http://localhost:3001', {
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
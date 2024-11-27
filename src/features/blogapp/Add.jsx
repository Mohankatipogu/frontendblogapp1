import React from "react";
import { Formik,Field ,Form, ErrorMessage, } from "formik";
import * as Yup from 'yup';
import { useAddproductMutation } from "../../services/blogApi";
function Add(){
    var [AddProductFn]=useAddproductMutation();
    var OnSubmit=((values)=>{
      console.log(values)
      AddProductFn(values).then((res)=>{
        console.log(res)
    })
    })
   var initialValues={
        productName:String,
        image:URL,
        price:Number,
        discription:String,
        Category:String,
   }
   var validationSchema=Yup.object({
    productName:Yup.string().required("Plese Enter Your Product Name"),
    image:Yup.string().required("Plese Enter Your Product image"),
    price:Yup.number().required("Plese Enter Your Product price"),
    discription:Yup.string().required("Plese Enter Your Product Discription"),
    Category:Yup.string().required("Plese Enter Your Product Category")
     })
    
    return(
        <div>
            <Formik onSubmit={OnSubmit} validationSchema={validationSchema} initialValues={initialValues}>
               {
                ()=>{
                   return(
                    <div className="container border shadow p-5" style={{marginTop:'10%',width:"50%"}}>
                        <Form>
                            <Field type='text' className="form-control" id="name" name="productName" placeholder="Enter Your Name"></Field>
                            <ErrorMessage name="productName">nothing</ErrorMessage> &nbsp; &nbsp;
                            <Field type='text' className="form-control" id="image" name="image" placeholder="Enter Your image"></Field>
                            <ErrorMessage name="image"></ErrorMessage> &nbsp; &nbsp;
                            <Field type='text' className="form-control" id="Price" name="Price" placeholder="Enter Your Price"></Field>
                            <ErrorMessage name="price"></ErrorMessage> &nbsp; &nbsp;
                            <Field type='text' className="form-control" id="discription" name="discription" placeholder="Enter Your Discription"></Field>
                            <ErrorMessage name="discription"></ErrorMessage> &nbsp; &nbsp;
                            <Field type='text' className="form-control" id="name" name="Category" placeholder="Category"></Field>
                            <ErrorMessage name="Category"></ErrorMessage> &nbsp; &nbsp;
                            <br />
                            <button className="btn btn-success w-25" style={{marginLeft:"40%"}}>Submit</button>
                        </Form>
                    </div>
                   ) 
                }
               }
            </Formik>
        </div>
    )
}
export default Add;
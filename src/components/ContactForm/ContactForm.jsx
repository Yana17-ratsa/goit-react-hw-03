import { Formik, Form, Field, ErrorMessage } from "formik";
// import 'react-native-get-random-values'
import { nanoid } from 'nanoid';
import {object, string, number } from "yup";
import { useId } from "react";


const initialValues = {
    name: "",
    number: "",
    id: 'id' + nanoid(),
}


const FormSchema = object({
    name: string().min(3, "Too short!").max(50, "Too long!").required("Required!"),
    number: number().min(3, "Too short!").max(50, "Too long!").required("Required!"),
    id: string().min(3, "Too short!").max(50, "Too long!").required("Required!"),
})


const ContactForm = () => {

    const nameField = useId();
    const numberField = useId();

    const handleSubmit = (values, actions) => {}


    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FormSchema}>
            <Form>
                <div>
                    <label htmlFor={nameField}>Name</label>
                    <Field type="text" name="name" id={nameField}/>
                    <ErrorMessage name="name" component="span"/>
                </div>

                <div>
                    <label htmlFor={numberField}>Number</label>
                    <Field type="text" name="number" id={numberField}/>
                    <ErrorMessage name="number" component="span"/>
                </div>
            </Form>
        </Formik>
    )
}
export default ContactForm;
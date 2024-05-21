import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import { nanoid } from 'nanoid';

const initialValues = {
  name: '',
  number: '',
};

const FormSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required!'),
  number: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required!'),
});

const ContactForm = ({ onAdd }) => {
  const nameField = useId();
  const numberField = useId();

  const handleSubmit = (values, actions) => {
    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FormSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor={nameField}>Name</label>
          <Field type="text" name="name" id={nameField} />
          <ErrorMessage name="name" component="span" />
        </div>

        <div>
          <label htmlFor={numberField}>Number</label>
          <Field type="text" name="number" id={numberField} />
          <ErrorMessage name="number" component="span" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
export default ContactForm;

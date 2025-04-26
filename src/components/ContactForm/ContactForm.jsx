import {useId} from 'react';
import css from "./ContactForm.module.css";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { nanoid } from 'nanoid'

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, "To short!").max(50, "To long!").required("Required"),
  number: Yup.number().required("Required")
});
const ContactForm = ({onAdd}) => {
  const newContakt =
  {
    name: "",
    number: "",
  };
  const nameId=useId();
  const numberId=useId();
  const handleSubmit =(values,actions)=>{
    onAdd(
      {id : nanoid(),
       name: values.name,
       number: values.number,
      }
    )
    actions.resetForm();
  }
  return (
    <div className={css.formWrapper}>
    <Formik initialValues={newContakt} 
            onSubmit={handleSubmit}
            validationSchema={FeedbackSchema}>
      <Form>
        <div>
        <label htmlFor={nameId} >Name</label>
        <Field type="text" name="name" id={nameId} />
        <ErrorMessage name="name" component="p" />
        </div>
        <div>
        <label htmlFor={numberId} >Number</label>
        <Field type="text" name="number" id={numberId} />
        <ErrorMessage name="number" component="p" />
        </div>
        <button type='submit'>Add contact</button>
      </Form>

    </Formik>
    </div>
  )
};

export default ContactForm;
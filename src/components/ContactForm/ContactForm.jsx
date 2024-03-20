import * as yup from 'yup';
import { Field, Form, Formik, ErrorMessage } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";
import './ContactForm.css';

const initialValues = {
    id: "",
    name: "",
    number: "",
}

const regexp = /^\d{3}-\d{2}-\d{2}$/;
const FeedbackSchema = yup.object().shape({
    name: yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    number: yup.string().matches(regexp, 'Invalid number format "000-00-00"').required("Required")
});


const ContactForm = ({ onAdd }) => {
    const userNameId = useId();
    const userNumberId = useId();

    const onSubmitForm = (values, actions) => {
        onAdd({
            id: nanoid(),
            name: values.name,
            number: (values.number).toString(),
        })
        actions.resetForm();
    }

    return (
        <Formik initialValues={initialValues} onSubmit={onSubmitForm} validationSchema={FeedbackSchema}>
            <Form className="form">
                <div className="form-field">
                    <label htmlFor={userNameId}>Name:</label>
                    <Field name="name" className="input-field" id={userNameId} type="text" placeholder="John Rocha"></Field>
                    <ErrorMessage name="name" as="span" />
                </div>
                <div className="form-field">
                    <label htmlFor={userNumberId}>Number:</label>
                    <Field name="number" className="input-field" id={userNumberId} type="text" placeholder="000-00-00"></Field>
                    <ErrorMessage name="number" as="span" />
                </div>
                <button type="submit" className="form-btn">Add contact</button>
            </Form>
        </Formik>
    )
}

export default ContactForm;
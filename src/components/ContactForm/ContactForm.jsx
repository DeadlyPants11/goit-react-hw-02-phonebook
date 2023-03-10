import { Formik } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Form, Field, ErrorMessage, Label, Button } from './ContactForm.styled';
import { nanoid } from 'nanoid';
import React from 'react';

const schema = Yup.object().shape({
  name: Yup.string().required(),
  number: Yup.number().required(),
});

export const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={(values, { resetForm }) => {
        onSubmit({
          ...values,
          id: nanoid(),
        });
        resetForm();
      }}
    >
      <Form>
        <Label htmlFor="name">
          Name
          <Field
            id="name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage component="div" name="name" />
        </Label>
        <Label htmlFor="number">
          Number
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage component="div" name="name" />
        </Label>

        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

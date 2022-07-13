import { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FormBorder = styled(Form)`
  border: ${props => props.theme.borders.normal} black;
  padding: 10px;
  border-radius: 5px;
  width: 320px;
`;

const Input = styled(Field)`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.accent};
  border: none;
  border-radius: 3px;
`;

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  padding: 0.5em;
  color: ${props => props.theme.colors.primary};
  border: ${props => props.theme.colors.primary} palevioletred;
  border-radius: 3px;
`;

// ContactForm receives props onSubmit from App.jsx
// How to add this this.props.onSubmit in Formik?

const initialValues = { name: '', number: '' };
export const ContactForm = () => {
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const contact = {
  //     id: nanoid(),
  //     ...this.state,
  //   };
  //   this.props.onSubmit(contact);
  // };

  // const handleSubmit = (values, actions) => {
  //   console.log(values);
  //   console.log(actions);
  // };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      // onSubmit={(values, actions) => {
      //   console.log(JSON.stringify(values));
      //   // console.log(JSON.stringify(values, null, 2));

      //   actions.setSubmitting(true);
      //   actions.resetForm({
      //     values: {
      //       name: '',
      //       number: '',
      //     },
      //   });
      // }}
    >
      {props => (
        <>
          <FormBorder>
            <Input
              type="text"
              onChange={props.handleChange}
              value={props.values.name}
              name="name"
              placeholder="Enter name"
            />
            <Input
              type="text"
              onChange={props.handleChange}
              value={props.values.number}
              name="number"
              placeholder="Enter phone"
            />
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
            <Button type="submit">Submit</Button>
          </FormBorder>
        </>
      )}
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
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

const ErrorText = styled(ErrorMessage)`
  color: red;
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

const initialValues = { name: '', number: '' };
const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().min(6).max(10).required(),
});

export const ContactForm = ({ onAddNewContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    values.id = nanoid();

    onAddNewContact(values);
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
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
            <ErrorText component="div" name="name" />
            <Input
              type="text"
              onChange={props.handleChange}
              value={props.values.number}
              name="number"
              placeholder="Enter phone"
            />
            <ErrorText component="div" name="number" />
            <Button type="submit">Submit</Button>
          </FormBorder>
        </>
      )}
    </Formik>
  );
};

ContactForm.propTypes = {
  onAddNewContact: PropTypes.func.isRequired,
};

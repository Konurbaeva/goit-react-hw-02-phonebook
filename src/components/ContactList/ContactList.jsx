import { Component } from 'react';
// import { Formik } from 'formik';
import styled from 'styled-components';

export class ContactList extends Component {
  render() {
    const { contacts, deleteContact } = this.props;

    return (
      <>
        <UlList>
          {contacts.map(contact => (
            <li key={contact.id}>
              {contact.name} {contact.number}
              <Button onClick={() => deleteContact(contact.id)}>Delete</Button>
            </li>
          ))}
        </UlList>
      </>
    );
  }
}

const Button = styled.button`
  /* background: ${props => (props.primary ? 'palevioletred' : 'white')};
  color: ${props => (props.primary ? 'white' : 'palevioletred')}; */
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  padding: 0.5em;
  color: ${props => props.theme.colors.primary};
  background: ${props => props.theme.colors.accent};
  border: ${props => props.theme.colors.primary} palevioletred;
  border-radius: 3px;
`;

const UlList = styled.ul`
  list-style: none;
`;

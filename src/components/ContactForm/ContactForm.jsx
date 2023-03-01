import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import {
  FormWrapper,
  Form,
  ButtonWrapper,
  ButtonAdd,
  Label,
  FormInput,
} from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newState = { ...this.state, id: nanoid() };
    this.props.onSubmit(newState);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  static inputId = nanoid();

  render() {
    return (
      <FormWrapper>
        <Form onSubmit={this.handleSubmit}>
          <div>
            <Label htmlFor={this.inputId}>Name</Label>
            <FormInput
              type="text"
              id={this.inputId}
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <br />
            <Label htmlFor={this.inputId}>Number</Label>
            <FormInput
              type="tel"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              id={this.inputId}
              value={this.state.number}
              onChange={this.handleChange}
              name="number"
            />
          </div>

          <ButtonWrapper>
            <ButtonAdd type="submit">Add contact</ButtonAdd>
          </ButtonWrapper>
        </Form>
      </FormWrapper>
    );
  }
}

export default ContactForm;

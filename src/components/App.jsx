import React from 'react';
import Notiflix from 'notiflix';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from 'components/Filter/Filter';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    const find = this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(data.name.toLowerCase())
    );
    if (find.length) {
      Notiflix.Notify.info(`${data.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));
  };

  filter = ({ target: { value } }) => {
    if (!value) {
      this.setState({ filter: '' });
      return;
    }
    const filter = this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );
    this.setState(prevState => ({
      filter: [...filter],
    }));
  };

  handleDelete = idDelete => {
    const filter = this.state.contacts.filter(({ id }) => id !== idDelete);
    this.setState({ contacts: [...filter] });
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          marginTop: '50px',
          fontSize: 22,
          color: 'rgb(139, 126, 116)',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>

        <Filter filter={this.filter} />
        <ContactList
          contacts={this.state.filter || this.state.contacts}
          isFilter={this.state.filter.length}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

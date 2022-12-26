import React, { Component } from "react";
import Form from "./Form/Form";
import { nanoid } from 'nanoid'
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Container, Title } from "./App.styled";
class App extends Component {
  KEY = 'local-key'
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    status: '',
  }
  formSubmitHander = (data) => {
    const { contacts } = this.state;
    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    }
    const findContact = contacts.find(item => item.name.toLowerCase() === data.name.toLowerCase())
    if (!findContact) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact]
      }));
    } else {
      alert(`${findContact.name} is already in list`);
    }

  }

  onDelete = (id) => {
    const idx = this.state.contacts.findIndex(i => i.id === id);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter((item) => item.id !== id)
    }))
    this.state.contacts.splice(idx, 1);
    localStorage.removeItem(this.KEY);
    localStorage.setItem(this.KEY, JSON.stringify(this.state.contacts));
  }
  onChangeFilter = (value) => {
    this.setState({
      filter: value
    })
  }
  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  }

  componentDidUpdate() {
    const toLocal = this.state.contacts.map(item => item);
    const stringify = JSON.stringify(toLocal);
    if (this.state.filter.length === 0) {
      localStorage.removeItem(this.KEY);
      localStorage.setItem(this.KEY, stringify);
    }

  }
  componentDidMount() {
    const localData = JSON.parse(localStorage.getItem(this.KEY)) || [];
    if (localData.length === 0) {
      return this.setState({
        contacts: this.state.contacts
      })
    }
    return this.setState({
      contacts: localData
    })
  }
  render() {
    const { filter } = this.state;
    return (<Container>
      <Title>Phonebook</Title>
      <Form onSubmit={this.formSubmitHander} />
      <Title>Contacts</Title>
      <Filter value={filter} change={this.onChangeFilter} />
      <ContactList contacts={this.getFilteredContacts()} deleteContact={this.onDelete} />
    </Container >)

  }
}

export default App;
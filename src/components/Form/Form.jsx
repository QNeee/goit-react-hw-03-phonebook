import React, { Component } from "react";
import { nanoid } from 'nanoid'
import { ContainerForm, Label, Button } from "./Form.styled";
class Form extends Component {
    inputNameId = nanoid();
    inputNumberId = nanoid();
    state = {
        name: '',
        number: '',

    }
    inputHandler = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value

        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        const { name, number } = this.state;
        return (<ContainerForm onSubmit={this.onSubmit}>
            <Label htmlFor={this.inputNameId}>Name
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.inputHandler}
                    id={this.inputNameId}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                /></Label>
            <Label htmlFor={this.inputNumberId}>Phone
                <input
                    type="tel"
                    name="number"
                    value={number}
                    onChange={this.inputHandler}
                    id={this.inputNumberId}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                /></Label>
            <Button type="submit">Add Contact</Button>
        </ContainerForm>);
    }
}
export default Form;
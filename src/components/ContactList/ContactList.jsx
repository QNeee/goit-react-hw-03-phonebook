import { nanoid } from 'nanoid'
import PropTypes from "prop-types";
import { ContactListUl, ContactListLi, Button } from './ContactList.syled';
export const ContactList = ({ options, deleteContact }) => {
    return (<ContactListUl>
        {options.map(item => <ContactListLi id={item.id} key={nanoid()}>{item.name}:{item.number}<Button key={nanoid()} type="button" onClick={() => deleteContact(item.id)}>Delete</Button></ContactListLi>)}
    </ContactListUl>)
}

ContactList.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object),
    deleteContact: PropTypes.func
}
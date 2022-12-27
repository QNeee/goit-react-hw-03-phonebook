
import PropTypes from "prop-types";
import { ContactListUl, ContactListLi, Button } from './ContactList.syled';
export const ContactList = ({ contacts, deleteContact }) => {
    return (<ContactListUl>
        {contacts.map(item => <ContactListLi id={item.id} key={item.id}>{item.name}:{item.number}<Button type="button" onClick={() => deleteContact(item.id)}>Delete</Button></ContactListLi>)}
    </ContactListUl>)
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    deleteContact: PropTypes.func.isRequired
}
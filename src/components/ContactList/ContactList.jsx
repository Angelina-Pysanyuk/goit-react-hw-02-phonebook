import React from 'react';
import PropTypes from 'prop-types';
import { ListWrapper, ListItem, DeleteButton } from './ContactList.styled';

const ContactList = ({ getFilteredContacts, onDelete }) => {
  const contacts = getFilteredContacts();
  return (
    <ListWrapper>
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <ListItem key={id}>
              <span>
                <span>{name}</span>: <span>{number}</span>
              </span>
              <DeleteButton type="button" onClick={() => onDelete(id)}>
                Delete
              </DeleteButton>
            </ListItem>
          );
        })}
      </ul>
    </ListWrapper>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
  isFilter: PropTypes.number,
};

export default ContactList;

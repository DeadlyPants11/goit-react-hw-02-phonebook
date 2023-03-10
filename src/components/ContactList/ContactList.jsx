import PropTypes from 'prop-types';
import { IoIosContact } from 'react-icons/io';
import React from 'react';
import { List, Item, Button } from './ContactList.styled';
import { AiFillDelete } from 'react-icons/ai';

export const ContactList = ({ contacts, onDelete }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <Item key={id}>
        <IoIosContact />
        {name} : {number}
        <Button type="button" onClick={() => onDelete(id)}>
          <AiFillDelete />
        </Button>
      </Item>
    ))}
  </List>
);

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object),
};

import PropTypes from 'prop-types';
import React from 'react';
import { Label, Input } from './Filter.styled';

export const Filter = ({ filter, onChange }) => {
  return (
    <Label htmlFor="text">
      Find contacts by name
      <Input value={filter} name="text" onChange={onChange}></Input>
    </Label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

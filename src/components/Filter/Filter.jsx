import React from 'react';
import PropTypes from 'prop-types';

import { FilterTitle, FilterInput, FilterWrapper } from './Filter.styled';

const Filter = ({ filter }) => {
  return (
    <FilterWrapper>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInput type="text" onChange={filter} />
    </FilterWrapper>
  );
};

Filter.propTypes = {
  filter: PropTypes.func.isRequired,
};

export default Filter;

import React from 'react';
import PropTypes from 'prop-types';

export const Input = ({ className, value, onChange }) => (
  <input
    type="text"
    className={className}
    value={value}
    onChange={onChange}
  />
);

Input.propTypes = {
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

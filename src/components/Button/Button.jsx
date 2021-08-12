import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ className }) => (
  <button
    type="submit"
    className={className}
  />
);

Button.propTypes = {
  className: PropTypes.string.isRequired,
};

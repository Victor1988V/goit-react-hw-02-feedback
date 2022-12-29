import PropTypes from 'prop-types';
import { Title } from './Section.styled';

export const Section = ({ children, title }) => {
  return (
    <div>
      <Title>{title}</Title>
      {children}
    </div>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';

import { StaticList, StaticItem, Paragraphy } from './Statistics.styled';
import { Notification } from '../Notification/Notification';

export const Statistics = ({ good, neutral, bad, total, Percentage }) => {
  return total === 0 ? (
    <Notification message="There is no feedback" />
  ) : (
    <StaticList>
      <Paragraphy>Statistics</Paragraphy>
      <StaticItem>Good: {good}</StaticItem>
      <StaticItem>Neutral: {neutral}</StaticItem>
      <StaticItem>Bad: {bad}</StaticItem>
      <StaticItem>Total: {total}</StaticItem>
      <StaticItem>Positive feedback: {Percentage}%</StaticItem>
    </StaticList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  Percentage: PropTypes.number.isRequired,
};

import React from "react";
import PropTypes from "prop-types";

import styles from "./Statistics.module.css";

const StatisticSection = ({ label, percentage }) => (
  <>
    <span className={styles.label}>{label}</span>
    <span className={styles.percentage}>{percentage}%</span>
  </>
);

StatisticSection.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticSection;

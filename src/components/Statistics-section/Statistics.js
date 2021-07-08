import React from "react";
import PropTypes from "prop-types";

import StatisticSection from "./Statistic-section";
import styles from "./Statistics.module.css";

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const color = `(${r},${g},${b})`;
  return color;
}

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>{title}</h2>

    <ul className={styles.statList}>
      {stats.map(({ id, label, percentage }) => (
        <li
          key={id}
          className={styles.item}
          style={{
            backgroundColor: `rgb${randomColor()}`,
          }}
        >
          <StatisticSection label={label} percentage={percentage} />
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: null,
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;

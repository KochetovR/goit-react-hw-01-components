import React from "react";
import PropTypes from "prop-types";

import styles from "./Transactions.module.css";

export const TransactionsSection = ({ type, amount, currency }) => (
  <>
    <td className={styles.cell}>{type}</td>
    <td className={styles.cell}>{amount}</td>
    <td className={styles.cell}>{currency}</td>
  </>
);

TransactionsSection.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

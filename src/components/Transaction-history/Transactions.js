import React from "react";
import PropTypes from "prop-types";

import { TransactionsSection } from "./TransactionsSection";
import styles from "./Transactions.module.css";

export const Transactions = ({ transactions }) => (
  <div className={styles.container}>
    <table className={styles.table}>
      <thead className={styles.head}>
        <tr>
          <th className={styles.title}>Type</th>
          <th className={styles.title}>Amount</th>
          <th className={styles.title}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, type, amount, currency }) => (
          <tr key={id} className={styles.row}>
            <TransactionsSection
              type={type}
              amount={amount}
              currency={currency}
              id={id}
            />
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

Transactions.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      id: PropTypes.string,
    })
  ),
};

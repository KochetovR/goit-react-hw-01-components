import React from "react";
import PropTypes from "prop-types";

import defaultImg from "../Profile/defaultImg.jpg";
import styles from "./Friend.module.css";

const FriendListItem = ({ id, isOnline, name, avatar }) => {
  const statusClass = [styles.status];
  if (isOnline) {
    statusClass.push(styles.true);
  }
  return (
    <li key={id} className={styles.item}>
      <span className={statusClass.join(" ")}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="100" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.defaultProps = {
  avatar: defaultImg,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.oneOf([true, false]),
  id: PropTypes.number,
};

export default FriendListItem;

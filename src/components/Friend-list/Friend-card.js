import React from "react";
import PropTypes from "prop-types";

import defaultImg from "../Profile/defaultImg.jpg";
import styles from "./Friend.module.css";

const FriendCard = ({ isOnline, name, avatar }) => {
  const statusClass = [styles.status];
  if (isOnline) {
    statusClass.push(styles.true);
  }
  return (
    <>
      <span className={statusClass.join(" ")}></span>
      <img className={styles.avatar} src={avatar} alt={name} width="100" />
      <p className={styles.name}>{name}</p>
    </>
  );
};

FriendCard.defaultProps = {
  avatar: defaultImg,
};

FriendCard.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.oneOf([true, false]),
};

export default FriendCard;

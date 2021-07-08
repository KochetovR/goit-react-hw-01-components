import React from "react";
import PropTypes from "prop-types";

import FriendCard from "./Friend-card";
import styles from "./Friend.module.css";

const FriendList = ({ list }) => (
  <ul className={styles.friendList}>
    {list.map(({ avatar, name, id, isOnline }) => (
      <li key={id} className={styles.item}>
        <FriendCard avatar={avatar} name={name} isOnline={isOnline} id={id} />
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.oneOf([true, false]),
      id: PropTypes.number,
    })
  ),
};

export default FriendList;

import React from "react";
import PropTypes from "prop-types";

import FriendListItem from "./Friend-card";
import styles from "./Friend.module.css";

const FriendList = ({ list }) => (
  <ul className={styles.friendList}>
    {list.map(({ avatar, name, id, isOnline }) => (
      <FriendListItem avatar={avatar} name={name} isOnline={isOnline} id={id} />
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

import React from "react";
import PropTypes from "prop-types";

import Profile from "./Profile-card";
import styles from "./Profile.module.css";

const FriendList = ({ users }) => (
  <ul className={styles.list}>
    {users.map(
      ({ name, tag, location, avatar, stats: { followers, views, likes } }) => (
        <li key={tag} className={styles.card}>
          <Profile
            name={name}
            tag={tag}
            location={location}
            avatar={avatar}
            followers={followers}
            views={views}
            likes={likes}
          />
        </li>
      )
    )}
  </ul>
);
// Проверяю тип tag, т.к. использую его для ключей
FriendList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      tavatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    })
  ).isRequired,
};

export default FriendList;

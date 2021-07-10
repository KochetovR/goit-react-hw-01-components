import React from "react";
import PropTypes from "prop-types";

// import ProfileCard from "./Profile-card";
import styles from "./Profile.module.css";
import defaultImg from "./defaultImg.jpg";

const Profile = ({ name, tag, location, avatar, followers, views, likes }) => (
  <li className={styles.card}>
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  </li>
);

Profile.defaultProps = {
  avatar: defaultImg,
};

Profile.propTypes = {
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
  ),
};

export default Profile;

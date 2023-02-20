import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <li className={css.item}>
      <span
        className={css.status}
        style={{ background: isOnline ? 'green' : 'red' }}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

import { FriendListItem } from './FriendListItem';
import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ list }) => {
  return (
    <ul className={css.friendList}>
      {list.map(friend => {
        console.log(friend);
        return (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};

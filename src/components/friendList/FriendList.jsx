import { FriendListItem } from './FriendListItem';
import css from './FriendList.module.css';

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

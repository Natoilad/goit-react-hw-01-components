import { FriendListItem } from './FriendListItem';

export const FriendList = ({ list }) => {
  return (
    <ul class="friend-list">
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

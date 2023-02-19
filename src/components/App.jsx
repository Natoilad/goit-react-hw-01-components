import user from 'data/user.json';
import { Profile } from './profile/Profile.jsx';
import data from 'data/data.json';
import { Statistics } from './statistics/Statistics.jsx';
import { FriendList } from './friendList/FriendList.jsx';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';
import { TransactionHistory } from './transactionHistory/TransactionHistory.jsx';

export const App = () => {
  return (
    <div
      style={{
        padding: 20,
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList list={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

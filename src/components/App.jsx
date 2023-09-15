import { Profile } from './Profile/Profile';
import { Statistic } from './Statistics/Statistic';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/Transaction';

import user from '../data/user.json';
import stats from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};

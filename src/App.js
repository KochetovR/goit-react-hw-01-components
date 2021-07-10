import React from "react";

// components
import Profile from "./components/Profile/Profile";
import StatisticSection from "./components/Statistics-section/Statistics";
import FriendList from "./components/Friend-list/Friend-list";
import { Transactions } from "./components/Transaction-history/Transactions";

// data
import users from "./data/users.json";
import stats from "./data/statistics.json";
import friendData from "./data/friend-list.json";
import transactions from "./data/transactions.json";

// styles
import stylesProfile from "./components/Profile/Profile.module.css";

const App = () => (
  <div>
    <ul className={stylesProfile.list}>
      {users.map((user) => (
        <Profile
          key={user.tag}
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      ))}
    </ul>

    <StatisticSection stats={stats} title="Upload stats" />
    <StatisticSection stats={stats} />
    <FriendList list={friendData} />
    <Transactions transactions={transactions} />
  </div>
);

export default App;

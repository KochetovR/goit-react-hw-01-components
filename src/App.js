import React from "react";

import Profile from "./components/Profile/Profile";
import StatisticSection from "./components/Statistics-section/Statistics";
import FriendList from "./components/Friend-list/Friend-list";
import { Transactions } from "./components/Transaction-history/Transactions";

import users from "./data/users.json";
import stats from "./data/statistics.json";
import friendData from "./data/friend-list.json";
import transactions from "./data/transactions.json";

const App = () => (
  <div>
    <Profile users={users} />
    <StatisticSection stats={stats} title="Upload stats" />
    <FriendList list={friendData} />
    <Transactions transactions={transactions} />
  </div>
);

export default App;

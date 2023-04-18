import React from 'react';

import UserGoalItem from '../UserGoalItem/UserGoalItem';

const UserGoalList = (props) => {
  return (
    <ul className="goal-list">
      {props.items.map((goal) => (
        <UserGoalItem key={goal.id} id={goal.id} onDelete={props.onDeleteItem}>
          {goal.name} ({goal.age} ans)
        </UserGoalItem> // listes des users
      ))}
    </ul>
  );
};

export default UserGoalList;

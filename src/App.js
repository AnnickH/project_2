import { useState } from 'react';
import UserForm from './components/UserForm/UserFrom';
import UserGoalList from './components/UserGoalList/UserGoalList';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: 'g1', name: 'User 1', age: 5 },
    { id: 'g2', name: 'User 2', age: 55 },
  ]);

  const addUserHandler = (goal) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({
        id: Math.random(),
        name: goal.name,
        age: goal.age,
      });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>
      Auncun utilisateur trouvé. Ajoutez-en un
    </p>
  );

  if (courseGoals.length > 0) {
    content = (
      <UserGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  const onSubmitHandler = (data) => {
    console.log(data);
    if (data.name > 3 && data.age > 0) {
    }
    setCourseGoals((previous) => {
      return [data, ...previous]; //return les données en premiers puis le tableau actuel
    });
  };
  return (
    <>
      <section id="goal-form">
        <UserForm onAddGoal={addUserHandler} onSubmit={onSubmitHandler} />
      </section>

      <section id="goals">{content}</section>
    </>
  );
};

export default App;

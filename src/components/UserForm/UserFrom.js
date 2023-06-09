import React, { useState } from 'react';
import Button from '../Button/Button';
import styles from '../Button/Button.module.css';

const UserForm = ({ props, onSubmit }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const formSubmitHandler = (event) => {
    event.preventDefault(); // enleve le comportement par défault du rechargement de page

    const data = {
      id: Math.random(),
      name,
      age: +age,
    };
    console.log(name.length);

    if (name.length === 0 || age.length === 0) {
      console.log('error');
    }
    if (age <= 0) {
      console.log('l age doit etre supérieur a 0');
    }

    if (name.length >= 3 && age > 0) {
      console.log(data);
      setName('');
      setAge('');
      onSubmit(data); //n'envoie pas les données si name est plus petit que 3 et l'age est a 0
    }
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <label>Nom</label>
      </div>
      <div>
        <input value={name} onChange={nameChangeHandler} type="text" />
      </div>

      <div>
        <label>Age(année)</label>
      </div>
      <div>
        <input value={age} onChange={ageChangeHandler} type="number" />
      </div>

      <Button type="submit" style={styles.button}>
        Ajouter un objectif
      </Button>
    </form>
  );
};

export default UserForm;

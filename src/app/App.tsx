import React from 'react';
import TodoContainer from './containers/TodoContainer'

import '../styles/index.css';

export const App: React.FC<{}> = () => {
    return (
      <>
        <h1>React Redux Typescript</h1>
        <TodoContainer />
      </>
    );
  };
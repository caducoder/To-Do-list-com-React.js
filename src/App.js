//Primeira coisa a fazer em todos os componentes React
import React from 'react';

const App = () => {
  const message = 'Hello world!';

  return <h1>{message}</h1>;
}

export default App;//pq o index.js importa o App, aí a gente precisa exportar

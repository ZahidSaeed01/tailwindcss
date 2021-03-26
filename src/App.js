import React from 'react';
import './styles/main.css';

function App() {
  return (
    <div class="h-64">

      <div class="p-4 m-4 bg-green-600">
        <h1 class="text-2xl text-white font-bold"> Tailwind CSS demo</h1>
      </div>

      <div class="p-4 m-4 bg-green-300 h-full">
        <h2 class="text-red-600">Have fun using tailwind in the react</h2>
        <button class="bg-blue-500 hover:bg-blue-900 text-white py-2 px-2 rounded"> Click ME</button>
      </div>

    </div>
  );
}

export default App;

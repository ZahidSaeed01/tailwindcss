import React from 'react';
import './styles/tailwindOutput.css';
import Header from './Components/Header'
function App() {
  return (
    <div class="h-64">
      <Header />
      <div class="p-4 m-4 bg-green-300 h-full">
        <h2 class="text-red-600">Have fun using tailwind in the react</h2>
        <button class="bg-blue-500 hover:bg-blue-900 text-white py-2 px-2 rounded"> Click ME</button>
      </div>

    </div>
  );
}

export default App;

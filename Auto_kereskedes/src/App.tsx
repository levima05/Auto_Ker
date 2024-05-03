import { useEffect, useState } from 'react';
import './App.css';
import { Auto, Autok } from './auto';

function App() {
  const [autok, setAutok] = useState([] as Auto[]);
  const [newCar, setNewCar] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function load() {
      const response = await fetch('/autok.json');
      const autok = await response.json() as Autok;
      setAutok(autok.autok);
    }
    load();
  }, []);

  const kivalogatott = autok.filter(auto => auto.marka.includes(searchTerm));

  return (
    <div>
      <p>Autó hozzáadása:</p>
      <input
        type="text"
        placeholder="Add meg az autó nevét"
        onChange={e => {
          setNewCar(e.currentTarget.value);
        }}
      />
      <br /><br /><button
        onClick={() => {
          setAutok([...autok, { id: autok.length + 1, marka: newCar, tipus: '', uzemanyag: '', ulesekszama: 0, automatavalto: false }]);
          setNewCar('');
        }}
      >
        Felvétel
      </button>
    </div>
  );
}

export default App;

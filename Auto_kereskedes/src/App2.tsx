import { useEffect, useState } from 'react';
import './App.css';
import { Auto, Autok } from './auto';
<link rel="stylesheet" href="app.css"/>

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
    <>
      <div>
        <h2>Keresés:</h2>
        <input
          type="text"
          placeholder="Add meg a keresendő autót márkáját"
          onChange={e => {
            setSearchTerm(e.currentTarget.value);
          }}
        />
        <h2>Autók listája: </h2>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Márka</th>
              <th>Tipus</th>
              <th>Üzemanyag</th>
              <th>Ülések száma</th>
              <th>Automata váltó</th>
            </tr>
          </thead>
          <tbody>
            {kivalogatott.map(auto => (
              <tr key={auto.id}>
                <td>{auto.id}</td>
                <td>{auto.marka}</td>
                <td>{auto.tipus}</td>
                <td>{auto.uzemanyag}</td>
                <td>{auto.ulesekszama}</td>
                <td>{auto.automatavalto ? 'Igen' : 'Nem'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;

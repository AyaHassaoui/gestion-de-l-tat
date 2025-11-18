import { useState } from 'react';
import { UtilisateurContext } from './UtilisateurContext';

import FormulaireControle from './FormulaireControle';
import FormulaireNonControle from './FormulaireNonControle';
import TemperatureConvertor from './TemperatureConvertor';
import Profil from './Profil';
import Inscription from './Inscription';

function App() {
  const [utilisateur, setUtilisateur] = useState({
    nom: 'Alice',
    email: 'alice@example.com',
    connecte: true,
  });

  return (
    <UtilisateurContext.Provider value={{ utilisateur, setUtilisateur }}>
      <div>
        <h1>TP React débutant</h1>

        <h2>Formulaire Contrôlé</h2>
        <FormulaireControle />

        <h2>Formulaire Non-Contrôlé</h2>
        <FormulaireNonControle />

        <h2>Formulaire d’inscription</h2>
        <Inscription />

        <h2>Lifting State Up</h2>
        <TemperatureConvertor />

        <h2>Profil Utilisateur</h2>
        <Profil />
      </div>
    </UtilisateurContext.Provider>
  );
}

export default App;

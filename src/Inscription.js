import { useState, useContext } from 'react';
import { UtilisateurContext } from './UtilisateurContext';

function Inscription() {
  const { setUtilisateur } = useContext(UtilisateurContext);

  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nom.trim() || !email.trim() || !motDePasse.trim()) {
      alert('Veuillez remplir tous les champs.');
      return;
    }

    // On met à jour l'utilisateur global et on le connecte
    setUtilisateur({
      nom,
      email,
      connecte: true,
    });

    alert(`Inscription réussie pour ${nom} !`);

    // On vide les champs
    setNom('');
    setEmail('');
    setMotDePasse('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />
      <input
        type="email"
            placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={motDePasse}
        onChange={(e) => setMotDePasse(e.target.value)}
      />
      <button type="submit">S’inscrire</button>
    </form>
  );
}

export default Inscription;

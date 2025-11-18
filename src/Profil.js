import { useContext } from 'react';
import { UtilisateurContext } from './UtilisateurContext';

function Profil() {
  const { utilisateur, setUtilisateur } = useContext(UtilisateurContext);

  const deconnexion = () => {
    setUtilisateur({
      ...utilisateur,
      connecte: false,
    });
  };

  const connexion = () => {
    setUtilisateur({
      ...utilisateur,
      nom: utilisateur.nom || 'Alice',
      connecte: true,
    });
  };

  return (
    <div>
      {utilisateur && utilisateur.connecte ? (
        <>
          <p>Bienvenue, {utilisateur.nom}</p>
          <button onClick={deconnexion}>Se déconnecter</button>
        </>
      ) : (
        <>
          <p>Veuillez vous connecter.</p>
          <button onClick={connexion}>Se connecter</button>
        </>
      )}
    </div>
  );
}

export default Profil;

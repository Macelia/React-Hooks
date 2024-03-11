import React, { useState } from 'react'

const IncDec = () => {

  const [compteur,setcompteur] = useState(0);

  const handleIncrement=()=>{
 
    setcompteur(compteur +1)
  }

  const handleDecrement =()=> {
   
    // const newCompteur = compteur -1 > 0 ? compteur -1:compteur 
   
    // if(compteur >= 0){  setcompteur(compteur -1)
    // }
    // else{
    //   if(compteur === 0){
    //     alert("Vous avez atteint zéro !");
    //   }
    // }

    const newCompteur = compteur - 1 > 0 ? compteur - 1 : 0;

    // Mettez à jour l'état avec le nouvel état calculé
    setcompteur(newCompteur);

    // Affichez une alerte si le compteur atteint zéro
    if (newCompteur === 0) {
      alert("Vous avez atteint zéro !");
    }
   
  }

  return (
    <div>
        <p>Le compteur est à : {compteur}</p>
        <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      
    </div>
  )
}

export default IncDec

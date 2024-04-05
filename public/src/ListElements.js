import React from 'react';

function ListElements() {
  const [nombreNuevo, setNombreNuevo] = React.useState('');
  const [elementos, setElementos] = React.useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("/datos", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nombreNuevo: nombreNuevo })
    })
    .then(response => response.json())
    .then(data => {
      setElementos(prevElementos => {
        // Verificar si el elemento ya existe en el arreglo
        if (!prevElementos.includes(data)) {
          // Si no existe, agregarlo al arreglo
          return [...prevElementos, data];
        } else {
          // Si ya existe, devolver el arreglo sin modificar
          return prevElementos;
        }
      });
      setNombreNuevo('');
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return {elementos, setNombreNuevo, handleSubmit };
}

export default ListElements;
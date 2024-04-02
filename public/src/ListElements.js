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
      setElementos(prevElementos => [...prevElementos, data]);
      setNombreNuevo('');
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return { nombreNuevo, elementos, setNombreNuevo, handleSubmit };
}

export default ListElements;
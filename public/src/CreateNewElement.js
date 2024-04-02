import React from 'react';

function CreateNewElement({ peleador }) {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 p-3">
                    <div className="bg-dark p-3">
                    <h1 className="text-white">{peleador.name}</h1>
                        <p className="text-white">
                            {peleador.description}
                        </p>
                    </div>
        </div>
    );
}

export default CreateNewElement;
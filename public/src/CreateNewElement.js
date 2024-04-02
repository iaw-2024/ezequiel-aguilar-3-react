import React from 'react';

function CreateNewElement({ peleador }) {
    return (
        <div class="col-lg-4 col-md-6 col-sm-12 p-3">
                    <div class="bg-dark p-3">
                    <h1 class="text-white">{peleador.name}</h1>
                        <p class="text-white">
                            {peleador.description}
                        </p>
                    </div>
        </div>
    );
}

export default CreateNewElement;

import React, { useState } from 'react';
import { AddCategorias } from './components/AddCategorias';
import { GifGrid }  from './components/GifGrid';
 
export const GifExpertApp = () => {

    const [categorias, setCategorias ] = useState(['Mia kalifa']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategorias setCategorias={ setCategorias } />
            <hr/>

         
            <ol>
                {
                    categorias.map( categorias =>(
                        <GifGrid 
                            key = { categorias }
                            categorias = { categorias }
                        />
                    ) )
                }
            </ol>

        </>
    )

}

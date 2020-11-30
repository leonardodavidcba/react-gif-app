import React, { } from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ categorias }) => {
  
    const { data, loading } = useFetchGifs(categorias);

   
    return (
        <>
        <h3> { categorias } </h3>
        { loading && <p>Cargando</p> }
    
        <div className="card-grid">
                
                    {
                        data.map( img => (
                            <GifGridItem 
                                key={ img.id }
                                { ...img }
                            />
                        ))
                    }
            
            </div> 
        
        </>
    )
}
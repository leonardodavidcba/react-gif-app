import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( categorias ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( ()=> {
        getGifs( categorias )
        .then(  imgs => {
           setTimeout( ()=> {
            setState({
                data: imgs,
                loading: false
            });
           }, 2000);
        });
    }, [ categorias ])



    return state;
}

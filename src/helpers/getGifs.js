export const getGifs = async( categorias ) => {
    const url =  `https://api.giphy.com/v1/gifs/search?api_key=4xJe0Fh6DzsBwkopdhI157NoAT1m8EFX&q=${ encodeURI(categorias) }&limit=5`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    console.log(url);

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })


    return gifs;
}
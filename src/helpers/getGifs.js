import axios from "axios";

export const getGifs = async (category) => {
    // API: https://developers.giphy.com/
    const {data} = await axios(`https://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_API_KEY}&q=${category}&limit=20`);

    const gifs = data.data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}
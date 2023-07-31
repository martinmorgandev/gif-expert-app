export const getGifs = async (item) => {
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=7O68HTTxgW0v1XClSev2g0NREzDS7zmi&q=${item}&limit=10`
    const resp = await fetch (URL);
    const {data} = await resp.json()

    const gifs = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))

    return gifs
}
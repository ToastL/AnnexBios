export async function load({ fetch }) {
    let movieData = await fetch('https://annexbios-server.onrender.com/api/movies')
                    .then(res => res.json())
    return {
        movieData
    }
}
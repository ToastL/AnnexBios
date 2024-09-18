<script lang="js">
    import { Input } from "postcss";

    let validateMovieWrong = false
    let validateImageWrong = false
    let validateInfoWrong = false
    let validateLengthWrong = false
    let validateReleaseWrong = false
    let validateGenreWrong = false
    let validateCountryWrong = false
    let validateImdbWrong = false
    let validateDirectorWrong = false

    function validateFunction(){
        let movieInput = document.getElementById("movieInput")
        let imageInput = document.getElementById("imageInput");
        let infoInput = document.getElementById("infoInput");
        let lengthInput = document.getElementById("lengthInput");
        let releaseInput = document.getElementById("releaseInput");
        let genreInput = document.getElementById("genreInput");
        let countryInput = document.getElementById("countryInput");
        let imdbInput = document.getElementById("imdbInput");
        let directorInput = document.getElementById("directorInput");

        if (movieInput.value == "") {
            validateMovieWrong = true;
        } else {
            validateMovieWrong = false;
        };

        if (imageInput.value == "") {
            validateImageWrong = true;
        } else {
            validateImageWrong = false
        };
        if (infoInput.value == "") {
             validateInfoWrong = true;
        } else {
             validateInfoWrong = false;
        };
        if (lengthInput.value == "") {
            validateLengthWrong = true;
        } else {
            validateLengthWrong = false;
        };
        if (releaseInput.value == "") {
            validateReleaseWrong = true;
        } else {
            validateReleaseWrong = false;
        };
        if (genreInput.value == "") {
            validateGenreWrong = true;

        } else {
            validateGenreWrong = false;
        };;
        if (countryInput.value == "") {
            validateCountryWrong = true;
        
        } else {
            validateCountryWrong = false;
        };
        if (imdbInput.value == "") {
            validateImdbWrong = true;
        } else {
            validateImdbWrong = false;
        };
        if (directorInput.value == "") {
            validateDirectorWrong = true;  
        } else {
            validateDirectorWrong = false;
        };

        }
    
    </script>

<main class="flex h-screen pl-[20rem] flex-col max-[820px]:pl-[13rem] max-[637px]:pl-[7rem] max-[537px]:pl-[3rem] max-[383px]:pl-[2rem]">
    <form class="flex flex-col" action="">
        <label for="movieInput" class="uppercase text-[2.2rem] pl-[5rem] pt-[2rem] max-[707px]:text-[1.8rem] max-[462px]:text-[1.2rem]">Movies</label>
        <input id="movieInput" class={"w-[24rem] h-[3rem] bg-lightg rounded-lg p-2 ml-[5rem] max-[707px]:w-[20rem] max-[707px]:h-[2rem] max-[462px]:w-[15rem] " + (validateMovieWrong ? "border border-red" : "")} type="text" placeholder="Movie title here">
        {#if validateMovieWrong}
            <div  class="ml-[5rem] text-xl text-red">*Please add a movie name</div>
        {/if}
        <label for="imageInput" class="uppercase text-[2.2rem] pl-[5rem] pt-[1rem] max-[707px]:text-[1.8rem] max-[462px]:text-[1.2rem]">Image</label>
        <input id="imageInput" class={"w-[24rem] h-[3rem] bg-lightg rounded-lg p-2 ml-[5rem] max-[707px]:w-[20rem] max-[707px]:h-[2rem] max-[462px]:w-[15rem] " + (validateImageWrong ? "border border-red" : "")} type="file" placeholder="Image link here">
        {#if validateImageWrong}
            <div id="imageInput" class="ml-[5rem] text-xl text-red">*Please add a banner</div>
        {/if}
        <label for="infoInput" class="uppercase text-[2.2rem] pl-[5rem] pt-[1rem] max-[707px]:text-[1.8rem] max-[462px]:text-[1.2rem]">Description</label>
        <textarea id="infoInput" class={"w-[24rem] h-[7rem] bg-lightg rounded-lg  ml-[5rem] p-2 max-[707px]:w-[20rem] max-[462px]:w-[15rem] resize-none " + (validateInfoWrong ? "border border-red" : "")} placeholder="Info here"></textarea>
        {#if validateInfoWrong}
            <div id="infoInput" class="ml-[5rem] text-xl text-red">*Please add a description</div>
        {/if}
        <label for="lengthInput" class="uppercase text-[2.2rem] pl-[5rem] pt-[1rem] max-[707px]:text-[1.8rem] max-[462px]:text-[1.2rem]">Lenght</label>
        <input id="lengthInput" class={"w-[24rem] h-[3rem] bg-lightg rounded-lg p-2 ml-[5rem] max-[707px]:w-[20rem] max-[707px]:h-[2rem] max-[462px]:w-[15rem] " + (validateLengthWrong ? "border border-red" : "")} type="time" placeholder="Lenght here">
        {#if validateLengthWrong}
            
            <div id="lengthInput" class="ml-[5rem] text-xl text-red">*Please add a time</div>
        {/if}
        <label for="releaseInput" class="uppercase text-[2.2rem] pl-[5rem] pt-[1rem] max-[707px]:text-[1.8rem] max-[462px]:text-[1.2rem]">Realese date</label>
        <input id="releaseInput" class={"w-[24rem] h-[3rem] bg-lightg rounded-lg p-2 ml-[5rem] max-[707px]:w-[20rem] max-[707px]:h-[2rem] max-[462px]:w-[15rem] " + (validateReleaseWrong ? "border border-red" : "")} type="text" placeholder="Release date">
        {#if validateReleaseWrong}
        <div id="releaseInput" class="ml-[5rem] text-xl text-red">*Please add a release date</div>
        {/if}
        <label for="genreInput" class="uppercase text-[2.2rem] pl-[5rem] pt-[1rem] max-[707px]:text-[1.8rem] max-[462px]:text-[1.2rem]">Genre</label>
        <input id="genreInput" class={"w-[24rem] h-[3rem] bg-lightg rounded-lg p-2 ml-[5rem] max-[707px]:w-[20rem] max-[707px]:h-[2rem] max-[462px]:w-[15rem] " + (validateGenreWrong ? "border border-red" : "")} type="text" placeholder="Genre">
        {#if validateGenreWrong}
        <div id="genreInput" class="ml-[5rem] text-xl text-red">*Please add a genre</div>
        {/if}
        <label for="countryInput" class="uppercase text-[2.2rem] pl-[5rem] pt-[1rem] max-[707px]:text-[1.8rem] max-[462px]:text-[1.2rem]">Country</label>
        <input id="countryInput" class={"w-[24rem] h-[3rem] bg-lightg rounded-lg p-2 ml-[5rem] max-[707px]:w-[20rem] max-[707px]:h-[2rem] max-[462px]:w-[15rem] " + (validateCountryWrong ? "border border-red" : "")} type="text" placeholder="Country">
        {#if validateCountryWrong}
        <div id="countryInput" class="ml-[5rem] text-xl text-red">*Please add a counrty</div>
        {/if}
        <label for="imdbInput" class="uppercase text-[2.2rem] pl-[5rem] pt-[1rem] max-[707px]:text-[1.8rem] max-[462px]:text-[1.2rem]">Imdb</label>
        <input id="imdbInput" class={"w-[24rem] h-[3rem] bg-lightg rounded-lg p-2 ml-[5rem] max-[707px]:w-[20rem] max-[707px]:h-[2rem] max-[462px]:w-[15rem] " + (validateImdbWrong ? "border- border-red" : "")} type="text" placeholder="Imdb">
        {#if validateImdbWrong}
        <div id="ImdbInput" class="ml-[5rem] text-xl text-red">*Please add a Imdb score</div>
        {/if}
        <label for="directorInput" class="uppercase text-[2.2rem] pl-[5rem] pt-[1rem] max-[707px]:text-[1.8rem] max-[462px]:text-[1.2rem]">Director</label>
        <input id="directorInput" class={"w-[24rem] h-[3rem] bg-lightg rounded-lg p-2 ml-[5rem] max-[707px]:w-[20rem] max-[707px]:h-[2rem] max-[462px]:w-[15rem] " + (validateDirectorWrong ? "border border-red" : "")} type="text" placeholder="Director">
        {#if validateImdbWrong}
        <div id="directorInput" class="ml-[5rem] text-xl text-red">*Please add a Director name</div>
        {/if}
        <button type="submit" class="bg-tree rounded-xl w-[18rem] h-[3rem] text-white ml-[5rem] text-2xl hover:font-bold hover:bg-green mt-[3rem] mb-[3rem] max-[707px]:w-[13rem] max-[707px]:text-xl max-[707px]:h-[2.5rem] max-[462px]:w-[9rem]" on:click={validateFunction}>SUBMIT</button>
    </form>
</main>
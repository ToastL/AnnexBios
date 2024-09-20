<script>
    import { onMount } from "svelte";
    import header from "../assets/header_afbeelding.jpg";

    export let data;
</script>

<main class="pt-[10rem] z-0">
    <section
    id="locations"
    class="py-[4rem] px-[10rem] bg-cover bg-center backdrop-opacity-50 max-[780px]:px-[6rem] max-[650px]:px-[4rem] max-[570px]:px-[2rem]
           before:absolute before:left-0 before:top-0 before:content-[''] before:bg-black before:w-full before:h-full before:-z-10 before:opacity-75"
    style="background-image: url({header});"
>
    <div class="p-10 w-full bg-black text-white mb-20">
        <h1 class="mb-6 uppercase font-semibold text-6xl max-[515px]:text-5xl max-[440px]:text-4xl max-[367px]:text-3xl max-[329px]:text-2xl">
            Welkom bij AnnexBios
        </h1>
        <p class="mb-14 max-w-[50rem] text-xl max-[440px]:text-lg max-[367px]:text-base max-[329px]:text-xs">
            Welkom bij Anexbios, dé plek voor filmvermaak! Geniet van de nieuwste films in een comfortabele omgeving met de beste snacks.
        </p>
        <a class="uppercase font-semibold bg-white text-black p-3 max-[440px]:text-xs max-[326px]:hidden" href="/#locations">
            Bekijk onze vestigingen
        </a>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 w-full gap-9">
        <div class="h-[23.8rem] w-full bg-white">
            <img class="w-full h-[12rem] object-cover max-[1123px]:h-[14rem] max-[650px]:h-[10rem]" 
                 src="/images/building_images/leidscherijn.png" alt="Bilthoven" />
            <div class="text-3xl pl-7 pt-7 text-primary font-bold max-[1300px]:text-2xl max-[1120px]:text-xl">Leischerijn</div>
            <div class="text-xl text-primary pl-7 pt-2 max-[1300px]:text-base max-[1120px]:text-sm">Rijksstraatweg 42, 3223 KA</div>
            <a href="https://annexbiosleidscherijn.gluwebsite.nl">
                <div class="bg-amber w-[9rem] h-[2rem] text-white ml-7 mt-4 flex items-center text-[15px] pl-2 font-bold">
                    BEZOEK WEBSITE
                </div>
            </a>
        </div>


        <div class="h-[23.8rem] w-full bg-white">
            <img class="w-full h-[12rem] object-cover max-[1123px]:h-[14rem] max-[650px]:h-[10rem]" 
                 src="/images/building_images/maarssen.png" alt="Breukelen" />
            <div class="text-3xl pl-7 pt-7 text-primary font-bold max-[1300px]:text-2xl max-[1120px]:text-xl">Maarssen</div>
            <div class="text-xl text-primary pl-7 pt-2 max-[1300px]:text-base max-[1120px]:text-sm">Rijksstraatweg 42, 3223 KA</div>
            <a href="https://annexbiosmaarssen.gluwebsite.nl">
                <div class="bg-amber w-[9rem] h-[2rem] text-white ml-7 mt-4 flex items-center text-[15px] pl-2 font-bold">
                    BEZOEK WEBSITE
                </div>
            </a>
        </div>


        <div class="h-[23.8rem] w-full bg-white">
            <img class="w-full h-[12rem] object-cover max-[1123px]:h-[14rem] max-[650px]:h-[10rem]" 
                 src="/images/building_images/woerden.png" alt="Leerdam" />
            <div class="text-3xl pl-7 pt-7 text-primary font-bold max-[1300px]:text-2xl max-[1120px]:text-xl">Woerden</div>
            <div class="text-xl text-primary pl-7 pt-2 max-[1300px]:text-base max-[1120px]:text-sm">Rijksstraatweg 42, 3223 KA</div>
            <a href="https://annexbioswoerden2.gluwebsite.nl">
                <div class="bg-tree w-[9rem] h-[2rem] text-white ml-7 mt-4 flex items-center text-[15px] pl-2 font-bold">
                    BEZOEK WEBSITE
                </div>
            </a>
        </div>


        <div class="h-[23.8rem] w-full bg-white">
            <img class="w-full h-[12rem] object-cover max-[1123px]:h-[14rem] max-[650px]:h-[10rem]" 
                 src="/images/building_images/montfoort.png" alt="Maarssen" />
            <div class="text-3xl pl-7 pt-7 text-primary font-bold max-[1300px]:text-2xl max-[1120px]:text-xl">Montfoort</div>
            <div class="text-xl text-primary pl-7 pt-2 max-[1300px]:text-base max-[1120px]:text-sm">Rijksstraatweg 42, 3223 KA</div>
            <a href="https://annexbiosmontfoort.gluwebsite.nl">
                <div class="bg-violet w-[9rem] h-[2rem] text-white ml-7 mt-4 flex items-center text-[15px] pl-2 font-bold">
                    BEZOEK WEBSITE
                </div>
            </a>
        </div>


        <div class="h-[23.8rem] w-full bg-white">
            <img class="w-full h-[12rem] object-cover max-[1123px]:h-[14rem] max-[650px]:h-[10rem]" 
                 src="/images/building_images/bilthoven.png" alt="Montfoort" />
            <div class="text-3xl pl-7 pt-7 text-primary font-bold max-[1300px]:text-2xl max-[1120px]:text-xl">Bilthoven</div>
            <div class="text-xl text-primary pl-7 pt-2 max-[1300px]:text-base max-[1120px]:text-sm">Rijksstraatweg 42, 3223 KA</div>
            <a href="https://annexbiosbilthoven.gluwebsite.nl">
                <div class="bg-baby w-[9rem] h-[2rem] text-white ml-7 mt-4 flex items-center text-[15px] pl-2 font-bold">
                    BEZOEK WEBSITE
                </div>
            </a>
        </div>


        <div class="h-[23.8rem] w-full bg-white">
            <div class="text-3xl pl-7 pt-[5rem] text-primary font-bold max-[1230px]:text-xl max-[1023px]:text-3xl max-[350px]:text-lg">
                Weten waar wij nog meer komen?
            </div>
            <div class="text-xl text-primary pl-7 pt-2 max-[1230px]:text-lg max-[1023px]:text-xl max-[350px]:text-sm">
                Benieuwd waar wij nog meer komen? 
                Bij Anexbios brengen we filmvermaak naar diverse locaties. 
                Blijf op de hoogte van onze uitjes en evenementen!
            </div>
            <div class="bg-primary w-[14rem] h-[2rem] text-white ml-7 mt-5 flex items-center text-[15px] pl-2 font-bold max-[1164px]:w-[10rem] max-[1164px]:text-[10px] max-[1023px]:w-[14rem] max-[1023px]:text-[15px] max-[350px]:text-[9px] max-[350px]:w-[9rem]">
                BEKIJK NIEUWE PROJECTEN
            </div>
        </div>
    </div>
</section>


    <section id="movies" class="bg-black pt-[6rem]">
        <div class="flex justify-center items-center w-[50rem]">
            <h1 class="uppercase text-white text-6xl font-bold">
                aanbevolen films
            </h1>
        </div>
        <div
            id="moviesFromAPI"
            class="flex justify-center items-center gap-2 mt-[8rem] max-[1650px]:flex-wrap"
        >
            {#each data.movieData as movie}
                <div class="h-[42.5rem] w-[16rem] bg-white">
                    <img
                        class="w-full h-[22rem] object-cover"
                        src={movie.banner_path}
                        alt="starwars"
                    />
                    <div class="text-2xl text-primary pl-3 pt-4 font-bold">
                        {movie.title}
                    </div>
                    <img
                        class="w-[10rem] pl-3 pt-[0.7rem]"
                        src="/images/3star.png"
                        alt=""
                    />
                    <div class="text-[1.3rem] text-primary pl-[1rem] pt-2">
                        Release: {movie.release_date}
                    </div>
                    <div class="text-[0.9rem] text-primary pl-[1rem] pt-2">
                        {movie.description}
                    </div>
                </div>
            {/each}
        </div>
    </section>

    <section class="bg-black w-full pb-10">
        <div class="px-10 pt-20 w-full">
            <h1 class="uppercase text-white text-6xl font-bold">nieuws</h1>
            <div
                class="grid mt-[6rem] gap-5 max-[750px]:flex-wrap max-[750px]:justify-center max-[750px]:items-center"
            >
                <div class="bg-white">
                    <img class="w-full" src="/images/place2.png" alt="" />
                    <div class="text-3xl text-primary pl-8 pt-8 font-bold">
                        LOREM IPSUM
                    </div>
                    <div class="text-primary text-2xl pl-8 pt-2">
                        Gepubliceerd: 23‐05‐2018
                    </div>
                    <div
                        class="text-primary pl-8 pb-10 text-xl max-[572px]:text-base"
                    >
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penabus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, preum quis, sem. Nulla
                        consequat massa quis enim.Lorem i psum dolor sit amet,
                        consectetuer
                        <br />
                        <br />
                        adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                        massa. Cum sociis natoque penabus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis, ultricies
                        nec, pellentesque eu, preum quis, sem. Nulla consequat massa
                        quis enim.
                    </div>
                </div>

                <div class="bg-white">
                    <img src="/images/place2.png" alt="" />
                    <div class="text-3xl text-primary pl-8 pt-8 font-bold">
                        LOREM IPSUM
                    </div>
                    <div class="text-primary text-2xl pl-8 pt-2">
                        Gepubliceerd: 23‐05‐2018
                    </div>
                    <div
                        class="text-primary pl-8 pb-10 text-xl max-[572px]:text-base"
                    >
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penabus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, preum quis, sem. Nulla
                        consequat massa quis enim.Lorem i psum dolor sit amet,
                        consectetuer.
                        <br />
                        <br />
                        adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                        massa. Cum sociis natoque penabus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis, ultricies
                        nec, pellentesque eu, preum quis, sem. Nulla consequat massa
                        quis enim.
                    </div>
                </div>

                <div class="bg-white col-span-2 h-[35rem]">
                    <img src="/images/place3.png" alt="" />
                    <div class="text-3xl text-primary pl-8 pt-8 font-bold">
                        LOREM IPSUM
                    </div>
                    <div class="text-primary text-2xl pl-8 pt-2">
                        Gepubliceerd: 23‐05‐2018
                    </div>
                    <div
                        class="text-primary pl-8 pt-3 text-xl max-[572px]:text-base"
                    >
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penabus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis,
                        ultricies nec, pellentesque eu, preum quis, sem. Nulla
                        consequat massa quis enim.Lorem i psum dolor sit amet,
                        consectetuer.
                        <br />
                        <br />
                        adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                        massa. Cum sociis natoque penabus et magnis dis parturient
                        montes, nascetur ridiculus mus. Donec quam felis, ultricies
                        nec, pellentesque eu, preum quis, sem. Nulla consequat massa
                        quis enim.
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

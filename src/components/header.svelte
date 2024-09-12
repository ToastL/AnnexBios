<script>
  import logo from "../assets/logo_hoofd.png";

  let barOut = false
</script>

{#if barOut}
  <div class="w-full h-full bg-primary z-50 fixed">
    <div class="text-[4rem] text-white right-40 flex justify-end pr-[2rem] pt-[2rem] cursor-pointer" on:click={() =>  barOut = !barOut}><i class="fa-solid fa-x"></i></div>
    <div class="flex justify-center items center text-white text-5xl mt-[15rem] cursor-pointer"on:click={() =>  barOut = !barOut}>Vestegingen</div>
    <div class="flex justify-center items center text-white text-5xl mt-[5rem] cursor-pointer"on:click={() =>  barOut = !barOut}>Aanbevolen Films</div>
    <div class="flex justify-center items center text-white text-5xl mt-[5rem] cursor-pointer"on:click={() =>  barOut = !barOut}>Contact</div>
  </div>
{/if}


  <header class="fixed w-full z-10">
  <div class="flex justify-between w-full h-[6rem] bg-white px-[7rem] max-[960px]:pr-[3rem] max-[960px]:pl-[3rem] max-[530px]:pl-[1rem]">
    <div class="flex items-center h-full">
      <img alt="logo" src={logo} class="w-[12rem] h-auto max-[362px]:w-[10rem]" />
    </div>
    <div
      class="flex items-center space-x-7 text-xl font-semibold text-primary max-[960px]:hidden"
    >
      <a href="#locations">VESTEGINGEN</a>
      <a href="#movies">AANBEVOLEN FILMS</a>
      <a href="#contact">CONCTACT</a>
    </div>
      <button class="min-[961px]:hidden text-4xl" on:click={() =>  barOut = !barOut}><i class="fa-solid fa-bars"></i></button>
  </div>

  
    
  

  <div
    class="flex w-full bg-primary px-[6rem] font-semibold text-l h-[4rem] gap-8 max-[960px]:justify-center max-[960px]:items-center"
  >
    <div class="flex h-full items-center">
      <h1 class="text-white max-[612px]:w-[6rem] max-[452px]:hidden">KOOP HIER JE TICKETS</h1>
    </div>
    <div class="flex items-center h-full font-semibold">
      <div class="bg-gray-100 flex items-center justify-center gap-8">
        <div class="relative">
          <button
            id="dropdownButton"
            class="flex items-center gap-2 px-3 py-1 bg-secondary text-white"
          >
            <span class="text-sm">KIES JE VESTEGING</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </button>

          <div
            id="dropdownMenu"
            class="absolute right-0 mt-1 bg-primary hidden shadow-md text-sm"
          >
            <a
              href="annexbiosleerdam.gluwebsite.nl"
              class="block px-3 py-1 bg-primary text-white hover:bg-secondary"
              >LEERDAM</a
            >
            <a
              href="annexbiosmaarsen.gluwebsite.nl"
              class="block px-3 py-1 bg-primary text-white hover:bg-secondary"
              >MAARSEN</a
            >
            <a
              href="annexbiosbreukelen.gluwebsite.nl"
              class="block px-3 py-1 bg-primary text-white hover:bg-secondary"
              >BREUKELEN</a
            >
            <a
              href="annexbiosbilthoven.gluwebsite.nl"
              class="block px-3 py-1 bg-primary text-white hover:bg-secondary"
              >BILTHOVEN</a
            >
            <a
              href="annexbiosmontfoort.gluwebsite.nl"
              class="block px-3 py-1 bg-primary text-white hover:bg-secondary"
              >MONTFOORT</a
            >
            <a
              href="annexbioswoerden.gluwebsite.nl"
              class="block px-3 py-1 bg-primary text-white hover:bg-secondary"
              >WOERDEN</a
            >
            <a
              href="annexbiosleidscherijn.gluwebsite.nl"
              class="block px-3 py-1 bg-primary text-white hover:bg-secondary"
              >LEIDSCHERIJN</a
            >
          </div>
        </div>
        <button>
          <div class="w-[9rem] h-[1.5rem] bg-white text-primary text-center max-[452px]:hidden">
            BEKIJK TICKETS
          </div></button
        >
       
        <script>
          document
            .getElementById("dropdownButton")
            .addEventListener("click", function (event) {
              event.preventDefault();
              const menu = document.getElementById("dropdownMenu");
              menu.classList.toggle("hidden");
            });

          document.addEventListener("click", function (event) {
            const menu = document.getElementById("dropdownMenu");
            const button = document.getElementById("dropdownButton");
            if (
              !menu.contains(event.target) &&
              !button.contains(event.target)
            ) {
              menu.classList.add("hidden");
            }
          });
        </script>
      </div>
    </div>
  </div>
</header>

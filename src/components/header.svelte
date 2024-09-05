<script>
  import logo from "../assets/logo_hoofd.png";
</script>

<header class="fixed w-full z-10">
  <div class="flex justify-between w-full h-[6rem] bg-white px-[7rem]">
    <div class="flex items-center h-full">
      <img alt="logo" src={logo} class="w-[12rem] h-auto" />
    </div>
    <div
      class="flex items-center space-x-7 text-xl font-semibold"
      style="color: grey;"
    >
      <a href="vestegingen.svelte">VESTEGINGEN</a>
      <a href="aanbevolenfilms.svelte">AANBEVOLEN FILMS</a>
      <a href="contact.svelte">CONCTACT</a>
    </div>
  </div>

  <div
    class="flex w-full bg-primary px-[6rem] font-semibold text-l h-[4rem] gap-8"
  >
    <div class="flex h-full items-center">
      <h1 class="text-white">KOOP HIER JE TICKETS</h1>
    </div>
    <div class="flex items-center h-full font-semibold">
      <div class="bg-gray-100 flex items-center justify-center gap-8">
        <div class="relative">
          <button
            id="dropdownButton"
            class="flex items-center gap-2 px-3 py-1 bg-secondary text-white"
          >
            <span class=" text-sm">KIES JE VESTEGING</span>
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
              href="#"
              class="block px-3 py-1 bg-primary text-white hover:bg-secondary"
              >LEERDAM</a
            >
            <a
              href="#"
              class="block px-3 py-1 bg-primary text-white hover:bg-secondary"
              >MAARSEN</a
            >
            <a
              href="#"
              class="block px-3 py-1 bg-primary text-white hover:bg-secondary"
              >BREUKELEN</a
            >
            <a
              href="#"
              class="block px-3 py-1 bg-primary text-white hover:bg-secondary"
              >BILTHOVEN</a
            >
            <a
              href="#"
              class="block px-3 py-1 bg-primary text-white hover:bg-secondary"
              >MONTFOORT</a
            >
            <a
              href="#"
              class="block px-3 py-1 bg-primary text-white hover:bg-secondary"
              >WOERDEN</a
            >
            <a
              href="#"
              class="block px-3 py-1 bg-primary text-white hover:bg-secondary"
              >LEIDSCHERIJN</a
            >
          </div>
        </div>
        <button>
          <div class="w-[9rem] h-[1.5rem] bg-white text-primary text-center">
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

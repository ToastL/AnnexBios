<script>
    import header from "../../assets/header_afbeelding.jpg";
</script>

<main class="pt-[10rem] z-0">
    <section
        id="locations"
        class="py-[4rem] px-[10rem] bg-cover bg-center backdrop-opacity-50 max-[780px]:px-[6rem] max-[650px]:px-[4rem] max-[570px]:px-[2rem]
       before:absolute before:left-0 before:top-0 before:content-[''] before:bg-black before:w-full before:h-full before:-z-10 before:opacity-50"
        style="background-image: url({header});"
    >
        <div
            class="min-h-screen flex justify-center bg-gray-100 gap-[10rem] py-10 max-[1320px]:flex-wrap max-[1320px]:gap-[5rem] max-[640px]:pt-[2rem]"
        >
        
            <div
                class="w-full max-w-md bg-white p-8 rounded-lg border border-black shadow-xl"
            >
                <div class="bg-gray-200 p-6 rounded-lg">
                    <h2
                        class="text-2xl font-bold text-gray-800 mb-6"
                    >
                        CONTACT US
                    </h2>

                    <div class="space-y-6">
                        <div>
                            <label
                                for="name"
                                class="block text-sm font-medium text-gray-700"
                                >Naam</label
                            >
                            <input
                                type="text"
                                class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 sm:text-base"
                            />
                        </div>

                        <div>
                            <label
                                for="email"
                                class="block text-sm font-medium text-gray-700"
                                >Email</label
                            >
                            <input
                                type="email"
                                class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 sm:text-base"
                            />
                        </div>

                        <div>
                            <label
                                for="bericht"
                                class="block text-sm font-medium text-gray-700"
                                >Bericht</label
                            >
                            <input
                                type="text"
                                class="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-gray-700 sm:text-base"
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                class="w-full py-3 bg-indigo-600 bg-primary text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300"
                            >
                                Stuur Bericht
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div
                class="w-full max-w-md bg-white p-8 rounded-lg border border-black shadow-xl"
            >
                <div class="bg-gray-200 p-6 rounded-lg">
                    <h2
                        class="text-2xl font-bold gap-2 text-gray-800 mb-6 tex font-weight: 700"
                    >
                        CONTACT
                    </h2>
                    <div class="text-xl text-gray-800 mb-6">
                        <a href="tel:080020555"> +31 6 83705752 </a>.
                    </div>
                    <h2
                    class="text-2xl font-bold gap-2 text-gray-800 mb-6 tex font-weight: 700"
                >
                    BASED IN
                </h2>
                    <div class="text-xl text-gray-800 mb-6">
                        Hoofdkantoor AnnexBios Koningin Wilhelminalaan 9 3527 LA
                        Utrecht
                    </div>
                    <div class="flex justify-center mb-6">
                        <iframe
                            title=""
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4904.301126382029!2d5.103226076164051!3d52.076988968934806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6658b394155cd%3A0x989811b0dc83d2b8!2sKon.%20Wilhelminalaan%207%2C%203527%20LA%20Utrecht!5e0!3m2!1snl!2snl!4v1726132713181!5m2!1snl!2snl"
                            class="w-[500rem] h-[20rem]"
                            style="border:0;"
                            allowfullscreen="true"
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

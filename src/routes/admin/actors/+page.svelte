<script lang="js">
    import { get } from "svelte/store";

    let validateActorWrong = false
    let validateImageActorWrong = false

    function validateActorFunction(){
        let actorInput = document.getElementById("actorInput");
        let imageActorInput = document.getElementById("imageActorInput");

        if (actorInput.value == ""){
            validateActorWrong = true;
        } else {
            validateActorWrong = false;
        };
        if (imageActorInput.value == ""){
            validateImageActorWrong = true;
        } else {
            validateImageActorWrong = false;
        };
    }

</script>

<main class="flex h-screen pl-[20rem] flex-col max-[820px]:pl-[13rem] max-[637px]:pl-[7rem] max-[537px]:pl-[3rem] max-[383px]:pl-[2rem]">
    <form class="flex flex-col" action="">
        <label for="actorInput" class="uppercase text-[2.2rem] pl-[5rem] pt-[2rem] max-[707px]:text-[1.8rem] max-[462px]:text-[1.2rem]">Actor name</label>
        <input id="actorInput" class={"w-[24rem] h-[3rem] bg-lightg rounded-lg  ml-[5rem] max-[707px]:w-[20rem] max-[707px]:h-[2rem] max-[462px]:w-[15rem] p-2 " + (validateActorWrong ? "border border-crimson" : "")} type="text" placeholder="Actor Name here">
        {#if validateActorWrong}
            <div id="actorInput" class="ml-[5rem] text-xl text-red">*Please add a actor name</div>
        {/if}
        <label for="imageActorInput" class="uppercase text-[2.2rem] pl-[5rem] pt-[1rem] max-[707px]:text-[1.8rem] max-[462px]:text-[1.2rem]">Image of actor</label>
        <input id="imageActorInput" class={"w-[24rem] h-[3rem] bg-lightg rounded-lg  ml-[5rem] max-[707px]:w-[20rem] max-[707px]:h-[2rem] max-[462px]:w-[15rem] p-2 " + (validateImageActorWrong ? "border border-crimson" : "")} type="file" placeholder="Image link here">
        {#if validateImageActorWrong}
        <div id="imageActorInput" class="ml-[5rem] text-xl text-red">*Please add a Image</div>
        {/if}
        <button type="submit" class="bg-tree rounded-xl w-[18rem] h-[3rem] text-white ml-[5rem] text-2xl hover:font-bold hover:bg-green mt-[3rem] mb-[3rem] max-[707px]:w-[13rem] max-[707px]:text-xl max-[707px]:h-[2.5rem] max-[462px]:w-[9rem]" on:click={validateActorFunction}>SUBMIT</button>
    </form>
</main>
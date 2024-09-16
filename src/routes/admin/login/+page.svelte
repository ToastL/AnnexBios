<script>
    import { goto } from "$app/navigation";

  let username = "";
  let password = "";
  let wrong = false;

  const correctUsername = "sannielover05";
  const correctPassword = "admin";

  function login() {
    // @ts-ignore
    username = document.getElementById("username").value;
    // @ts-ignore
    password = document.getElementById("password").value;
    if (username == correctUsername && password == correctPassword) {
      wrong = false
      goto('/admin/movies')
    } else {
      wrong = true
    }
  }
</script>

<div class="flex items-center justify-center min-h-screen bg-gray-100">
  <div
    class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-xl border"
  >
    <h2 class="text-2xl font-bold text-center text-gray-800">Login</h2>

    <form on:submit|preventDefault={login}> 
        <div class="block text-sm">Admin user</div>
        <input id = "username"
          class="w-full px-3 py-2 mt-1 border border-primary rounded-lg"
          
        />

        <div class="block text-sm" >Password</div>
        <input id="password" type="password"
          class="w-full px-3 py-2 mt-1 border border-primary rounded-lg"
          
        />
        {#if wrong}
          <p>Wrong user or password</p>
        {/if}

        <div class="block py-2"></div>
        <button
          type="submit"
          class="w-full px-4 font-medium text-white bg-primary py-2 bg-indigo-600 rounded-lg"
        >
          Login
        </button>
    </form>
  </div>
</div>
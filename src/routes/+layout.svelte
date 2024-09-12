<script>
    import Header from '../components/header.svelte'
    import Footer from '../components/footer.svelte'
    import Sidebar from '../components/sidebar.svelte'
    import '../app.css'
    import { page } from '$app/stores';

    console.log($page.route.id)
</script>

{#if !$page.route.id?.startsWith('/admin')}
    <Header />
{:else}
    <Sidebar />
{/if}
<slot />
{#if !$page.route.id?.startsWith('/admin')}
    <Footer />
{/if}
<script>
	import { Router, Route } from "svelte-routing";
	import { fade } from "svelte/transition";
	import Layout from "./components/Layout.svelte";
	import Footer from "./components/Footer.svelte";
	import Home from "./pages/Home.svelte";
	import Info from "./pages/Info.svelte";
	import Shop from "./pages/Shop.svelte";
	import Control from "./pages/Control.svelte";

	const routes = [
		["info", Info],
		["shop", Shop],
		["control", Control],
		["/", Home],
	];

	export let url = "";
</script>

<Router {url}>
	<Layout>
		<div style="position: relative;">
			{#each routes as [path, Component]}
				<Route {path}>
					<div
						transition:fade
						style="position: absolute; width: 100%;">
						<Component />
						<Footer />
					</div>
				</Route>
			{/each}
		</div>
	</Layout>
</Router>

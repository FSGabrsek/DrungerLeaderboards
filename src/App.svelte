<script>
	import { onMount } from "svelte";
    import { getCategories } from "./categoryService";
	import { categories } from "./stores.js"
	import Run from "./Run.svelte"

	onMount(async () => {
		await getCategories()
		setCategory(0)
	})

	function setCategory(i) {
		console.log(i);
		index = i
		runs = $categories[i].runs.sort((r1, r2) => r1.time > r2.time)
	}

	let index = -1;
	let runs = false
</script>

<header>
	<div class="top">
		
		<img src="../logo.png" alt="" srcset="">
	</div>
	<div class="bot"/>
</header>
<main>
	{#if runs}
		<div class="categoryBar">
			{#each $categories as category, i}
				<button class:active={i == index} class="categoryButton" on:click={() => {setCategory(i)}}>
					{category.title}
				</button>
			{/each}
		</div>
		{#if runs.length > 0}
			{#each runs as run, i}
				<Run runner={run.runner} time={run.time} index={i + 1}/>
				{#if runs[i + 1]}
					<span class="diff">
						+ {new Date(runs[i + 1].time - run.time).getMinutes()}:{new Date(runs[i + 1].time - run.time).getSeconds()}.<span id="mil">{new Date(runs[i + 1].time - run.time).getMilliseconds().toString().slice(0,2)}</span>
					</span>
				{/if}
			{/each}
		{:else}
			<h3>No one has submitted any runs in this category so far.</h3>
		{/if}
		
	{/if}
</main>

<style>
	:global(body)::before {
		content: "";

		background-image: url('https://dreadhunger.com/images/update-bg.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: bottom;
		opacity: .3;

		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;

		z-index: -10;
		
	}

	header {
		display: flex;
		flex-direction: column;
		justify-content: center;

		color: white;
		width: 100%;
		margin-bottom: 27px;
	}

	.top {
		display: flex;
		flex-direction: row;
		justify-content: center;
		
		background-color: black;

		height: 80px;
	}

	img {
		position: absolute;
		height: 150px;

	}

	.bot {
		background-image: url('https://dreadhunger.com/images/top-header-spat.svgz');
		width: 100%;
		height: 53px;
		transform: translate(0, -15px);
		z-index: -1;

		background-repeat: repeat-x;
	}

	.categoryBar {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		overflow: scroll;
		overflow-y: hidden;
		overflow-x: auto;

		justify-content: start;
		gap: 3rem;

		width: 110%;
		padding-bottom: 50px;
	}

	.categoryButton {
		background: none;
		border: none;

		text-transform: uppercase;
		font-weight: normal;

		font-family: 'Noto Serif JP', serif;
		color: white;

		background-image: url('../bgBar.png');
		background-size: 100% 100%;
		background-repeat:no-repeat;
		padding: 10px 4em;
		image-rendering: -webkit-optimize-contrast;
	}

	.active {
		background-image: url('../bgBarRed.png');
	}

	.categoryButton::after:hover {
		background-image: url('../bgBarRed.png');
	}

	main {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;

		gap: 10px;
	}

	:global(#mil) {
        font-size: .7em;
    }

	.diff {
		align-self: end;
		margin: 0 20% 0 0;

		font-size: 1.2rem;
	}

	@media only screen and (min-width: 625px) {
		main {
			margin-inline: clamp(25px, 20vw, 300px);
			padding: 30px 0;
		}
	}

	@media only screen and (max-width: 625px) {
		main {
			margin-inline: clamp(25px, 3vw, 300px);
			padding: 30px 0;
		}
	}
</style>
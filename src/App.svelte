<script>
	import Run from './Run.svelte'

	let time = new Date(0)
	time.setMinutes(27)
	time.setSeconds(34)
	time.setMilliseconds(210)

	let time2 = new Date(0)
	time2.setMinutes(28)
	time2.setSeconds(15)
	time2.setMilliseconds(460)

	const runs = [
		{
			runner: {
				name: 'Jack',
				url: 'https://www.twitch.tv/jackmakes_'
			},
			time: time
		},
		{
			runner: {
				name: 'Overlite',
				url: 'https://www.twitch.tv/jackmakes_'
			},
			time: time2
		},
		
	].sort((r1, r2) => r1.time > r2.time)

</script>

<header>
	<div class="top">
		<h1>Drungers</h1>
	</div>
	<div class="bot"/>
</header>
<main>
	{#each runs as run, i}
		<Run runner={run.runner} time={run.time} index={i + 1}/>
		{#if runs[i + 1]}
			<span class="diff">
				+ {new Date(runs[i + 1].time - run.time).getMinutes()}:{new Date(runs[i + 1].time - run.time).getSeconds()}.<span id="mil">{new Date(runs[i + 1].time - run.time).getMilliseconds().toString().slice(0,2)}</span>
			</span>
		{/if}
	{/each}
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
	}

	.top {
		display: flex;
		flex-direction: row;
		justify-content: center;
		
		background-color: black
	}

	h1 {
		padding: 2rem;
	}

	.bot {
		background-image: url('https://dreadhunger.com/images/top-header-spat.svgz');
		width: 100%;
		height: 53px;
		translate: 0 -15px;
		z-index: -1;

		background-repeat: repeat-x;
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
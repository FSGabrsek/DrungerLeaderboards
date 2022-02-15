<script>

</script>

<header>
	<div class="top">
		<h1>Drungers</h1>
	</div>
	<div class="bot"/>
</header>
<main>
	"We are nearly through the passage, the storm bites at our heels, and the crew whispers of blood and dark magic."
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

		margin-inline: clamp(50px, 20vw, 300px);
		padding: 30px 0;
	}
</style>
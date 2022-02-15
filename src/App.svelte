<script>

</script>

<header>
	<div class="top">
		<h1>Header</h1>
	</div>
	<div class="bot"/>
</header>
<main>
	"We are nearly through the passage, the storm bites at our heels, and the crew whispers of blood and dark magic."
</main>

<style>
	main {
		text-align: center;
		max-width: 240px;
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
</style>
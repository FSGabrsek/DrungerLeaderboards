<script>
    export let index = 1
    export let runner = { name: "Name", url: "." }
    export let time = new Date()
</script>

<div class="container">
    <img src="../bgBar.png" class="bgBar" alt="background stripe">
    <div class="wrapper">
        <div class="index">
            {index}
        </div>
        <div class="name">
            <a href="{runner.url}">{runner.name}</a>
        </div>
        <div class="spacer">
            -
        </div>
        <div class="time">
            {time.toLocaleTimeString()}
        </div>
    </div>
</div>


<style>
    a, a:visited {
        text-decoration: none;
        color: white;
        transition: all .5s ease;
    }

    a:hover {
        color: rgb(199, 22, 30);
        transition: all .5s ease;
    }

    .wrapper {
        color: white;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        font-weight: bold;
        font-size: 1.5rem;

        gap: 2rem;
        padding: 20px 12.5%;
    }

    .container {
        position: relative;
        width: 100%;
    }

    .bgBar {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        z-index: -1;
    }

    .index {
        text-shadow: 3px 2px 3px rgba(255, 255, 255, 0.4);
    }
</style>


<script>
    export let index = '?'
    export let runner = { name: "Name", url: "." }
    export let time = new Date()
</script>

<div class="container">
    <img src="../bgBar.png" class="bgBar" alt="background stripe">
    <div class="wrapper">
        <div class="index">
            {index}.
        </div>
        <span></span>
        <div class="name">
            <a href="{runner.url}">{runner.name}</a>
        </div>
        <div class="spacer">
            -
        </div>
        <div class="time">
            {time.getMinutes()}:{time.getSeconds().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}.<span id="mil">{time.getMilliseconds().toString().slice(0,2)}</span>
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

        font-weight: normal;
        font-size: 1.5rem;
        line-height: .6em;

        gap: 1rem;
        padding: 30px 12.5%;
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


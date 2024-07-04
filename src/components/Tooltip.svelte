<script>
    export let data;
    export let colorScale;
    export let width;

    import { fly, fade } from "svelte/transition";

    let tooltipWidth;

    const xNudge = 5;
    const yNudge = 5;

    $: xPosition = data.x + tooltipWidth + xNudge > width
        ? data.x - tooltipWidth - xNudge
        : data.x + xNudge;

    $: yPosition = data.y + yNudge;

    $: isWhiteText = ["Democracia plena", "Democracia imperfecta", "Régimen autoritario"].includes(data.DemocracyType);
</script>

<div
    class="tooltip"
    in:fly={{ y: 10, duration: 120, delay: 120 }}
    out:fade
    style="position: absolute;
        top: {yPosition}px;
        left: {xPosition}px;"
    bind:clientWidth={tooltipWidth}
>
    <h1>{data.Leader}</h1><h2>{data.Country}</h2>
    <div class="info">
        <span class="score">{data.Age} años</span>
        <span class="continent {isWhiteText ? 'white-text' : ''}" style="background: {colorScale(data.DemocracyType)};">{data.DemocracyType}</span>
    </div>
    <div>
        <span class="bar background" />
        <span class="bar foreground"
        style="background: {colorScale(data.DemocracyType)};
        width: {tooltipWidth}" />
    </div>
</div>

<style>
    .tooltip {
        background-color: white;
        box-shadow: 2px 3px 8px rgba(0, 0, 0, 0.15);
        padding: 8px 6px;
        border-radius: 3px;
        pointer-events: none;
        transition: top 50ms ease, left 50ms ease;
    }

    .info {
        display: flex;
        justify-content: space-between;
        column-gap: 8px;
        align-items: center;
    }

    .score {
        font-size: 12px;
    }

    .continent {
        font-size: 11px;
        padding: 3px;
        border-radius: 3px;
        text-transform: uppercase;
    }

    .continent.white-text {
        color: white; /* Color blanco para el texto */
    }

    h1 {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 4px;
    }

    h2 {
        font-size: 14px;
        font-weight: 400;
        font-style: italic;
        margin-bottom: 6px;
    }

    .bar {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3px;
        width: 100%;
    }

    .bar.background {
        background: #eee;
    }
</style>
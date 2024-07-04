<script>
    export let yScale;
    export let groupByContinent;
    export let width;

    import { fade } from "svelte/transition";

    const ticks = yScale.domain();
</script>

<g class="axis y">
    {#each ticks as tick, index}
        {#if groupByContinent}
            {#if width > 568 && tick}
            <g class="tick" transition:fade={{ delay: index * 10}}>
                <text class="text-dividido" y={yScale(tick) + 20} x={5}>{tick} &rarr;</text>
            </g>
            {:else}
                <g class="tick" transition:fade={{ delay: index * 10 }}>
                    <!-- Verificar si tick contiene un espacio -->
                    {#if tick.includes(' ')}
                        <text class="text-dividido" y={yScale(tick) - 10} x={4}>{tick.split(' ')[0]}</text>
                        <text class="text-dividido" y={yScale(tick) + 2} x={4}>{tick.split(' ')[1]}</text>
                    {:else}
                        <!-- Si no hay espacio, mostrar el texto en una sola línea -->
                        <text class="text-dividido" y={yScale(tick)} x={4}>{tick}</text>
                    {/if}
                </g>
            {/if}
        {/if}
    {/each}
</g>


<style>
    .text-dividido {
        font-weight: 600;
    }
</style>
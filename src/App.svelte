<script>
	import * as d3 from 'd3'
  import { sankey, sankeyJustify, sankeyLinkHorizontal } from 'd3-sankey';
  import { fly } from "svelte/transition";
  import data from "src/data/data.js";

  const margin = {
    top: 10,
    right: 5,
    bottom: 20,
    left: 5,
  };

  let width = 600;
  let height = 600;
  $: innerWidth = width - margin.left - margin.right;
  $: innerHeight = height - margin.top - margin.bottom;

  $: sankeyGen = sankey()
    .nodeAlign(sankeyJustify)
    .nodeWidth(10)
    .nodePadding(12)
    .nodeId(d => d.id)
    .size([innerWidth, innerHeight])
    .linkSort((a, b) => 
    d3.descending(a.value, b.value))
    .nodeSort((a, b) => 
    d3.descending(a.value, b.value));

	$: dataSankey = sankeyGen(data);
	  
	$: nodes = dataSankey.nodes;
	$: links = dataSankey.links;

  const path = sankeyLinkHorizontal()
    // @ts-ignore
    .source((d) => [d.source.x1, d.y0])
    // @ts-ignore
    .target((d) => [d.target.x0, d.y1]);

  let hoveredData = [];
  $: suma = Math.floor(hoveredData.reduce((sum, link) => sum + link.value, 0) / 10).toLocaleString('es-ES') + " toneladas";

  function handleMouseOverNode(node) {
    hoveredData = links.filter(link => link.source === node || link.target === node);
  }

  let tooltipWidth;
  let mouseX;
  let mouseY;
  document.addEventListener('mousemove', function(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
  });
</script>

<div class="chart-container" bind:clientWidth={width}>
  <svg {width} {height} transform="translate({margin.left}, {margin.top})">
    <g >
      {#each links as d}
        <!-- svelte-ignore a11y-mouse-events-have-key-events -->
        <path
        d={path(d)}
        fill='none'
        stroke='rgba(0, 0, 0, .2)'
        stroke-opacity={hoveredData.length > 0 ? (hoveredData.includes(d) ? 1 : 0.2) : 0.5}
        stroke-width={d.width}
        on:mouseover={() => {
          hoveredData = [d];
        }}
        on:mouseleave={() => {
          hoveredData = [];
        }}/>
      {/each}
    </g>
    <g class='rect-group'>
      {#each nodes as d, i}
        <!-- svelte-ignore a11y-mouse-events-have-key-events -->
        <rect
          x={d.x0}
          y={d.y0}
          height={d.y1 - d.y0}
          width={d.x1 - d.x0}
          fill="black"
          on:mouseover={() => {
            handleMouseOverNode(d);
          }}
          on:mouseleave={() => {
            hoveredData = [];
          }}/>
        <text
          class="country-names"
          x={d.x0 < innerWidth / 4 ? d.x1 + 6 : d.x0 - 6}
          y={(d.y1 + d.y0) / 2}
          dy={5}
          style="text-anchor: {d.x0 < width / 4 ? 'start' : 'end'};
          font-weight: {hoveredData.some(link => link.source.id === d.id || link.target.id === d.id) ? 'bold' : 'normal'};
          font-size: {d.id === "MarruecosOrigen" || d.id === "TurquíaOrigen" || d.id === "ArgentinaOrigen" || d.id === "SiriaOrigen" ? '0.85rem' : 'initial'};">
          {i < 9 ? d.id.slice(0, -6) : d.id}
        </text>
      {/each}
    </g>
  </svg>
  {#if hoveredData.length > 0}
    <div
      transition:fly
      bind:clientWidth={tooltipWidth}
      class="tooltip"
      style="left: {tooltipWidth + mouseX > innerWidth ? mouseX - tooltipWidth - 5 : mouseX + 7}px; top: {mouseY + 12}px">
      <h1>{suma === "0 toneladas" ? "" : suma}</h1>
    </div>
  {/if}
</div>

<style>
  .tooltip {
        position: absolute;
        padding: 8px 6px;
        background: white;
        box-shadow: rgba(0, 0, 0, 0.15) 2px 3px 8px;
        border-radius: 3px;
        pointer-events: none;
        transition:
            top 10 ease,
            left 10ms ease;
    }

    .country-names {
      pointer-events: none;
    }
</style>

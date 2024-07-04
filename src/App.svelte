<script>
  import data from "$data/data.js";

  import {
    forceSimulation,
    forceX,
    forceY,
    forceCollide
  } from "d3-force";
  
  let groupByContinent = false;

  // Filtro de datos para excluir los valores con DemocracyType vacío cuando groupByContinent es verdadero
  $: filteredData = groupByContinent
    ? data.filter(d => d.DemocracyType)  // Excluir los datos sin DemocracyType si se agrupa por continente
    : data;
  
  const RADIUS = 5;
  let nodes = [];
  let simulation = forceSimulation();

  $: simulation.nodes(filteredData)
    .force("x", forceX().x(d => xScale(d.Age)).strength(0.8))
    .force("y", forceY().y(d => groupByContinent ? yScale(d.DemocracyType) + 20 : innerHeight / 2).strength(0.2))
    .force("collide", forceCollide().radius((d) => radiusScale(d.Age) + 1.5))
    .alpha(0.6)
    .alphaDecay(0.04)
    .on("tick", () => {
      nodes = simulation.nodes();
    })
    .restart();

  let width = 400,
    height = 500;
  
  const margin = {
    top: 25,
    right: 0,
    bottom: 25,
    left: 0
  }

  $: innerWidth = width - margin.left - margin.right;
  let innerHeight = height - margin.top - margin.bottom;

  import { scaleLinear, scaleBand, scaleOrdinal, scaleSqrt } from "d3-scale";
  $: xScale = scaleLinear()
    .domain([20, 100])
    .range([0, innerWidth]);

  import { mean, rollups } from "d3-array";
  $: continents = rollups(
      filteredData,
      v => mean(v, d => d.Age),
      d => d.DemocracyType
    ) // Agrupar los datos por tipo de democracia y devolver el promedio de edad
      .sort((a, b) => b[1] - a[1]) // Ordenar los datos por valor promedio
      .map(d => d[0]); // Obtener el nombre del continente

  const colorRange = {
    "Democracia plena": "#214591",
    "Democracia imperfecta": "#4A90BF",
    "Régimen híbrido": "#EBD749",
    "Régimen autoritario": "#D94B4C",
    "Other": "#E6E6E6"
  };
  
  $: colorScale = scaleOrdinal()
      .domain(continents)
      .range(continents.map(type => colorRange[type] || colorRange["Other"]));

  $: yScale = scaleBand()
      .domain(continents)
      .range([innerHeight, 0])
      .paddingOuter(0.5);
  
  $: radiusScale = scaleSqrt()
    .domain([20, 100])
    .range(width < 568 ? [2 , 6] : [4, 8]);
  
  import AxisX from "$components/AxisX.svelte";
  import AxisY from "$components/AxisY.svelte";
  import Legend from "$components/Legend.svelte";
  import Tooltip from "$components/Tooltip.svelte";

  let hovered;

  import { fade } from "svelte/transition";

  let hoveredContinent;
</script>

<h1>La edad de los líderes mundiales</h1>
<h2>Haz click dentro del gráfico para agrupar por tipo de democracia</h2>
<Legend {colorScale} bind:hoveredContinent />
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div class='chart-container'
  bind:clientWidth={width}
  on:click={() => {
    groupByContinent = !groupByContinent; hovered = null}}>
  <svg {width} {height}>
    <g class="inner-chart" transform="translate({margin.left}, {margin.top})"
    on:mouseleave={() => {
      hovered = null;
    }}>
      <AxisX {xScale} height={innerHeight} width={innerWidth} />
      <AxisY {yScale} {width} {groupByContinent} />
      {#each nodes as node}
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <circle in:fade={{ delay: 400 }}
          cx={node.x}
          cy={node.y}
          r={radiusScale(node.Age)}
          fill={colorScale(node.DemocracyType)}
          stroke={hovered || hoveredContinent
            ? hovered === node || hoveredContinent === node.DemocracyType
            ? "black"
            : "transparent"
            : "#00000090"}
          opacity={hovered || hoveredContinent
            ? hovered === node || hoveredContinent === node.DemocracyType
            ? 1
            : 0.3
            : 1}
          on:mouseover={() => {
            hovered = node;
          }}
          on:focus={() => {
            hovered = node;
          }}
          tabindex="0"
          on:click={(event) => {
            event.stopPropagation();
          }}
        />
      {/each}
    </g>
  </svg>
    {#if hovered}
      <Tooltip data={hovered} {colorScale} {width}/>
    {/if}
</div>

<style>
  :global(.tick text, .axis-title) {
    font-size: 12px;
    font-weight: 400;
    fill: hsla(212, 10%, 53%, 1);
    user-select: none;
  }

  :global(.axos-title) {
    font-size: 14px;
  }

  h1 {
    font-size: 20px;
    margin-bottom: 3px;
    font-weight: 600;
    text-align: center;
  }

  h2 {
    font-size: 15px;
    margin-bottom: 6px;
    font-weight: 400;
    font-style: italic;
    text-align: center;
    position: relative;
  }

  h2::before {
    content: ' 👆'; /* Símbolo de clic, puedes cambiarlo a otro */
    font-style: normal; /* Asegura que el símbolo no sea en cursiva */
    margin-right: 2px; /* Espacio entre el texto y el símbolo */
  }

  circle {
    transition: stroke 300ms ease, opacity 300ms ease;
  }
</style>
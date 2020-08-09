<template>
  <div id="container">
    <div id="charts"></div>
    <div class="control-group">
      <button @click="filter($event)" :class="{selected: selectedFilter === 'Retail'}">Retail</button>
      <button @click="filter($event)" :class="{selected: selectedFilter === 'Gas'}">Gas</button>
      <button @click="filter($event)" :class="{selected: selectedFilter === 'Dining'}">Dining</button>
      <button @click="filter($event)" :class="{selected: selectedFilter === 'Clear'}">Clear</button>
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3';

export default {
  name: "DataFilter",
  data() {
    return {
      data: [
        {expense: 10, category: "Retail"},
        {expense: 15, category: "Gas"},
        {expense: 30, category: "Retail"},
        {expense: 50, category: "Dining"},
        {expense: 80, category: "Gas"},
        {expense: 65, category: "Retail"},
        {expense: 55, category: "Gas"},
        {expense: 30, category: "Dining"},
        {expense: 20, category: "Retail"},
        {expense: 10, category: "Dining"},
        {expense: 8, category: "Gas"}
      ],
      selectedFilter: ''
    }
  },
  methods: {
    render(category) {
      let bars = d3.select('#charts').selectAll('div.h-bar').data(this.data);

      bars.enter().append('div').attr('class', 'h-bar').style('width', function (d) {
        return (d.expense * 5) + 'px';
      }).append('span').text(function (d) {
        return d.category;
      });

      d3.selectAll('div.h-bar').attr('class', 'h-bar');

      bars.filter(function (d) {
        return d.category === category;
      }).classed('selected', true);

      bars.exit().remove();
    },
    filter(ev) {
      this.selectedFilter = ev.target.textContent;
      this.render(ev.target.textContent);
    }
  },
  mounted() {
    this.render();
  }
}
</script>

<style scoped>
  .selected {
    border: 2px solid #000000;
  }
</style>

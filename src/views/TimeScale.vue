<template>
  <div id="container">
    <div id="time">
      <span>Linear Time Progression<br></span>
      <span>Mapping [01/01/2016, 12/31/2016] to [0, 1200]</span>
      <br><br>
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3';

export default {
  name: "TimeScale",
  data() {
    return {
      data: [],
      start: new Date(2016, 0, 1),
      end: new Date(2016, 12, 31),
      timeScale: null
    }
  },
  methods: {
    render() {
      d3.select('#time').selectAll('div.fixed-cell').data(this.data).enter().append('div').classed('fixed-cell', true).style('height', d => {
        return (this.timeScale(d) + 20) + 'px';
      }).html(d => {
        return d3.timeFormat('%x')(d) + '<br>' + this.timeScale(d) + 'px';
      });
    }
  },
  mounted() {
    for (let i=0; i<12; i++) {
      let date = new Date(this.start);
      date.setMonth(date.getMonth() + i);
      this.data.push(date);
    }
    this.timeScale = d3.scaleTime().domain([this.start, this.end]).rangeRound([1, 1200]);
    this.render();
  }
}
</script>

<style scoped>

</style>

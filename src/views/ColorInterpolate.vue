<template>
  <div id="container">
    <div id="color">
      <span> Color Interpolation</span>
      <br>
    </div>
    <div id="color-diverge">
      <span>Color Interpolation</span>
      <br>
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3';

export default {
name: "ColorInterpolate",
  data() {
    return {
      data: []
    };
  },
  methods: {
    render(scale, selector) {
      let cells = d3.select(selector).selectAll('div.cell').data(this.data);
      cells.enter().append('div').classed('cell', true).style('display', 'inline-block').style('background-color', function (d) {
        return scale(d);
      }).append('span').text(function (d, i) {
        return d.toString() + i.toString();
      });
    }
  },
  mounted() {
    for(let i=1; i<=10; i++) this.data.push(i);
    this.render(d3.scaleLinear().domain([0, 10]).range(['white', 'red']), '#color');
    this.render((function (pivot) {
      return d3.scaleLinear().domain([0, pivot, 10]).range(['white', '#416931', 'white']);
    })(5), '#color-diverge');
  }
}
</script>

<style scoped>

</style>

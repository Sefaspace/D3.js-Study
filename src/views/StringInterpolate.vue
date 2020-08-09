<template>
  <div id="container">
    <div id="font">
      <span>Font Interpolation</span>
      <br>
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3';

export default {
  name: "StringInterpolate",
  data() {
    return {
      data: []
    };
  },
  methods: {
    render(scale, selector) {
      let cells = d3.select(selector).selectAll('div.cell').data(this.data);
      cells.enter().append('div').classed('cell', true).style('display', 'inline-block').append('span').style('font', function (d) {
        return scale(d);
      }).text(function (d, i) {
        return d.toString() + i.toString();
      });
    }
  },
  mounted() {
    for(let i=1; i<=10; i++) this.data.push(i);
    this.render(d3.scaleLinear().domain([0, 10]).range([
        'italic bold 12px/30px Georgia, serif',
        'italic bold 120px/180px Georgia, serif'
    ]), '#font');
  }
}
</script>

<style scoped>

</style>

<template>
  <div id="container">
    <h5>n</h5>
    <div id="linear"></div>
    <h5>1 &lt;= a*n + b &lt;= 20</h5>
    <div id="linear-capped"></div>
    <h5>n^2</h5>
    <div id="pow"></div>
    <h5>1 &lt;= a * n^2 + b &lt;= 10</h5>
    <div id="pow-capped"></div>
    <h5>log(n)</h5>
    <div id="log"></div>
    <h5>1 &lt;= a * log(n) + b &lt;= 10</h5>
    <div id="log-capped"></div>
  </div>
</template>

<script>
import * as d3 from 'd3';

export default {
  name: "LinearScale",
  data() {
    return {
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      linear: d3.scaleLinear().domain([1, 10]).range([1, 10]),
      linearCapped: d3.scaleLinear().domain([1, 10]).range([1, 20]),
      pow: d3.scalePow().exponent(2),
      powCapped: d3.scalePow().exponent(2).domain([1, 10]).rangeRound([1, 10]),
      log: d3.scaleLog(),
      logCapped: d3.scaleLog().domain([1, 10]).rangeRound([1, 10])
    }
  },
  methods: {
    render(scale, selector) {
      d3.select(selector).selectAll('div').data(this.data).enter().append('div').classed('cell', true).style('display', 'inline-block').text(function (d) {
        return d3.format('.2')(scale(d), 2)
      });
    }
  },
  mounted() {
    this.render(this.linear, '#linear');
    this.render(this.linearCapped, '#linear-capped');
    this.render(this.pow, '#pow');
    this.render(this.powCapped, '#pow-capped');
    this.render(this.log, '#log');
    this.render(this.logCapped, '#log-capped');
  }
}
</script>

<style scoped>
  #container div {
    margin-bottom: 5px;
  }

  #container h5 {
    margin: 0;
  }
</style>

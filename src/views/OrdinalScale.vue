<template>
  <div id="container">
    <div id="alphabet">
      <span>Ordinal Scale With Alphabet</span><br>
      <span>Mapping [1...10] to ['a'...'j']</span>
      <br>
    </div>
    <div id="category10">
      <span>Ordinal Color Scale Category 10</span><br>
      <span>Mapping [1...10] to category 10 colors</span>
      <br>
    </div>
    <div id="category20">
      <span>Ordinal Color Scale Category 20</span><br>
      <span>Mapping [1...10] to category 20 colors</span>
      <br>
    </div>
    <div id="category20b">
      <span>Ordinal Color Scale Category 20b</span><br>
      <span>Mapping [1...10] to category 20b colors</span>
      <br>
    </div>
    <div id="category20c">
      <span>Ordinal Color Scale Category 20c</span><br>
      <span>Mapping [1...10] to category 20c colors</span>
      <br>
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3';

export default {
  name: "OrdinalScale",
  data() {
    return {
      data: []
    };
  },
  methods: {
    render(scale, seletor) {
      let cells = d3.select(seletor).selectAll('div.cell').data(this.data);

      cells.enter().append('div').classed('cell', true).style('display', 'inline-block').style('background-color', function (d) {
        return scale(d).indexOf('#') >= 0 ? scale(d) : 'white';
      }).text(function (d) {
        return scale(d);
      });

    }
  },
  mounted() {
    for (let i = 1; i <= 10; i++) this.data.push(i);
    let alphabet = d3.scaleOrdinal().domain(this.data).range(['a', 'b', 'c', 'd', '3', 'f', 'g', 'h', 'i', 'j']);
    this.render(alphabet, '#alphabet');
    console.log(d3.schemeCategory20, d3);
    this.render(d3.scaleOrdinal(d3.schemeCategory10), '#category10');
    this.render(d3.scaleOrdinal(d3.schemeAccent), '#category20');
    this.render(d3.scaleOrdinal(d3.schemeBlues[9]), '#category20b');
    this.render(d3.scaleOrdinal(d3.schemeDark2), '#category20c');
  }
}
</script>

<style scoped lang="scss">
#container div {
  margin-bottom: 10px;
}
</style>

<template>
  <div id="container">
    <div id="charts"></div>
    <div class="control-group">
      <button @click="sort(compareByExpense)">
        Sort by Expense
      </button>
      <button @click="sort(compareByCategory)">
        Sort by Category
      </button>
      <button @click="sort()">
        Reset
      </button>
    </div>
  </div>
</template>

<script>
import * as d3 from 'd3';

export default {
  name: "DataSort",
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
      ]
    }
  },
  methods: {
    render(comparator) {
      let bars = d3.select('#charts').selectAll('div.h-bar').data(this.data);

      bars.enter().append('div').attr('class', 'h-bar').append('span');

      d3.selectAll('div.h-bar').style('width', function (d) {
        return (d.expense * 5) + 'px';
      }).select('span').text(function (d) {
        return d.category;
      });

      if (comparator) {
        bars.sort(comparator);
      }

      bars.exit().remove();
    },
    compareByExpense(a, b) {
      return a.expense < b.expense ? -1 : 1;
    },
    compareByCategory(a, b) {
      return a.category < b.category ? -1 : 1;
    },
    sort(comparator) {
      this.render(comparator);
    }
  },
  mounted() {
    this.render();
  }
}
</script>

<style scoped>

</style>

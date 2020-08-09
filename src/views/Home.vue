<template>
  <div>
    <section>
      <h2>Basic</h2>
      <p>
        <router-link tag="span" to="/data-filter">Data Filter</router-link>
        <router-link tag="span" to="/data-sort">Data Sort</router-link>
        <router-link tag="span" to="/linear-scale">Linear Scale</router-link>
        <router-link tag="span" to="/time-scale">Time Scale</router-link>
        <router-link tag="span" to="/ordinal-scale">Ordinal Scale</router-link>
        <router-link tag="span" to="/string-interpolate">String Interpolate</router-link>
        <router-link tag="span" to="/color-interpolate">Color Interpolate</router-link>
      </p>
    </section>
    <section>
      <h2>Case</h2>

    </section>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
h2, p {
  text-align: center;
}

p span {
  padding: 2px 5px;
  margin-right: 10px;
  border: 1px solid #2c3e50;
  border-radius: 2px;
  color: darkgreen;

  &:hover {
    border: 1px solid #42b983;
    background: #2c3e50;
    color: #42b983;
    cursor: pointer;
  }
}
</style>

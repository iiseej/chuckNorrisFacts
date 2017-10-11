<template lang="html">
  <div class="searchBar">
    <span class="advice">Remember Kid, you never really search for a fact, Chuck Norris may give it to you...or not</span>
    <div class="search-input">
      <el-input placeholder="beg Chuck for a fact" v-model="query">
        <el-button class="search-button" slot="append" icon="search" @click.native="searchFacts"></el-button>
      </el-input>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Search',
  data: () =>({
    query: ''
  }),
  methods: {
    ...mapActions(['LOAD_FACTS_LIST']),
    searchFacts() {
      this.LOAD_FACTS_LIST(this.query)
    }
  },
  computed: {
    ...mapGetters(['facts']),
  },
}
</script>

<style>
.searchBar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: hsla(274, 25%, 24%, 0.89);
}
.advice {
  margin-left: 5px;
  position: fixed;
  left: 0;
  font-size: 10px;
  font-style: italic;
}
i{
  color: #542b1c;
}
.search-input{
  margin: 5px 0px 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

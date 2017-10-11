<template>
  <div class="page">
    <search></search>
    <chuck></chuck>
  </div>
</template>

<script>
import Chuck from 'components/Chuck'
import Search from 'components/Search'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Chuck,
    Search
  },
  data:() => ({
  }),
  methods: {
  },
  computed: {
    ...mapGetters(['facts'])
  }
}
</script>
<style>

</style>

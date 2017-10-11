<template>
  <div class="facts" v-if="display">
    <div><span class="fact-index"> Fact : {{ index + 1 }} / {{ facts.length }}</span></div>
    <div><p><vue-typer :text='facts[index].value' :repeat='0'></vue-typer></p></div>
    <div>
      <el-button  slot="append" icon="arrow-left" @click.native="previousFact"></el-button>
      <el-button  slot="append" icon="arrow-right" @click.native="nextFact"></el-button>
  </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Chuck',
  data: () =>({
    index: 0,
    display: true
  }),
  methods: {
    nextFact() {
      if (this.facts.length > 0 && this.index < this.facts.length - 1) {
        this.index += 1
      }
    },
    previousFact() {
      if (this.facts.length > 0 && this.index >= 1) {
        this.index -= 1
      }
    }
  },
  computed: {
    ...mapGetters(['facts']),
  },
}
</script>

<style>
.facts{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 70%;
}
.fact-index {
  color: #542a1e;
}
.vue-typer {
  font-family: Roboto;
  font-size: 20px;
}

.vue-typer .custom.char {
  color: white;
  background-color: hsla(274, 25%, 24%, 0.89);
}
</style>

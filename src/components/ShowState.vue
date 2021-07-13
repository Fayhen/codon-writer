<template>
  <div class="hello">
    <h3>
      This is a development component intended to render the current stored
      state.
    </h3>
    <h1>Raw user input:</h1>
    <p> {{ state.userInput }}</p>
    <h1>Parsed user input:</h1>
    <p> {{ state.parsedInput }}</p>
    <h1>Natural amino acids</h1>
    <ul>
      <li v-for="aminoacid in state.commonAminoacids" :key="aminoacid.name">
        <strong>{{ aminoacid.name }}</strong>
        <p>{{ aminoacid.abbreviation }}</p>
        <p>{{ aminoacid.codons }}</p>
        <div v-html="aminoacid.htmlFormula" />
        <p>{{ aminoacid.iupac }}</p>
        <img :src="aminoacid.skeleton" alt="Skeletal molecular structure" />
        <p>
          <a :href="aminoacid.pubchem" target="_blank" rel="noopener noreferrer">PubChem</a>
        </p>
        <p>
          <a :href="aminoacid.wikipedia" target="_blank" rel="noopener noreferrer">Wikipedia</a>
        </p>
      </li>
    </ul>
    <h1>Rare amino acids</h1>
    <ul>
      <li>
        <strong>{{ state.selenocysteine.name }}</strong>
        <p>{{ state.selenocysteine.abbreviation }}</p>
        <p>{{ state.selenocysteine.codons }}</p>
        <div v-html="state.selenocysteine.htmlFormula" />
        <p>{{ state.selenocysteine.iupac }}</p>
        <img :src="state.selenocysteine.skeleton" alt="Skeletal molecular structure">
        <p>
          <a :href="state.selenocysteine.pubchem" target="_blank" rel="noopener noreferrer">PubChem</a>
        </p>
        <p>
          <a :href="state.selenocysteine.wikipedia" target="_blank" rel="noopener noreferrer">Wikipedia</a>
        </p>
      </li>
      <li>
        <strong>{{ state.pyrrolysine.name }}</strong>
        <p>{{ state.pyrrolysine.abbreviation }}</p>
        <p>{{ state.pyrrolysine.codons }}</p>
        <div v-html="state.pyrrolysine.htmlFormula" />
        <p>{{ state.pyrrolysine.iupac }}</p>
        <img :src="state.pyrrolysine.skeleton" alt="Skeletal molecular structure">
        <p><a :href="state.pyrrolysine.pubchem" target="_blank" rel="noopener noreferrer">PubChem</a></p>
        <p><a :href="state.pyrrolysine.wikipedia" target="_blank" rel="noopener noreferrer">Wikipedia</a></p>
      </li>
    </ul>
    <h3>Classic STOP codons</h3>
    <ul>
      <li
        v-for="codon in state.classicStopCodons"
        :key="codon"
        style="margin-left: 3px margin-right: 3px"
      >
        {{ codon }}
      </li>
    </ul>
    <h3>STOP codons excluding Selenocysteine and Pyrrolysine</h3>
    <ul>
      <li
        v-for="codon in state.ununsedStopCodons"
        :key="codon"
        style="margin-left: 3px margin-right: 3px"
      >
        {{ codon }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import state from "@/store/state";

@Options({
  name: "ShowState",
})
export default class ShowState extends Vue {
  state = state;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 0 3em 0;
}
a {
  color: #42b983;
}
img {
  height: 7rem;
  width: auto;
}
</style>

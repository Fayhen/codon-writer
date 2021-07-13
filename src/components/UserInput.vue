<template>
<div>
  <form action="/">
    <label for="user-input">Enter your text below:</label>
    <br><input
      name="User input"
      id="user-input"
      placeholder="Your input here"
      v-model="state.userInput"
      @keyup="setParsedInput(state.userInput)"
      />
  </form>
</div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import { setParsedInput } from "@/store/methods";
import state from "@/store/state";

@Options({
  name: "UserInput",
})
export default class UserInput extends Vue {
  state = state;
  setParsedInput = setParsedInput;
}

</script>

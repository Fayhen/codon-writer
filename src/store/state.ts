import { reactive } from "vue";
import { State } from "@/assets/interfaces";
import { commonAminoacids, selenocysteine, pyrrolysine, ambiguities } from "@/assets/genetics";

const state = reactive<State>({
  commonAminoacids: commonAminoacids,
  selenocysteine: selenocysteine,
  pyrrolysine: pyrrolysine,
  ambiguities: ambiguities,
  classicStopCodons: ["UAA", "UGA", "UAG"],
  ununsedStopCodons: ["UAA"],
  settings: {
    useSelenocysteine: false,
    usePyrrolysine: false,
    useAmbiguities: false,
  },
  availableAminos: Object.keys(commonAminoacids),
  userInput: "",
  parsedInput: [],
});

export { state as default };

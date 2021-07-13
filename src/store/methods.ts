import { parseUserInput } from "@/assets/parsers";
import state from "./state";

export function setParsedInput(rawInput: string) {
    const parsedInput = parseUserInput(rawInput);
    state.parsedInput = parsedInput;
}

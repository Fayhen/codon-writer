export function parseUserInput(input: string): string[]  {
    const sanitized = input.normalize("NFD").toUpperCase().match(/([a-zA-Z])/g);
    const parsedInput = sanitized ? sanitized : [""];
    return parsedInput;
}

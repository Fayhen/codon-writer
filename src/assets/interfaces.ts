export interface Aminoacid {
  name: string;
  abbreviation: string;
  iupac: string;
  codons: string[];
  htmlFormula: string;
  skeleton: string;
  pubchem: string;
  wikipedia: string;
  notes?: string;
  letter?: string;
}

export interface AminoAlphabet {
  [aminoacid: string]: Aminoacid;
}

export interface AmbiguityCode {
  abbreviation: string;
  aminoacids: string[];
}

export interface Ambiguities {
  [code: string]: AmbiguityCode;
}

export interface Settings {
  useSelenocysteine: boolean;
  usePyrrolysine: boolean;
  useAmbiguities: boolean;
}

export interface State {
  commonAminoacids: AminoAlphabet;
  selenocysteine: Aminoacid;
  pyrrolysine: Aminoacid;
  ambiguities: Ambiguities;
  classicStopCodons: string[];
  ununsedStopCodons: string[];
  availableAminos: string[];
  settings: Settings;
  userInput: string;
  parsedInput: string[];
}

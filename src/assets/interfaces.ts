export interface Aminoacid {
  name: string,
  abbreviation: string,
  iupac: string,
  codons: string[],
  htmlFormula: string,
  skeleton: string,
  pubchem: string,
  wikipedia: string,
  notes?: string,
  letter?: string
}

export interface AminoAlphabet {
  [aminoacid: string]: Aminoacid
}

export interface AmbiguityCode {
  abbreviation: string,
  aminoacids: string[]
}

export interface Ambiguities {
  [code: string]: AmbiguityCode
}

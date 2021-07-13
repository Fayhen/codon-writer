import { AminoAlphabet, Aminoacid, Ambiguities } from "@/assets/interfaces";

export const commonAminoacids: AminoAlphabet = {
  a: {
    name: "Alanine",
    abbreviation: "Ala",
    iupac: "(2S)-2-aminopropanoic acid",
    codons: ["GCU", "GCC", "GCA,", "GCG"],
    htmlFormula: "C<sub>3</sub>H<sub>7</sub>NO<sub>2</sub>",
    skeleton:
      "https://upload.wikimedia.org/wikipedia/commons/9/90/L-Alanin_-_L-Alanine.svg",
    pubchem: "https://pubchem.ncbi.nlm.nih.gov/compound/Alanine",
    wikipedia: "https://en.wikipedia.org/wiki/Alanine",
  },
  c: {
    name: "Cysteine",
    abbreviation: "Cys",
    iupac: "(2R)-2-amino-3-sulfanylpropanoic acid",
    codons: ["UGU", "UGC"],
    htmlFormula: "C<sub>3</sub>H<sub>7</sub>NO<sub>2</sub>S",
    skeleton:
      "https://upload.wikimedia.org/wikipedia/commons/1/1a/L-Cystein_-_L-Cysteine.svg",
    pubchem: "https://pubchem.ncbi.nlm.nih.gov/compound/Cysteine",
    wikipedia: "https://en.wikipedia.org/wiki/Cysteine",
  },
  d: {
    name: "Aspartic acid",
    abbreviation: "Asp",
    iupac: "(2S)-2-aminobutanedioic acid",
    codons: ["GAU", "GAC"],
    htmlFormula: "C<sub>4</sub>H<sub>7</sub>NO<sub>4</sub>",
    skeleton:
      "https://upload.wikimedia.org/wikipedia/commons/c/ce/L-Asparagins%C3%A4ure_-_L-Aspartic_acid.svg",
    pubchem: "https://pubchem.ncbi.nlm.nih.gov/compound/Aspartic-acid",
    wikipedia: "https://en.wikipedia.org/wiki/Aspartic_acid",
  },
  e: {
    name: "Glutamic acid",
    abbreviation: "Glu",
    iupac: "(2S)-2-Aminopentanedioic acid",
    codons: ["GAA", "GAG"],
    htmlFormula: "C<sub>5</sub>H<sub>9</sub>NO<sub>4</sub>",
    skeleton:
      "https://upload.wikimedia.org/wikipedia/commons/d/db/L-Glutamins%C3%A4ure_-_L-Glutamic_acid.svg",
    pubchem: "https://pubchem.ncbi.nlm.nih.gov/compound/33032",
    wikipedia: "https://en.wikipedia.org/wiki/Glutamic_acid",
  },
  f: {
    name: "Phenylalanine",
    abbreviation: "Phe",
    iupac: "(2S)-2-amino-3-phenylpropanoic acid",
    codons: ["UUU", "UUC"],
    htmlFormula: "C<sub>9</sub>H<sub>11</sub>NO<sub>2</sub>",
    skeleton:
      "https://upload.wikimedia.org/wikipedia/commons/7/7a/L-Phenylalanin_-_L-Phenylalanine.svg",
    pubchem: "https://pubchem.ncbi.nlm.nih.gov/compound/6140",
    wikipedia: "https://en.wikipedia.org/wiki/Phenylalanine",
  },
  g: {
    name: "Glycine",
    abbreviation: "Gly",
    iupac: "2-aminoacetic acid",
    codons: ["GGU", "GGC", "GGA", "GGG"],
    htmlFormula: "C<sub>2</sub>H<sub>5</sub>NO<sub>2</sub>",
    skeleton:
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Glycine-2D-skeletal.png",
    pubchem: "https://pubchem.ncbi.nlm.nih.gov/compound/750",
    wikipedia: "https://en.wikipedia.org/wiki/Glycine",
  },
  h: {
    name: "Histidine",
    abbreviation: "His",
    iupac: "(2S)-2-amino-3-(1H-imidazol-5-yl)propanoic acid",
    codons: ["CAU", "CAC"],
    htmlFormula: "C<sub>6</sub>H<sub>9</sub>N<sub>3</sub>O<sub>2</sub>",
    skeleton:
      "https://upload.wikimedia.org/wikipedia/commons/c/c0/L-Histidine_physiological.svg",
    pubchem: "https://pubchem.ncbi.nlm.nih.gov/compound/6274",
    wikipedia: "https://en.wikipedia.org/wiki/Histidine",
  },
  i: {
    name: "Isoleucine",
    abbreviation: "Ile",
    iupac: "(2S,3S)-2-amino-3-methylpentanoic acid",
    codons: ["AUU", "AUC", "AUA"],
    htmlFormula: "C<sub>6</sub>H<sub>13</sub>NO<sub>2</sub>",
    skeleton:
      "https://upload.wikimedia.org/wikipedia/commons/4/46/L-Isoleucin_-_L-Isoleucine.svg",
    pubchem: "https://pubchem.ncbi.nlm.nih.gov/compound/6306",
    wikipedia: "https://en.wikipedia.org/wiki/Isoleucine",
  },
  k: {
    name: "Lysine",
    abbreviation: "Lys",
    iupac: "(2S)-2,6-diaminohexanoic acid",
    codons: ["AAA", "AAG"],
    htmlFormula: "C<sub>6</sub>H<sub>14</sub>N<sub>2</sub>O<sub>2</sub>",
    skeleton:
      "https://upload.wikimedia.org/wikipedia/commons/8/88/L-Lysin_-_L-Lysine.svg",
    pubchem: "https://pubchem.ncbi.nlm.nih.gov/compound/5962",
    wikipedia: "https://en.wikipedia.org/wiki/Lysine",
  },
  l: {
    name: "Leucine",
    abbreviation: "Leu",
    iupac: "(2S)-2-amino-4-methylpentanoic acid",
    codons: ["CUU", "CUC", "CUA", "CUG", "UUA", "UUG"],
    htmlFormula: "C<sub>6</sub>H<sub>13</sub>NO<sub>2</sub>",
    skeleton:
      "https://upload.wikimedia.org/wikipedia/commons/4/4d/L-Leucine.svg",
    pubchem: "https://pubchem.ncbi.nlm.nih.gov/compound/6106",
    wikipedia: "https://en.wikipedia.org/wiki/Leucine",
  },
  m: {
    name: "Methionine",
    abbreviation: "Met",
    iupac: "(2S)-2-amino-4-methylsulfanylbutanoic acid",
    codons: ["AUG"],
    htmlFormula: "C<sub>5</sub>H<sub>11</sub>NO<sub>2</sub>S",
    skeleton:
      "https://upload.wikimedia.org/wikipedia/commons/2/23/Methionin_-_Methionine.svg",
    pubchem: "https://pubchem.ncbi.nlm.nih.gov/compound/6137",
    wikipedia: "https://en.wikipedia.org/wiki/Methionine",
  },
  n: {
    name: "Asparagine",
    abbreviation: "Asn",
    iupac: "(2S)-2,4-diamino-4-oxobutanoic acid",
    codons: ["AAU", "AAC"],
    htmlFormula: "C<sub>4</sub>H<sub>8</sub>N<sub>2</sub>O<sub>3</sub>",
    skeleton:
      "https://upload.wikimedia.org/wikipedia/commons/0/0c/L-Asparagin_-_L-Asparagine.svg",
    pubchem: "https://pubchem.ncbi.nlm.nih.gov/compound/Asparagine",
    wikipedia: "https://en.wikipedia.org/wiki/Asparagine",
  },
  p: {
    name: "Proline",
    abbreviation: "Pro",
    iupac: "(2S)-pyrrolidine-2-carboxylic acid",
    codons: ["CCU", "CCC", "CCA", "CCG"],
    htmlFormula: "C<sub>5</sub>H<sub>9</sub>NO<sub>2</sub>",
    skeleton:
      "https://upload.wikimedia.org/wikipedia/commons/f/ff/Prolin_-_Proline.svg",
    pubchem: "https://pubchem.ncbi.nlm.nih.gov/compound/145742",
    wikipedia: "https://en.wikipedia.org/wiki/Proline",
  },
  q: {
    name: "Glutamine",
    abbreviation: "Gln",
    iupac: "(2S)-2,5-diamino-5-oxopentanoic acid",
    codons: ["GAA", "GAG"],
    htmlFormula: "C<sub>5</sub>H<sub>10</sub>N<sub>2</sub>O<sub>3</sub>",
    skeleton:
      "https://upload.wikimedia.org/wikipedia/commons/5/5d/L-Glutamin_-_L-Glutamine.svg",
    pubchem: "https://pubchem.ncbi.nlm.nih.gov/compound/5961",
    wikipedia: "https://en.wikipedia.org/wiki/Glutamine",
  },
  r: {
    name: "Arginine",
    abbreviation: "Arg",
    iupac: "(2S)-2-amino-5-(diaminomethylideneamino)pentanoic acid",
    codons: ["CGU", "CGC", "CGA", "CGG", "AGA", "AGG"],
    htmlFormula: "C<sub>6</sub>H<sub>14</sub>N<sub>4</sub>O<sub>2</sub>",
    skeleton:
      "https://upload.wikimedia.org/wikipedia/commons/f/f4/Arginin_-_Arginine.svg",
    pubchem: "https://pubchem.ncbi.nlm.nih.gov/compound/6322",
    wikipedia: "https://en.wikipedia.org/wiki/Arginine",
  },
  s: {
    name: "Serine",
    abbreviation: "Ser",
    iupac: "(2S)-2-amino-3-hydroxypropanoic acid",
    codons: ["UCU", "UCC", "UCA", "UCG", "AGU", "AGC"],
    htmlFormula: "C<sub>3</sub>H<sub>7</sub>NO<sub>3</sub>",
    skeleton:
      "https://upload.wikimedia.org/wikipedia/commons/b/b9/L-Serin_-_L-Serine.svg",
    pubchem: "https://pubchem.ncbi.nlm.nih.gov/compound/5951",
    wikipedia: "https://en.wikipedia.org/wiki/Serine",
  },
  t: {
    name: "Threonine",
    abbreviation: "Thr",
    iupac: "(2S,3R)-2-amino-3-hydroxybutanoic acid",
    codons: ["ACU", "ACC", "ACA", "ACG"],
    htmlFormula: "C<sub>4</sub>H<sub>9</sub>NO<sub>3</sub>",
    skeleton:
      "https://upload.wikimedia.org/wikipedia/commons/a/a0/L-Threonin_-_L-Threonine.svg",
    pubchem: "https://pubchem.ncbi.nlm.nih.gov/compound/6288",
    wikipedia: "https://en.wikipedia.org/wiki/Threonine",
  },
  v: {
    name: "Valine",
    abbreviation: "Val",
    iupac: "(2S)-2-amino-3-methylbutanoic acid",
    codons: ["GUU", "GUC", "GUA", "GUG"],
    htmlFormula: "C<sub>5</sub>H<sub>11</sub>NO<sub>2</sub>",
    skeleton:
      "https://upload.wikimedia.org/wikipedia/commons/3/3d/L-valine-2D-skeletal.png",
    pubchem: "https://pubchem.ncbi.nlm.nih.gov/compound/6287",
    wikipedia: "https://en.wikipedia.org/wiki/Valine",
  },
  w: {
    name: "Tryptophan",
    abbreviation: "Trp",
    iupac: "(2S)-2-amino-3-(1H-indol-3-yl)propanoic acid",
    codons: ["UGG"],
    htmlFormula: "C<sub>11</sub>H<sub>12</sub>N<sub>2</sub>O<sub>2</sub>",
    skeleton:
      "https://upload.wikimedia.org/wikipedia/commons/c/c1/L-Tryptophan_-_L-Tryptophan.svg",
    pubchem: "https://pubchem.ncbi.nlm.nih.gov/compound/6305",
    wikipedia: "https://en.wikipedia.org/wiki/Tryptophan",
  },
  y: {
    name: "Tyrosine",
    abbreviation: "Tyr",
    iupac: "(2S)-2-amino-3-(4-hydroxyphenyl)propanoic acid",
    codons: ["UAU", "UAC"],
    htmlFormula: "C<sub>9</sub>H<sub>11</sub>NO<sub>3</sub>",
    skeleton:
      "https://upload.wikimedia.org/wikipedia/commons/4/40/L-Tyrosin_-_L-Tyrosine.svg",
    pubchem: "https://pubchem.ncbi.nlm.nih.gov/compound/6057",
    wikipedia: "https://en.wikipedia.org/wiki/Tyrosine",
  },
};

export const  selenocysteine: Aminoacid = {
  name: "Selenocysteine",
  abbreviation: "Sec",
  letter: "u",
  iupac: "(2R)-2-amino-3-selanylpropanoic acid",
  codons: ["UGA"],
  htmlFormula: "C<sub>3</sub>H<sub>6</sub>NO<sub>2</sub>Se",
  skeleton: "https://upload.wikimedia.org/wikipedia/commons/3/3a/L-selenocysteine-2D-skeletal.png",
  pubchem: "https://pubchem.ncbi.nlm.nih.gov/compound/6326983",
  wikipedia: "https://en.wikipedia.org/wiki/Selenocysteine",
  notes: `'Selenocysteine·is·a·rare·yet·essential·amino·acid·encoded·by·the·"UGA"·codon·in·the·presence·of·a·selenocysteine·insertion·sequence·in·the·mRNA.·This·triplet·would·naturally·function·as·a·stop·codon·otherwise.'`,
};

export const pyrrolysine: Aminoacid = {
  name: "Pyrrolysine",
  abbreviation: "Pyl",
  letter: "o",
  iupac:
    "(2S)-2-amino-6-[[(2R,3R)-3-methyl-3,4-dihydro-2H-pyrrole-2-carbonyl]amino]hexanoic acid",
  codons: ["UAG"],
  htmlFormula: "C<sub>12</sub>H<sub>21</sub>N<sub>3</sub>O<sub>3</sub>",
  skeleton:
    "https://upload.wikimedia.org/wikipedia/commons/7/71/Pyrrolysine.svg",
  pubchem: "https://pubchem.ncbi.nlm.nih.gov/compound/5460671",
  wikipedia: "https://en.wikipedia.org/wiki/Pyrrolysine",
};

export const ambiguities: Ambiguities = {
  b: {
    abbreviation: "Asx",
    aminoacids: ["n", "d"],
  },
  z: {
    abbreviation: "Glx",
    aminoacids: ["q", "e"],
  },
};

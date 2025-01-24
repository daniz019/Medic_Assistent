import { Disease, type ProcessedResult } from "../types";
import { diseases } from "../data/diseases";
import { synonyms } from "../data/synonyms";

function normalizeSymptoms(symptoms: string[]): string[] {
  return symptoms.map((symptom) => {
    for (const [standardTerm, synonymsList] of Object.entries(synonyms)) {
      if (synonymsList.includes(symptom)) {
        return standardTerm;
      }
    }
    return symptom;
  });
}

function extractKeywords(input: string): string[] {
  const cleanedInput = input.toLowerCase().replace(/[.,!?]/g, "");
  const words = cleanedInput.split(/\s+/);
  const keywords: string[] = [];

  for (const word of words) {
    if (synonyms[word]) {
      keywords.push(word);
    } else {
      for (const [standardTerm, synonymsList] of Object.entries(synonyms)) {
        if (synonymsList.includes(word)) {
          keywords.push(standardTerm);
          break;
        }
      }
    }
  }

  return keywords;
}

function hasValidSymptoms(userSymptoms: string[]): boolean {
  return userSymptoms.length > 0;
}

export function processSymptoms(age: number, gender: "male" | "female", symptoms: string): ProcessedResult[] | null {
  const userSymptoms = extractKeywords(symptoms);
  const normalizedUserSymptoms = normalizeSymptoms(userSymptoms);

  if (!hasValidSymptoms(normalizedUserSymptoms)) {
    return null;
  }

  const results: ProcessedResult[] = diseases.map((disease) => {
    const normalizedDiseaseSymptoms = normalizeSymptoms(disease.symptoms);
    const matchedSymptoms = normalizedDiseaseSymptoms.filter((s) => normalizedUserSymptoms.includes(s));

    const probability = (matchedSymptoms.length / normalizedDiseaseSymptoms.length) * 100;

    return {
      disease,
      probability,
    };
  });

  results.forEach((result) => {
    const diseaseName = result.disease.name;

    if (diseaseName === "COVID-19" && age > 60) {
      result.probability *= 1.2;
    }

    if (diseaseName === "Enxaqueca" && gender === "female") {
      result.probability *= 1.1;
    }

    if (diseaseName === "Osteoporose" && age > 50 && gender === "female") {
      result.probability *= 1.3;
    }

    if (diseaseName === "Câncer de Próstata" && age > 50 && gender === "male") {
      result.probability *= 1.5;
    }

    if (diseaseName === "Câncer de Mama" && age > 40 && gender === "female") {
      result.probability *= 1.4;
    }

    if (diseaseName === "Doença de Parkinson" && age > 60) {
      result.probability *= 1.2;
    }

    if (diseaseName === "Alzheimer" && age > 65) {
      result.probability *= 1.3;
    }

    if (diseaseName === "Hipertensão" && age > 40) {
      result.probability *= 1.2;
    }

    if (diseaseName === "Diabetes" && age > 45) {
      result.probability *= 1.2;
    }

    if (diseaseName === "Artrite Reumatoide" && gender === "female") {
      result.probability *= 1.1;
    }

    if (diseaseName === "Lúpus" && gender === "female") {
      result.probability *= 1.2;
    }

    if (diseaseName === "Fibromialgia" && gender === "female") {
      result.probability *= 1.1;
    }

    if (diseaseName === "Doença de Graves" && gender === "female") {
      result.probability *= 1.2;
    }

    if (diseaseName === "Doença de Addison" && gender === "female") {
      result.probability *= 1.1;
    }

    if (diseaseName === "Doença de Cushing" && gender === "female") {
      result.probability *= 1.1;
    }

    if (diseaseName === "Doença de Wilson" && age < 40) {
      result.probability *= 1.2;
    }

    if (diseaseName === "Doença de Kawasaki" && age < 5) {
      result.probability *= 1.5;
    }

    if (diseaseName === "Doença de Behçet" && gender === "male") {
      result.probability *= 1.1;
    }

    if (diseaseName === "Doença de Raynaud" && gender === "female") {
      result.probability *= 1.2;
    }

    if (diseaseName === "Doença de Menière" && age > 40) {
      result.probability *= 1.1;
    }

    if (diseaseName === "Gripe" && (age < 18 || age > 65)) {
      result.probability *= 1.1;
    }

    if (diseaseName === "Resfriado" && age < 18) {
      result.probability *= 1.1;
    }

    if (diseaseName === "Alergia" && age < 30) {
      result.probability *= 1.1;
    }

    if (diseaseName === "Sinusite" && age > 18) {
      result.probability *= 1.1;
    }

    if (diseaseName === "Rinite Alérgica" && age < 30) {
      result.probability *= 1.1;
    }

    if (diseaseName === "Bronquite" && (age < 18 || age > 65)) {
      result.probability *= 1.1;
    }

    if (diseaseName === "Asma" && age < 18) {
      result.probability *= 1.1;
    }

    if (diseaseName === "Pneumonia" && age > 65) {
      result.probability *= 1.2;
    }

    if (diseaseName === "Gastrite" && age > 30) {
      result.probability *= 1.1;
    }

    if (diseaseName === "Anemia" && gender === "female") {
      result.probability *= 1.1;
    }

    if (diseaseName === "Insuficiência Cardíaca" && age > 65) {
      result.probability *= 1.2;
    }

    if (diseaseName === "Infarto Agudo do Miocárdio" && age > 45) {
      result.probability *= 1.2;
    }

    if (diseaseName === "AVC (Acidente Vascular Cerebral)" && age > 65) {
      result.probability *= 1.2;
    }

    if (diseaseName === "Hepatite" && age > 30) {
      result.probability *= 1.1;
    }

    if (diseaseName === "Dengue" && age < 30) {
      result.probability *= 1.1;
    }

    if (diseaseName === "Zika" && age < 40) {
      result.probability *= 1.1;
    }

    if (diseaseName === "Chikungunya" && age > 30) {
      result.probability *= 1.1;
    }

    if (diseaseName === "Malária" && age < 30) {
      result.probability *= 1.1;
    }

    if (diseaseName === "Tuberculose" && age > 30) {
      result.probability *= 1.1;
    }

    if (diseaseName === "Câncer de Pulmão" && age > 65) {
      result.probability *= 1.2;
    }

    if (diseaseName === "HIV/AIDS" && age < 40) {
      result.probability *= 1.1;
    }

    if (diseaseName === "Hipotireoidismo" && gender === "female") {
      result.probability *= 1.1;
    }

    if (diseaseName === "Hipertireoidismo" && gender === "female") {
      result.probability *= 1.1;
    }

    if (diseaseName === "Esclerose Múltipla" && gender === "female") {
      result.probability *= 1.1;
    }

    if (diseaseName === "Epilepsia" && (age < 18 || age > 65)) {
      result.probability *= 1.1;
    }

    if (diseaseName === "Doença de Crohn" && age < 40) {
      result.probability *= 1.1;
    }

    if (diseaseName === "Colite Ulcerativa" && age < 40) {
      result.probability *= 1.1;
    }

    if (diseaseName === "Doença Celíaca" && age < 30) {
      result.probability *= 1.1;
    }

    if (diseaseName === "Doença de Lyme" && age > 30) {
      result.probability *= 1.1;
    }

    if (diseaseName === "Doença de Chagas" && age > 30) {
      result.probability *= 1.1;
    }

    if (diseaseName === "Leucemia" && (age < 18 || age > 65)) {
      result.probability *= 1.1;
    }

    if (diseaseName === "Linfoma" && age > 65) {
      result.probability *= 1.1;
    }

    if (diseaseName === "Melanoma" && age > 30) {
      result.probability *= 1.1;
    }

    if (diseaseName === "Psoríase" && age > 30) {
      result.probability *= 1.1;
    }

    if (diseaseName === "Eczema" && age < 18) {
      result.probability *= 1.1;
    }

    if (diseaseName === "Doença Renal Crônica" && age > 65) {
      result.probability *= 1.2;
    }

    if (diseaseName === "Pedras nos Rins" && age > 30) {
      result.probability *= 1.1;
    }

    if (diseaseName === "Gota" && age > 30) {
      result.probability *= 1.1;
    }

    if (diseaseName === "Doença de Paget" && age > 65) {
      result.probability *= 1.1;
    }

    if (diseaseName === "Doença de Huntington" && age > 30) {
      result.probability *= 1.1;
    }
  });

  return results.sort((a, b) => b.probability - a.probability).slice(0, 3);
}
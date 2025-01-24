export interface Disease {
  name: string
  symptoms: string[]
  description: string
}

export interface ProcessedResult {
  disease: Disease
  probability: number
}
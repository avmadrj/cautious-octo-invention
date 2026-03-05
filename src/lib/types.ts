export interface Resource {
  id: string
  title: string
  institution: string
  category: string
  type: string
  description: string
  link: string
  keywords?: string[]
}

export const CATEGORIES = [
  "Fundamentos do Direito Internacional",
  "História do Direito Internacional",
  "Tribunais Internacionais e Jurisprudência",
  "Tratados e Documentos Diplomáticos",
  "Organizações Internacionais",
  "Revistas Acadêmicas",
  "Bases de Dados Jurídicas",
  "Institutos de Pesquisa",
  "Materiais Didáticos"
] as const

export const RESOURCE_TYPES = [
  "Biblioteca",
  "Base de Dados",
  "Revista",
  "Coleção de Tratados",
  "Instituto de Pesquisa",
  "Arquivo Digital",
  "Tribunal",
  "Organização",
  "Recurso Educacional"
] as const

export type Category = typeof CATEGORIES[number]
export type ResourceType = typeof RESOURCE_TYPES[number]

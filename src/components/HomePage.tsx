import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ResourceCard } from "./ResourceCard"
import { Books, Scales, GraduationCap, Globe, ArrowRight } from "@phosphor-icons/react"
import type { Resource } from "@/lib/types"
import { CATEGORIES } from "@/lib/types"

interface HomePageProps {
  resources: Resource[]
  onCategoryClick: (category: string) => void
}

export function HomePage({ resources, onCategoryClick }: HomePageProps) {
  const featuredResources = resources.slice(0, 3)
  
  const categoryCount = CATEGORIES.reduce((acc, category) => {
    acc[category] = resources.filter(r => r.category === category).length
    return acc
  }, {} as Record<string, number>)

  return (
    <div className="space-y-12">
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent rounded-2xl -z-10" />
        <div className="p-8 md:p-12 space-y-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-xl">
              <Scales size={32} weight="fill" className="text-primary" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold text-primary">
                Ius Gentium UFSC
              </h1>
              <p className="text-lg text-muted-foreground mt-1">
                Biblioteca Digital de Pesquisa
              </p>
            </div>
          </div>
          
          <div className="max-w-3xl space-y-4">
            <h2 className="text-2xl font-semibold">
              Sobre o Grupo de Pesquisa
            </h2>
            <p className="text-lg leading-relaxed text-foreground/90">
              O Ius Gentium UFSC é um grupo de pesquisa dedicado ao estudo do direito internacional 
              e da história jurídica global, sediado na Universidade Federal de Santa Catarina. 
              Nossa biblioteca digital oferece acesso abrangente a recursos acadêmicos selecionados 
              para estudantes, pesquisadores e docentes interessados em direito internacional.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-semibold mb-2">O que há na Biblioteca</h2>
            <p className="text-muted-foreground">
              Coleções abrangentes organizadas por áreas de pesquisa
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "Bases de Dados Jurídicas",
              icon: Books,
              description: "Bancos de dados de pesquisa abrangentes e arquivos digitais",
              color: "text-blue-600"
            },
            {
              title: "Tribunais Internacionais",
              icon: Scales,
              description: "Decisões judiciais, jurisprudência e processos legais",
              color: "text-purple-600"
            },
            {
              title: "Revistas Acadêmicas",
              icon: GraduationCap,
              description: "Publicações revisadas por pares e artigos acadêmicos",
              color: "text-green-600"
            },
            {
              title: "Institutos de Pesquisa",
              icon: Globe,
              description: "Instituições líderes e centros acadêmicos ao redor do mundo",
              color: "text-orange-600"
            }
          ].map((item) => {
            const Icon = item.icon
            return (
              <Card 
                key={item.title}
                className="transition-all duration-300 hover:shadow-md hover:border-accent/30 cursor-pointer"
                onClick={() => onCategoryClick(item.title)}
              >
                <CardHeader>
                  <Icon size={32} weight="duotone" className={item.color} />
                  <CardTitle className="text-xl mt-2">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-semibold mb-2">Recursos em Destaque</h2>
            <p className="text-muted-foreground">
              Materiais essenciais para pesquisa em direito internacional
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <h2 className="text-3xl font-semibold mb-2">Explorar por Categoria</h2>
          <p className="text-muted-foreground">
            Explore nossa coleção completa de {resources.length} recursos
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {CATEGORIES.map((category) => (
            <Button
              key={category}
              variant="outline"
              className="h-auto py-4 px-6 justify-between hover:bg-accent/10 hover:border-accent transition-all group"
              onClick={() => onCategoryClick(category)}
            >
              <div className="flex flex-col items-start gap-1">
                <span className="font-medium text-base">{category}</span>
                <span className="text-xs text-muted-foreground">
                  {categoryCount[category] || 0} recursos
                </span>
              </div>
              <ArrowRight 
                size={20} 
                className="text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" 
              />
            </Button>
          ))}
        </div>
      </section>
    </div>
  )
}

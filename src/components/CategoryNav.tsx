import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { 
  Books, 
  Scales, 
  BookOpen, 
  Bank, 
  Gavel, 
  Globe, 
  GraduationCap,
  House
} from "@phosphor-icons/react"
import { CATEGORIES } from "@/lib/types"
import { cn } from "@/lib/utils"

interface CategoryNavProps {
  currentView: string
  onViewChange: (view: string) => void
}

import type { ElementType } from "react"

const categoryIcons: Record<string, ElementType> = {
  "Fundamentos do Direito Internacional": Scales,
  "História do Direito Internacional": BookOpen,
  "Tribunais Internacionais e Jurisprudência": Gavel,
  "Tratados e Documentos Diplomáticos": Books,
  "Organizações Internacionais": Globe,
  "Revistas Acadêmicas": BookOpen,
  "Bases de Dados Jurídicas": Books,
  "Institutos de Pesquisa": Bank,
  "Materiais Didáticos": GraduationCap
}

export function CategoryNav({ currentView, onViewChange }: CategoryNavProps) {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="p-6 pb-4">
        <h2 className="text-2xl font-semibold text-primary mb-1">Ius Gentium UFSC</h2>
        <p className="text-sm text-muted-foreground">Biblioteca Digital de Pesquisa</p>
      </div>
      
      <Separator />
      
      <ScrollArea className="flex-1 px-3">
        <div className="space-y-1 py-4">
          <Button
            variant={currentView === "home" ? "secondary" : "ghost"}
            className={cn(
              "w-full justify-start gap-3 font-medium",
              currentView === "home" && "bg-secondary"
            )}
            onClick={() => onViewChange("home")}
          >
            <House size={20} weight={currentView === "home" ? "fill" : "regular"} />
            Início
          </Button>

          <div className="pt-4 pb-2 px-3">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Categorias
            </p>
          </div>

          {CATEGORIES.map((category) => {
            const Icon = categoryIcons[category] || Books
            const isActive = currentView === category
            
            return (
              <Button
                key={category}
                variant={isActive ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start gap-3 text-sm",
                  isActive && "bg-secondary"
                )}
                onClick={() => onViewChange(category)}
              >
                <Icon size={18} weight={isActive ? "fill" : "regular"} />
                <span className="line-clamp-1">{category}</span>
              </Button>
            )
          })}
        </div>
      </ScrollArea>

      <Separator />
      
      <div className="p-4">
        <div className="rounded-lg bg-muted p-4 text-sm">
          <p className="text-xs font-semibold mb-2">Sobre</p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Grupo de pesquisa dedicado ao direito internacional e história jurídica global na UFSC.
          </p>
        </div>
      </div>
    </div>
  )
}

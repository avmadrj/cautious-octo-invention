import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { MagnifyingGlass, X } from "@phosphor-icons/react"
import { CATEGORIES, RESOURCE_TYPES } from "@/lib/types"

interface SearchFilterProps {
  searchQuery: string
  onSearchChange: (value: string) => void
  selectedCategory: string
  onCategoryChange: (value: string) => void
  selectedType: string
  onTypeChange: (value: string) => void
  selectedInstitution: string
  onInstitutionChange: (value: string) => void
  institutions: string[]
  onClearFilters: () => void
}

export function SearchFilter({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedType,
  onTypeChange,
  selectedInstitution,
  onInstitutionChange,
  institutions,
  onClearFilters
}: SearchFilterProps) {
  const hasActiveFilters = selectedCategory !== "all" || selectedType !== "all" || selectedInstitution !== "all" || searchQuery !== ""

  return (
    <div className="space-y-4">
      <div className="relative">
        <MagnifyingGlass 
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" 
          size={20}
        />
        <Input
          id="search"
          type="search"
          placeholder="Buscar recursos por título, instituição, palavras-chave..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-10"
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 p-0"
            onClick={() => onSearchChange("")}
            aria-label="Clear search query"
          >
            <X size={16} />
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Select value={selectedCategory} onValueChange={onCategoryChange}>
          <SelectTrigger>
            <SelectValue placeholder="Todas as Categorias" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas as Categorias</SelectItem>
            {CATEGORIES.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedType} onValueChange={onTypeChange}>
          <SelectTrigger>
            <SelectValue placeholder="Todos os Tipos" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos os Tipos</SelectItem>
            {RESOURCE_TYPES.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={selectedInstitution} onValueChange={onInstitutionChange}>
          <SelectTrigger>
            <SelectValue placeholder="Todas as Instituições" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas as Instituições</SelectItem>
            {institutions.map((institution) => (
              <SelectItem key={institution} value={institution}>
                {institution}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {hasActiveFilters && (
        <div className="flex justify-end">
          <Button variant="outline" size="sm" onClick={onClearFilters} className="gap-2">
            <X size={16} aria-hidden="true" />
            Limpar Filtros
          </Button>
        </div>
      )}
    </div>
  )
}

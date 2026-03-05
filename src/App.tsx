import { useState, useMemo } from "react"
import { useKV } from "@github/spark/hooks"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { CategoryNav } from "@/components/CategoryNav"
import { HomePage } from "@/components/HomePage"
import { CategoryPage } from "@/components/CategoryPage"
import { SearchFilter } from "@/components/SearchFilter"
import { ResourceCard } from "@/components/ResourceCard"
import { DataInitializer } from "@/components/DataInitializer"
import { List } from "@phosphor-icons/react"
import type { Resource } from "@/lib/types"

function App() {
  const [resources] = useKV<Resource[]>("resources", [])
  const [currentView, setCurrentView] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedType, setSelectedType] = useState("all")
  const [selectedInstitution, setSelectedInstitution] = useState("all")

  const institutions = useMemo(() => {
    if (!resources) return []
    return [...new Set(resources.map(r => r.institution))].sort()
  }, [resources])

  const filteredResources = useMemo(() => {
    if (!resources) return []
    return resources.filter(resource => {
      const matchesSearch = searchQuery === "" || 
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.institution.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.keywords?.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()))

      const matchesCategory = selectedCategory === "all" || resource.category === selectedCategory
      const matchesType = selectedType === "all" || resource.type === selectedType
      const matchesInstitution = selectedInstitution === "all" || resource.institution === selectedInstitution

      return matchesSearch && matchesCategory && matchesType && matchesInstitution
    })
  }, [resources, searchQuery, selectedCategory, selectedType, selectedInstitution])

  const handleClearFilters = () => {
    setSearchQuery("")
    setSelectedCategory("all")
    setSelectedType("all")
    setSelectedInstitution("all")
  }

  const handleCategoryClick = (category: string) => {
    setCurrentView(category)
    setMobileMenuOpen(false)
  }

  const handleViewChange = (view: string) => {
    setCurrentView(view)
    setMobileMenuOpen(false)
  }

  const isSearchActive = searchQuery !== "" || 
    selectedCategory !== "all" || 
    selectedType !== "all" || 
    selectedInstitution !== "all"

  return (
    <div className="min-h-screen flex">
      <DataInitializer />
      <aside className="hidden lg:flex w-80 border-r bg-card flex-col">
        <CategoryNav currentView={currentView} onViewChange={handleViewChange} />
      </aside>

      <main className="flex-1 flex flex-col">
        <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex items-center gap-4 px-6 py-4 lg:px-8">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon">
                  <List size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 p-0">
                <CategoryNav currentView={currentView} onViewChange={handleViewChange} />
              </SheetContent>
            </Sheet>

            <div className="flex-1 lg:hidden">
              <h1 className="text-xl font-semibold text-primary">Ius Gentium UFSC</h1>
            </div>
          </div>
        </header>

        <div className="flex-1 px-6 py-8 lg:px-12 lg:py-10">
          {isSearchActive ? (
            <div className="max-w-7xl mx-auto space-y-8">
              <div>
                <h1 className="text-4xl font-semibold mb-2">Pesquisar e Navegar</h1>
                <p className="text-muted-foreground">
                  {filteredResources.length} recurso{filteredResources.length !== 1 ? 's' : ''} encontrado{filteredResources.length !== 1 ? 's' : ''}
                </p>
              </div>

              <SearchFilter
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                selectedType={selectedType}
                onTypeChange={setSelectedType}
                selectedInstitution={selectedInstitution}
                onInstitutionChange={setSelectedInstitution}
                institutions={institutions}
                onClearFilters={handleClearFilters}
              />

              <Separator />

              {filteredResources.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-lg text-muted-foreground mb-4">
                    Nenhum recurso corresponde aos seus critérios de pesquisa.
                  </p>
                  <Button variant="outline" onClick={handleClearFilters}>
                    Limpar todos os filtros
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredResources.map((resource) => (
                    <ResourceCard key={resource.id} resource={resource} />
                  ))}
                </div>
              )}
            </div>
          ) : currentView === "home" ? (
            <div className="max-w-7xl mx-auto">
              <HomePage resources={resources || []} onCategoryClick={handleCategoryClick} />
            </div>
          ) : (
            <div className="max-w-7xl mx-auto space-y-8">
              <CategoryPage category={currentView} resources={resources || []} />
              
              <Separator />
              
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold">Filtrar Recursos</h3>
                <SearchFilter
                  searchQuery={searchQuery}
                  onSearchChange={setSearchQuery}
                  selectedCategory={selectedCategory}
                  onCategoryChange={setSelectedCategory}
                  selectedType={selectedType}
                  onTypeChange={setSelectedType}
                  selectedInstitution={selectedInstitution}
                  onInstitutionChange={setSelectedInstitution}
                  institutions={institutions}
                  onClearFilters={handleClearFilters}
                />
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default App
import { ResourceCard } from "./ResourceCard"
import { Badge } from "@/components/ui/badge"
import type { Resource } from "@/lib/types"

interface CategoryPageProps {
  category: string
  resources: Resource[]
}

export function CategoryPage({ category, resources }: CategoryPageProps) {
  const filteredResources = resources.filter(r => r.category === category)
  
  const resourceTypes = [...new Set(filteredResources.map(r => r.type))]

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <h1 className="text-4xl font-semibold">{category}</h1>
          <Badge variant="secondary" className="text-base px-3 py-1">
            {filteredResources.length} recursos
          </Badge>
        </div>
        
        {resourceTypes.length > 0 && (
          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-muted-foreground">Tipos:</span>
            {resourceTypes.map(type => (
              <Badge key={type} variant="outline">
                {type}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {filteredResources.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            Nenhum recurso encontrado nesta categoria ainda.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      )}
    </div>
  )
}

import { memo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "@phosphor-icons/react"
import type { Resource } from "@/lib/types"

interface ResourceCardProps {
  resource: Resource
}

export const ResourceCard = memo(function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:border-accent/50">
      <CardHeader>
        <div className="flex items-start justify-between gap-2 mb-2">
          <CardTitle className="text-xl leading-snug">{resource.title}</CardTitle>
          <Badge variant="secondary" className="shrink-0">
            {resource.type}
          </Badge>
        </div>
        <CardDescription className="text-sm">{resource.institution}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <p className="text-sm text-foreground/80 mb-4 flex-1">{resource.description}</p>
        <div className="flex items-center justify-between gap-4 mt-auto pt-4 border-t">
          <Badge variant="outline" className="text-xs">
            {resource.category}
          </Badge>
          <Button asChild size="sm" className="gap-2">
            <a href={resource.link} target="_blank" rel="noopener noreferrer">
              Visitar
              <ArrowUpRight size={16} weight="bold" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
})

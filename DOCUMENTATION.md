# Ius Gentium UFSC Digital Research Library - Documentation

## Overview

The Ius Gentium UFSC Digital Research Library is a comprehensive web-based portal for organizing and accessing international law research materials. The application provides a structured database of 70+ academic resources including journals, databases, treaties, court decisions, and research institutes from leading institutions worldwide.

The library is automatically populated with an extensive collection covering all major areas of international law, from foundational treaties to contemporary scholarship.

## Application Structure

### Data Model

Each resource in the library contains the following fields:

```typescript
{
  id: string              // Unique identifier
  title: string          // Name of the resource
  institution: string    // Organization responsible
  category: string       // Resource classification
  type: string          // Resource format type
  description: string   // Detailed description
  link: string         // External URL
  keywords?: string[]  // Optional search terms
}
```

### Categories

Resources are organized into nine main categories:

1. **International Law Foundations** - Core principles and foundational materials
2. **History of International Law** - Historical documents and scholarly works
3. **International Courts and Jurisprudence** - Court systems and legal decisions
4. **Treaties and Diplomatic Documents** - International agreements and conventions
5. **International Organizations** - UN bodies and global institutions
6. **Academic Journals** - Peer-reviewed scholarly publications
7. **Legal Databases** - Research databases and archives
8. **Research Institutes** - Academic centers and think tanks
9. **Teaching Materials** - Educational resources and training materials

### Resource Types

- Library
- Database
- Journal
- Treaty Collection
- Research Institute
- Digital Archive
- Court
- Organization
- Educational Resource

## How to Add New Resources

The application uses a persistent key-value store to manage resources. The library is automatically initialized with 70 comprehensive resources covering all categories of international law. All resource data is stored in the browser using the Spark KV API.

### Initial Resource Collection

The library includes resources from major institutions such as:
- Peace Palace Library (The Hague)
- United Nations (ICJ, UNCLOS, Treaty Collection, ILC)
- International Criminal Court
- Max Planck Institute for International Law
- Hague Academy of International Law
- University research centers (Cambridge, Leiden, NYU, Helsinki, etc.)
- Regional courts (ECHR, Inter-American Court, African Court)
- Major publishers (Oxford, Cambridge, Brill)
- International organizations (WTO, ICRC, Council of Europe, OAS, African Union)
- Leading academic journals (AJIL, EJIL, JICJ, etc.)

### Method 1: Programmatic Addition

Resources can be added by modifying the seed data in the application code:

1. Open the browser developer console
2. Use the following code pattern:

```javascript
// Get current resources
const currentResources = await spark.kv.get("resources")

// Create new resource object
const newResource = {
  id: "71", // Increment from last ID (library now has 70 resources)
  title: "Resource Name",
  institution: "Institution Name",
  category: "International Law Foundations", // Must match existing category
  type: "Database", // Must match existing type
  description: "Detailed description of the resource...",
  link: "https://example.com",
  keywords: ["keyword1", "keyword2", "keyword3"]
}

// Add to existing resources
const updatedResources = [...currentResources, newResource]

// Save back to storage
await spark.kv.set("resources", updatedResources)
```

### Method 2: Bulk Import

To import multiple resources at once:

```javascript
const newResources = [
  {
    id: "71",
    title: "First Resource",
    // ... other fields
  },
  {
    id: "72",
    title: "Second Resource",
    // ... other fields
  }
]

const currentResources = await spark.kv.get("resources")
const updatedResources = [...currentResources, ...newResources]
await spark.kv.set("resources", updatedResources)
```

## How to Update Resources

To modify an existing resource:

```javascript
// Get current resources
const resources = await spark.kv.get("resources")

// Find and update the resource
const updatedResources = resources.map(resource => 
  resource.id === "1" 
    ? { ...resource, description: "Updated description" }
    : resource
)

// Save changes
await spark.kv.set("resources", updatedResources)
```

## How to Delete Resources

To remove a resource from the library:

```javascript
// Get current resources
const resources = await spark.kv.get("resources")

// Filter out the resource to delete
const updatedResources = resources.filter(resource => resource.id !== "1")

// Save changes
await spark.kv.set("resources", updatedResources)
```

## Library Features

### Search Functionality

The search bar searches across multiple fields:
- Resource title
- Institution name
- Description text
- Category
- Keywords

Search is case-insensitive and matches partial strings.

### Filtering System

Three independent filter controls:
- **Category Filter** - Show resources from specific categories
- **Type Filter** - Filter by resource format (Database, Journal, etc.)
- **Institution Filter** - Show resources from specific institutions

Filters can be combined for precise results. Use "Clear Filters" to reset all selections.

### Navigation

- **Home** - Overview of the library with featured resources
- **Category Pages** - Browse resources within specific categories
- **Search & Browse** - Active when using search or filters

### Mobile Support

The application is fully responsive:
- Collapsible navigation menu on mobile devices
- Touch-friendly interface elements
- Optimized layouts for tablets and phones

## Best Practices

### Adding Resources

1. **Unique IDs** - Always use unique ID values (increment from the highest existing ID)
2. **Valid Categories** - Use only the predefined category names exactly as shown
3. **Valid Types** - Use only the predefined resource type names
4. **Complete Information** - Provide all required fields for best user experience
5. **Keywords** - Add relevant keywords to improve search discoverability
6. **URLs** - Ensure links are valid and include the full protocol (https://)

### Data Quality

- Write clear, informative descriptions
- Use official institution names consistently
- Verify external links before adding
- Include multiple keywords for better searchability
- Keep descriptions concise but comprehensive (2-3 sentences)

### Maintenance

- Periodically review and update resource descriptions
- Remove or update broken links
- Consolidate duplicate entries
- Ensure consistent formatting across all entries

## Technical Details

### Storage

All resource data persists in browser storage using the Spark KV API. Data survives page refreshes and remains available between sessions.

### Performance

- Resources load instantly from local storage
- Search and filtering operate in real-time
- No server requests required for browsing

### Data Backup

To export all resources:

```javascript
const resources = await spark.kv.get("resources")
console.log(JSON.stringify(resources, null, 2))
// Copy the output to save as backup
```

To restore from backup:

```javascript
const backupData = [/* paste your backup data here */]
await spark.kv.set("resources", backupData)
```

## Support

For questions or issues with the digital library, contact the Ius Gentium UFSC research group at the Federal University of Santa Catarina.

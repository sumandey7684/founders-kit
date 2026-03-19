import ResourceCard from "./ResourceCard";
import { Resource } from "@/data/resources";

interface CategorySectionProps {
  category: string;
  resources: Resource[];
}

export default function CategorySection({
  category,
  resources,
}: CategorySectionProps) {
  const categoryId = category.toLowerCase().replace(/\s+/g, "-");

  return (
    <section id={categoryId} className="mb-16 scroll-mt-20">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{category}</h2>
        <div className="w-20 h-1 bg-primary-600 rounded"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <ResourceCard key={`${resource.title}-${index}`} resource={resource} />
        ))}
      </div>
    </section>
  );
}

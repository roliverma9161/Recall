import { FolderOpen, ArrowRight } from "lucide-react";
import PageHeader from "../components/common/PageHeader";

const collections = [
  { name: "Java & Spring Boot", count: 24, description: "Backend learning and project notes." },
  { name: "React", count: 31, description: "Components, hooks, routing and UI ideas." },
  { name: "College", count: 42, description: "DBMS, DAA, Web Technology and other notes." },
  { name: "Career", count: 18, description: "Interview preparation and useful resources." },
];

function Collections() {
  return (
    <>
      <PageHeader
        title="Collections"
        description="Group memories around the topics that matter to you."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {collections.map((collection) => (
          <div
            key={collection.name}
            className="group rounded-2xl border border-zinc-200 bg-white p-5 hover:border-zinc-300"
          >
            <div className="flex items-start justify-between">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-zinc-100">
                <FolderOpen size={20} />
              </div>
              <span className="text-xs text-zinc-400">{collection.count} memories</span>
            </div>
            <h3 className="mt-5 font-semibold">{collection.name}</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-500">{collection.description}</p>
            <button className="mt-5 flex items-center gap-1 text-sm font-medium">
              Open collection <ArrowRight size={15} />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Collections;

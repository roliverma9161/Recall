import { useMemo, useState } from "react";
import { Search as SearchIcon, Sparkles } from "lucide-react";
import PageHeader from "../components/common/PageHeader";
import MemoryCard from "../components/common/MemoryCard";
import { memories } from "../data/memories";

function Search() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return memories;

    const words = query.toLowerCase().split(" ").filter(Boolean);

    return memories.filter((memory) => {
      const text = `${memory.title} ${memory.description} ${memory.tags.join(" ")}`.toLowerCase();
      return words.some((word) => text.includes(word));
    });
  }, [query]);

  return (
    <>
      <PageHeader
        title="Search memories"
        description="Start with a phrase you remember. Semantic search will be added in the AI phase."
      />

      <div className="relative max-w-3xl">
        <SearchIcon
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
        />
        <input
          autoFocus
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try: JWT authentication diagram"
          className="w-full rounded-2xl border border-zinc-200 bg-white py-4 pl-12 pr-4 text-sm outline-none focus:border-zinc-400"
        />
      </div>

      <div className="mt-7 flex items-center gap-2 text-sm text-zinc-500">
        <Sparkles size={16} />
        {query ? `${results.length} memories found` : "Showing your recent memories"}
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {results.map((memory) => (
          <MemoryCard key={memory.id} memory={memory} />
        ))}
      </div>

      {results.length === 0 && (
        <div className="mt-8 rounded-2xl border border-dashed border-zinc-300 bg-white p-10 text-center">
          <p className="font-medium">No memories found</p>
          <p className="mt-1 text-sm text-zinc-500">Try a different phrase.</p>
        </div>
      )}
    </>
  );
}

export default Search;

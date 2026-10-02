import PageHeader from "../components/common/PageHeader";
import MemoryCard from "../components/common/MemoryCard";
import { memories } from "../data/memories";

function Memories() {
  return (
    <>
      <PageHeader
        title="Memories"
        description="Everything you have saved, kept simple and easy to browse."
      />

      <div className="mb-5 flex gap-2 overflow-x-auto pb-1">
        {["All", "Notes", "Images", "Links", "Code", "Voice"].map((item, index) => (
          <button
            key={item}
            className={`shrink-0 rounded-full px-4 py-2 text-sm ${
              index === 0
                ? "bg-zinc-900 text-white"
                : "bg-white text-zinc-600 ring-1 ring-zinc-200 hover:bg-zinc-50"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {memories.map((memory) => (
          <MemoryCard key={memory.id} memory={memory} />
        ))}
      </div>
    </>
  );
}

export default Memories;

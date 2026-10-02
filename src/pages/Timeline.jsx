import { memories } from "../data/memories";
import PageHeader from "../components/common/PageHeader";

function Timeline() {
  return (
    <>
      <PageHeader
        title="Timeline"
        description="A simple view of what you have been learning and saving."
      />

      <div className="max-w-3xl">
        {memories.map((memory, index) => (
          <div key={memory.id} className="relative flex gap-5 pb-8">
            {index !== memories.length - 1 && (
              <div className="absolute left-[7px] top-4 h-full w-px bg-zinc-200" />
            )}
            <div className="relative mt-1.5 h-4 w-4 shrink-0 rounded-full border-4 border-[#f7f7f5] bg-zinc-900" />
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 flex-1">
              <p className="text-xs text-zinc-400">{memory.date}</p>
              <h3 className="mt-1 font-semibold">{memory.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">{memory.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Timeline;

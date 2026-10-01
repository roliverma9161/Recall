import { FileText, Image, Link as LinkIcon, Mic, Code2 } from "lucide-react";

const icons = {
  note: FileText,
  image: Image,
  link: LinkIcon,
  voice: Mic,
  code: Code2,
};

function MemoryCard({ memory }) {
  const Icon = icons[memory.type] || FileText;

  return (
    <article className="rounded-2xl border border-zinc-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-zinc-100 text-zinc-700">
          <Icon size={19} />
        </div>
        <span className="text-xs text-zinc-400">{memory.date}</span>
      </div>

      <h3 className="mt-4 font-semibold text-zinc-900">{memory.title}</h3>
      <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-500">
        {memory.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {memory.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-600"
          >
            #{tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export default MemoryCard;

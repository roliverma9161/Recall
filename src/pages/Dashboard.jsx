import { Link } from "react-router-dom";
import { ArrowRight, FileText, Image, Link2, Plus, Sparkles } from "lucide-react";
import PageHeader from "../components/common/PageHeader";
import MemoryCard from "../components/common/MemoryCard";
import { memories } from "../data/memories";

function Dashboard() {
  return (
    <>
      <PageHeader
        title="Good evening, Roli."
        description="Your saved knowledge, ideas and useful moments in one place."
        action={
          <Link
            to="/add-memory"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-zinc-800"
          >
            <Plus size={17} />
            Add memory
          </Link>
        }
      />

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total memories" value="128" icon={FileText} />
        <StatCard label="Images" value="42" icon={Image} />
        <StatCard label="Saved links" value="18" icon={Link2} />
        <StatCard label="This week" value="12" icon={Sparkles} />
      </section>

      <section className="mt-8 grid gap-6 xl:grid-cols-[1fr_330px]">
        <div>
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-zinc-900">Recent memories</h3>
              <p className="mt-1 text-sm text-zinc-500">
                Things you saved recently.
              </p>
            </div>
            <Link
              to="/memories"
              className="flex items-center gap-1 text-sm font-medium text-zinc-700 hover:text-zinc-950"
            >
              View all <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {memories.slice(0, 4).map((memory) => (
              <MemoryCard key={memory.id} memory={memory} />
            ))}
          </div>
        </div>

        <aside className="h-fit rounded-2xl bg-zinc-900 p-6 text-white">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-lime-300 text-zinc-900">
            <Sparkles size={19} />
          </div>
          <h3 className="mt-5 text-lg font-semibold">Try Recall Search</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-300">
            Search by what you remember, not only by the exact words you saved.
          </p>
          <Link
            to="/search"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 hover:bg-zinc-100"
          >
            Search memories <ArrowRight size={16} />
          </Link>
        </aside>
      </section>
    </>
  );
}

function StatCard({ label, value, icon: Icon }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <span className="text-sm text-zinc-500">{label}</span>
        <Icon size={18} className="text-zinc-400" />
      </div>
      <p className="mt-4 text-3xl font-bold tracking-tight">{value}</p>
    </div>
  );
}

export default Dashboard;

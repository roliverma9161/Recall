import PageHeader from "../components/common/PageHeader";

function Settings() {
  return (
    <>
      <PageHeader
        title="Settings"
        description="Control how Recall works for you."
      />

      <div className="max-w-2xl space-y-4">
        <Setting title="Private memories" description="Your memories should only be visible to your account." />
        <Setting title="Automatic summaries" description="Create short summaries when documents are processed." />
        <Setting title="Search suggestions" description="Use your recent searches to improve suggestions." />
      </div>
    </>
  );
}

function Setting({ title, description }) {
  return (
    <div className="flex items-start justify-between gap-5 rounded-2xl border border-zinc-200 bg-white p-5">
      <div>
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-zinc-500">{description}</p>
      </div>
      <div className="h-6 w-11 shrink-0 rounded-full bg-zinc-900 p-1">
        <div className="h-4 w-4 rounded-full bg-white" />
      </div>
    </div>
  );
}

export default Settings;

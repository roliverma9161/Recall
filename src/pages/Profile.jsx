import PageHeader from "../components/common/PageHeader";

function Profile() {
  return (
    <>
      <PageHeader title="Profile" description="Your Recall account information." />

      <div className="max-w-2xl rounded-2xl border border-zinc-200 bg-white p-6">
        <div className="flex items-center gap-4">
          <div className="grid h-16 w-16 place-items-center rounded-full bg-zinc-900 font-bold text-white">
            RV
          </div>
          <div>
            <h3 className="font-semibold">Roli Verma</h3>
            <p className="text-sm text-zinc-500">Personal account</p>
          </div>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          <Info label="Name" value="Roli Verma" />
          <Info label="Email" value="roli@example.com" />
        </div>
      </div>
    </>
  );
}

function Info({ label, value }) {
  return (
    <div className="rounded-xl bg-zinc-50 p-4">
      <p className="text-xs text-zinc-400">{label}</p>
      <p className="mt-1 text-sm font-medium">{value}</p>
    </div>
  );
}

export default Profile;

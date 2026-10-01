import { useState } from "react";
import { FileUp, Link2, Mic, Save } from "lucide-react";
import PageHeader from "../components/common/PageHeader";

function AddMemory() {
  const [type, setType] = useState("note");
  const [saved, setSaved] = useState(false);

  function handleSave(event) {
    event.preventDefault();
    setSaved(true);
  }

  return (
    <>
      <PageHeader
        title="Add a memory"
        description="Save something now so you do not have to search for it later."
      />

      <form onSubmit={handleSave} className="max-w-3xl">
        <div className="rounded-2xl border border-zinc-200 bg-white p-5 md:p-7">
          <div className="grid gap-2 sm:grid-cols-4">
            {[
              ["note", "Note"],
              ["image", "Image"],
              ["link", "Link"],
              ["voice", "Voice"],
            ].map(([value, label]) => (
              <button
                type="button"
                key={value}
                onClick={() => setType(value)}
                className={`rounded-xl border px-4 py-3 text-sm font-medium ${
                  type === value
                    ? "border-zinc-900 bg-zinc-900 text-white"
                    : "border-zinc-200 text-zinc-600 hover:bg-zinc-50"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="mt-7 space-y-5">
            <Field label="Title">
              <input
                required
                placeholder="e.g. Spring Boot JWT Authentication"
                className="input"
              />
            </Field>

            {type === "link" ? (
              <Field label="URL">
                <div className="relative">
                  <Link2 className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                  <input
                    required
                    type="url"
                    placeholder="https://..."
                    className="input pl-10"
                  />
                </div>
              </Field>
            ) : type === "image" ? (
              <Field label="Upload image">
                <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-zinc-300 bg-zinc-50 p-8 text-center hover:bg-zinc-100">
                  <FileUp className="text-zinc-500" />
                  <span className="mt-3 text-sm font-medium">Choose an image</span>
                  <span className="mt-1 text-xs text-zinc-400">PNG, JPG or WEBP</span>
                  <input type="file" accept="image/*" className="hidden" />
                </label>
              </Field>
            ) : type === "voice" ? (
              <div className="rounded-xl bg-zinc-50 p-6 text-center">
                <Mic className="mx-auto text-zinc-500" />
                <p className="mt-2 text-sm font-medium">Voice recording will come next</p>
                <p className="mt-1 text-xs text-zinc-400">We will connect speech-to-text in Phase 2.</p>
              </div>
            ) : (
              <Field label="Your note">
                <textarea
                  required
                  rows="8"
                  placeholder="Write what you want to remember..."
                  className="input resize-none"
                />
              </Field>
            )}

            <Field label="Tags">
              <input
                placeholder="react, interview, javascript"
                className="input"
              />
            </Field>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white hover:bg-zinc-800 sm:w-auto"
            >
              <Save size={17} />
              Save memory
            </button>

            {saved && (
              <p className="text-sm font-medium text-green-700">
                Memory saved locally for now. Backend storage comes in Phase 2.
              </p>
            )}
          </div>
        </div>
      </form>
    </>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-zinc-700">{label}</span>
      {children}
    </label>
  );
}

export default AddMemory;

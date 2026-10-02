import { Bot, Send, Sparkles } from "lucide-react";
import PageHeader from "../components/common/PageHeader";

function Assistant() {
  return (
    <>
      <PageHeader
        title="AI Memory Assistant"
        description="Ask questions about the knowledge you have saved."
      />

      <div className="max-w-3xl rounded-2xl border border-zinc-200 bg-white">
        <div className="flex min-h-[430px] flex-col items-center justify-center p-6 text-center">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-zinc-900 text-lime-300">
            <Bot size={26} />
          </div>
          <h3 className="mt-5 text-lg font-semibold">Your memories, in conversation.</h3>
          <p className="mt-2 max-w-md text-sm leading-6 text-zinc-500">
            Ask something like “What did I save about React authentication?”
            The AI retrieval layer will be connected in Phase 3.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {["What did I save about React?", "Show my Java notes", "Find interview tips"].map(
              (prompt) => (
                <button
                  key={prompt}
                  className="rounded-full bg-zinc-100 px-3 py-2 text-xs text-zinc-600 hover:bg-zinc-200"
                >
                  <Sparkles className="mr-1 inline" size={13} />
                  {prompt}
                </button>
              )
            )}
          </div>
        </div>

        <div className="border-t border-zinc-200 p-4">
          <div className="flex gap-2">
            <input
              disabled
              placeholder="Ask your memories..."
              className="input bg-zinc-50"
            />
            <button disabled className="grid w-12 shrink-0 place-items-center rounded-xl bg-zinc-200 text-zinc-400">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Assistant;

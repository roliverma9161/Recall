import { Menu, Search, Bell } from "lucide-react";
import { Link } from "react-router-dom";

function Topbar({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-zinc-200 bg-[#f7f7f5]/90 px-4 backdrop-blur md:px-6">
      <button
        onClick={onMenuClick}
        className="rounded-xl p-2 text-zinc-600 hover:bg-white lg:hidden"
        aria-label="Open menu"
      >
        <Menu size={21} />
      </button>

      <Link to="/search" className="relative max-w-xl flex-1">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
        />
        <input
          readOnly
          placeholder="Search your memories..."
          className="w-full rounded-xl border border-zinc-200 bg-white py-2.5 pl-10 pr-4 text-sm outline-none transition placeholder:text-zinc-400 hover:border-zinc-300"
        />
      </Link>

      <button
        className="hidden rounded-xl p-2.5 text-zinc-500 hover:bg-white sm:block"
        aria-label="Notifications"
      >
        <Bell size={19} />
      </button>

      <Link
        to="/profile"
        className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-zinc-900 text-xs font-bold text-white"
      >
        RV
      </Link>
    </header>
  );
}

export default Topbar;

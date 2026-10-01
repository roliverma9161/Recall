import { NavLink } from "react-router-dom";
import {
  Brain,
  LayoutDashboard,
  Library,
  Plus,
  Search,
  FolderOpen,
  Clock3,
  MessageCircle,
  Settings,
  User,
  X,
} from "lucide-react";

const mainLinks = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/memories", label: "Memories", icon: Library },
  { to: "/search", label: "Search", icon: Search },
  { to: "/collections", label: "Collections", icon: FolderOpen },
  { to: "/timeline", label: "Timeline", icon: Clock3 },
];

const toolLinks = [
  { to: "/assistant", label: "AI Assistant", icon: MessageCircle },
  { to: "/profile", label: "Profile", icon: User },
  { to: "/settings", label: "Settings", icon: Settings },
];

function Sidebar({ open, onClose }) {
  return (
    <>
      {open && (
        <button
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          aria-label="Close menu"
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col border-r border-zinc-200 bg-white p-5 transition-transform duration-200 lg:static lg:z-auto lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-zinc-900 text-lime-300">
              <Brain size={21} />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight">Recall</h1>
              <p className="text-xs text-zinc-500">Your digital memory</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-zinc-500 hover:bg-zinc-100 lg:hidden"
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        <NavLink
          to="/add-memory"
          onClick={onClose}
          className="mt-7 flex items-center justify-center gap-2 rounded-xl bg-zinc-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
        >
          <Plus size={18} />
          Add Memory
        </NavLink>

        <nav className="mt-8 space-y-1">
          <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-400">
            Workspace
          </p>

          {mainLinks.map((link) => (
            <SidebarLink key={link.to} link={link} onClose={onClose} />
          ))}
        </nav>

        <nav className="mt-7 space-y-1">
          <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-400">
            Personal
          </p>

          {toolLinks.map((link) => (
            <SidebarLink key={link.to} link={link} onClose={onClose} />
          ))}
        </nav>

        <div className="mt-auto rounded-2xl bg-zinc-50 p-4">
          <p className="text-sm font-semibold">Keep your knowledge close.</p>
          <p className="mt-1 text-xs leading-5 text-zinc-500">
            Save things once. Find them whenever you need them.
          </p>
        </div>
      </aside>
    </>
  );
}

function SidebarLink({ link, onClose }) {
  const Icon = link.icon;

  return (
    <NavLink
      to={link.to}
      onClick={onClose}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
          isActive
            ? "bg-zinc-900 text-white"
            : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900"
        }`
      }
    >
      <Icon size={18} />
      {link.label}
    </NavLink>
  );
}

export default Sidebar;

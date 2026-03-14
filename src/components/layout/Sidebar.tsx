import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutGrid, Heart, Clock, Settings, Info } from 'lucide-react';
import { cn } from '../../lib/utils';

export const Sidebar: React.FC<{ className?: string; onClose?: () => void }> = ({ className, onClose }) => {
  const navItems = [
    { icon: LayoutGrid, label: 'Dashboard', path: '/' },
    { icon: Heart, label: 'Favorites', path: '/favorites' },
    { icon: Clock, label: 'Recent', path: '/recent' },
    { icon: Info, label: 'About', path: '/about' },
    { icon: Settings, label: 'Admin Panel', path: '/admin' },
  ];

  return (
    <aside className={cn("w-64 h-screen fixed left-0 top-0 border-r border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/50 backdrop-blur-xl flex flex-col z-40", className)}>
      <div className="p-6 flex items-center gap-3">
        <div className="flex items-center justify-center shrink-0">
          <svg viewBox="0 0 100 100" className="w-10 h-10 text-[#E31837] fill-current">
            <path d="M 50 50 L 25 10 L 50 25 L 75 10 Z M 50 50 L 90 25 L 75 50 L 90 75 Z M 50 50 L 75 90 L 50 75 L 25 90 Z M 50 50 L 10 75 L 25 50 L 10 25 Z" />
          </svg>
        </div>
        <div>
          <h1 className="font-extrabold text-2xl text-[#E31837] tracking-tight leading-none">RAKESH</h1>
          <p className="text-[10px] text-zinc-500 dark:text-zinc-400 font-bold tracking-widest mt-1 uppercase">AI Hub</p>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={onClose}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200",
                isActive
                  ? "bg-white dark:bg-zinc-800/50 text-indigo-600 dark:text-indigo-400 shadow-sm border border-zinc-200/50 dark:border-zinc-700/50"
                  : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/30 hover:text-zinc-900 dark:hover:text-zinc-100"
              )
            }
          >
            <item.icon className="w-5 h-5" />
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
        <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-600/10 border border-indigo-500/20">
          <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 mb-1">Pro Access</h4>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-3">Unlock premium AI tools and features.</p>
          <button className="w-full py-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs font-semibold rounded-lg hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors">
            Upgrade Now
          </button>
        </div>
      </div>
    </aside>
  );
};

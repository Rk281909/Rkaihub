import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Sidebar } from './components/layout/Sidebar';
import { TopBar } from './components/layout/TopBar';
import { Dashboard } from './pages/Dashboard';
import { Favorites } from './pages/Favorites';
import { Recent } from './pages/Recent';
import { About } from './pages/About';
import { Admin } from './pages/Admin';
import { cn } from './lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-indigo-500/30">
          <Sidebar className="hidden md:flex" />
          
          {/* Mobile Sidebar Overlay */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
              >
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                  onClick={(e) => e.stopPropagation()}
                  className="w-64 h-full bg-white dark:bg-zinc-950 border-r border-zinc-200 dark:border-zinc-800"
                >
                  <Sidebar className="flex" onClose={() => setIsMobileMenuOpen(false)} />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <main className={cn("transition-all duration-300", "md:pl-64")}>
            <TopBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              toggleTheme={toggleTheme}
              isDark={isDark}
              onMenuClick={() => setIsMobileMenuOpen(true)}
            />
            
            <div className="relative">
              {/* Background gradient effects */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-indigo-500/10 dark:bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
              
              <div className="relative z-10">
                <Routes>
                  <Route path="/" element={<Dashboard searchQuery={searchQuery} />} />
                  <Route path="/favorites" element={<Favorites />} />
                  <Route path="/recent" element={<Recent />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/admin" element={<Admin />} />
                </Routes>
              </div>
            </div>
          </main>
        </div>
      </Router>
    </AppProvider>
  );
}

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ToolCard } from '../components/ui/ToolCard';
import { useAppContext } from '../context/AppContext';
import { Tool } from '../data/tools';
import { Clock, Search } from 'lucide-react';

export const Recent: React.FC = () => {
  const { tools, recent } = useAppContext();

  const recentTools = recent.map(id => tools.find(t => t.id === id)).filter(Boolean) as Tool[];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-blue-100 dark:bg-blue-500/10 rounded-xl text-blue-500">
          <Clock className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Recently Used</h1>
          <p className="text-zinc-500 dark:text-zinc-400">Pick up right where you left off.</p>
        </div>
      </div>

      <motion.div layout className="min-h-[50vh]">
        <AnimatePresence mode="popLayout">
          {recentTools.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {recentTools.map((tool) => (
                <motion.div
                  key={tool.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                >
                  <ToolCard tool={tool} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center py-20 text-center"
            >
              <div className="w-16 h-16 bg-zinc-100 dark:bg-zinc-800 rounded-2xl flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-zinc-400" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">No recent tools</h3>
              <p className="text-zinc-500 dark:text-zinc-400 max-w-md">
                Tools you open will appear here for easy access later.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

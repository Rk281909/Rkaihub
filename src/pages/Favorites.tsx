import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ToolCard } from '../components/ui/ToolCard';
import { useAppContext } from '../context/AppContext';
import { Heart, Search } from 'lucide-react';

export const Favorites: React.FC = () => {
  const { tools, favorites } = useAppContext();

  const favoriteTools = tools.filter(tool => favorites.includes(tool.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-red-100 dark:bg-red-500/10 rounded-xl text-red-500">
          <Heart className="w-6 h-6 fill-current" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Your Favorites</h1>
          <p className="text-zinc-500 dark:text-zinc-400">Quick access to your most loved AI tools.</p>
        </div>
      </div>

      <motion.div layout className="min-h-[50vh]">
        <AnimatePresence mode="popLayout">
          {favoriteTools.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {favoriteTools.map((tool) => (
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
                <Heart className="w-8 h-8 text-zinc-400" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">No favorites yet</h3>
              <p className="text-zinc-500 dark:text-zinc-400 max-w-md">
                Click the heart icon on any tool card to add it to your favorites for quick access.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

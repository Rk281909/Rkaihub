import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ToolCard } from '../components/ui/ToolCard';
import { useAppContext } from '../context/AppContext';
import { Tool, Category } from '../data/tools';
import { Sparkles, Grid, List, Zap, Search } from 'lucide-react';
import { cn } from '../lib/utils';

const CATEGORIES: Category[] = [
  'Design & Visual',
  'Video Creation',
  'Writing',
  'Audio',
  'Presentations',
  'Coding',
  'Research',
  'Utilities & Productivity'
];

interface DashboardProps {
  searchQuery: string;
}

export const Dashboard: React.FC<DashboardProps> = ({ searchQuery }) => {
  const { tools } = useAppContext();
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredTools = useMemo(() => {
    return tools.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            tool.category.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || tool.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [tools, searchQuery, activeCategory]);

  const featuredTools = useMemo(() => tools.filter(t => t.featured).slice(0, 4), [tools]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      {!searchQuery && activeCategory === 'All' && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-semibold tracking-wide uppercase mb-6 border border-indigo-100 dark:border-indigo-500/20">
            <Sparkles className="w-4 h-4" />
            <span>Ultimate AI Tools Hub</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-6">
            Supercharge Your Workflow with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">50+ AI Tools</span>
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Access the world's most powerful artificial intelligence tools for design, writing, coding, and productivity—all from a single, lightning-fast dashboard.
          </p>
        </motion.div>
      )}

      {/* Featured Section */}
      {!searchQuery && activeCategory === 'All' && (
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Zap className="w-5 h-5 text-amber-500" />
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Featured Tools</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredTools.map(tool => (
              <ToolCard key={`featured-${tool.id}`} tool={tool} />
            ))}
          </div>
        </div>
      )}

      {/* Categories & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 sticky top-20 z-20 bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-md py-4 -mx-4 px-4 sm:mx-0 sm:px-0 border-y border-zinc-200/50 dark:border-zinc-800/50 sm:border-none sm:bg-transparent sm:backdrop-blur-none sm:py-0">
        <div className="flex overflow-x-auto pb-2 sm:pb-0 hide-scrollbar gap-2 items-center">
          <button
            onClick={() => setActiveCategory('All')}
            className={cn(
              "whitespace-nowrap px-4 py-2 rounded-xl text-sm font-medium transition-all",
              activeCategory === 'All'
                ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-md"
                : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800"
            )}
          >
            All Tools
          </button>
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "whitespace-nowrap px-4 py-2 rounded-xl text-sm font-medium transition-all",
                activeCategory === category
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-md"
                  : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="hidden sm:flex items-center gap-2 bg-white dark:bg-zinc-900 p-1 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
          <button
            onClick={() => setViewMode('grid')}
            className={cn(
              "p-2 rounded-lg transition-colors",
              viewMode === 'grid' ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white" : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
            )}
            title="Grid View"
          >
            <Grid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={cn(
              "p-2 rounded-lg transition-colors",
              viewMode === 'list' ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white" : "text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
            )}
            title="List View"
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Tools Grid */}
      <motion.div layout className="min-h-[50vh]">
        <AnimatePresence mode="popLayout">
          {filteredTools.length > 0 ? (
            <motion.div
              layout
              className={cn(
                "grid gap-6",
                viewMode === 'grid' 
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
                  : "grid-cols-1 lg:grid-cols-2"
              )}
            >
              {filteredTools.map((tool) => (
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
                <Search className="w-8 h-8 text-zinc-400" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">No tools found</h3>
              <p className="text-zinc-500 dark:text-zinc-400 max-w-md">
                We couldn't find any AI tools matching "{searchQuery}". Try adjusting your search or category filter.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

import React from 'react';
import { ExternalLink, Heart, Maximize2 } from 'lucide-react';
import { Tool } from '../../data/tools';
import { useAppContext } from '../../context/AppContext';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

interface ToolCardProps {
  tool: Tool;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const { favorites, toggleFavorite, addRecent } = useAppContext();
  const isFavorite = favorites.includes(tool.id);

  const handleOpenTool = (e: React.MouseEvent) => {
    e.stopPropagation();
    addRecent(tool.id);
    window.open(tool.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="group relative flex flex-col justify-between p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
    >
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(tool.id);
          }}
          className={cn(
            "p-2 rounded-full backdrop-blur-md bg-white/50 dark:bg-black/50 transition-colors",
            isFavorite ? "text-red-500" : "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
          )}
        >
          <Heart className={cn("w-4 h-4", isFavorite && "fill-current")} />
        </button>
      </div>

      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center overflow-hidden shrink-0 border border-zinc-200 dark:border-zinc-700">
          <img
            src={tool.logo}
            alt={`${tool.name} logo`}
            className="w-8 h-8 object-contain"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(tool.name)}&background=random`;
            }}
          />
        </div>
        <div>
          <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg leading-tight mb-1 line-clamp-1">
            {tool.name}
          </h3>
          <span className="inline-block px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xs font-medium">
            {tool.category}
          </span>
        </div>
      </div>

      <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 mb-6 flex-grow">
        {tool.description}
      </p>

      <div className="flex gap-2 mt-auto">
        <button
          onClick={handleOpenTool}
          className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-900 text-sm font-medium rounded-xl transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          Open Tool
        </button>
      </div>
    </motion.div>
  );
};

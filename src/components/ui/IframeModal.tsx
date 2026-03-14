import React, { useEffect } from 'react';
import { X, ExternalLink, Maximize2, Minimize2 } from 'lucide-react';
import { Tool } from '../../data/tools';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

interface IframeModalProps {
  tool: Tool | null;
  onClose: () => void;
}

export const IframeModal: React.FC<IframeModalProps> = ({ tool, onClose }) => {
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!tool) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className={cn(
            "bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col transition-all duration-300",
            isFullscreen ? "fixed inset-4 w-[calc(100vw-2rem)] h-[calc(100vh-2rem)]" : "w-full max-w-6xl h-[85vh]"
          )}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
            <div className="flex items-center gap-3">
              <img
                src={tool.logo}
                alt={tool.name}
                className="w-6 h-6 object-contain rounded-md"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(tool.name)}&background=random`;
                }}
              />
              <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{tool.name}</h2>
              <span className="px-2 py-1 text-xs font-medium rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                {tool.category}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                title="Open in new tab"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
              >
                {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
              </button>
              <div className="w-px h-6 bg-zinc-300 dark:bg-zinc-700 mx-1" />
              <button
                onClick={onClose}
                className="p-2 text-zinc-500 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="flex-1 bg-zinc-100 dark:bg-zinc-950 relative">
            <iframe
              src={tool.url}
              title={tool.name}
              className="absolute inset-0 w-full h-full border-0"
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

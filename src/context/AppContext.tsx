import React, { createContext, useContext, useState, useEffect } from 'react';
import { Tool, initialTools } from '../data/tools';

interface AppContextType {
  tools: Tool[];
  favorites: string[];
  recent: string[];
  toggleFavorite: (id: string) => void;
  addRecent: (id: string) => void;
  addTool: (tool: Tool) => void;
  removeTool: (id: string) => void;
  updateTool: (tool: Tool) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tools, setTools] = useState<Tool[]>(() => {
    const saved = localStorage.getItem('ai_tools');
    return saved ? JSON.parse(saved) : initialTools;
  });

  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('ai_favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const [recent, setRecent] = useState<string[]>(() => {
    const saved = localStorage.getItem('ai_recent');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('ai_tools', JSON.stringify(tools));
  }, [tools]);

  useEffect(() => {
    localStorage.setItem('ai_favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('ai_recent', JSON.stringify(recent));
  }, [recent]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    );
  };

  const addRecent = (id: string) => {
    setRecent(prev => {
      const filtered = prev.filter(rId => rId !== id);
      return [id, ...filtered].slice(0, 10); // Keep last 10
    });
  };

  const addTool = (tool: Tool) => {
    setTools(prev => [...prev, tool]);
  };

  const removeTool = (id: string) => {
    setTools(prev => prev.filter(t => t.id !== id));
    setFavorites(prev => prev.filter(fId => fId !== id));
    setRecent(prev => prev.filter(rId => rId !== id));
  };

  const updateTool = (updatedTool: Tool) => {
    setTools(prev => prev.map(t => t.id === updatedTool.id ? updatedTool : t));
  };

  return (
    <AppContext.Provider value={{ tools, favorites, recent, toggleFavorite, addRecent, addTool, removeTool, updateTool }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

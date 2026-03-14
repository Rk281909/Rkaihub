import React from 'react';
import { Mail, MapPin, Info, Globe } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 bg-indigo-100 dark:bg-indigo-500/10 rounded-xl text-indigo-600 dark:text-indigo-400">
          <Info className="w-6 h-6" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">About Me</h1>
          <p className="text-zinc-500 dark:text-zinc-400">Information about the creator of this platform.</p>
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm overflow-hidden">
        <div className="p-8">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-32 h-32 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-500 p-1 shrink-0">
              <div className="w-full h-full bg-white dark:bg-zinc-900 rounded-[12px] overflow-hidden">
                <img
                  src="https://ui-avatars.com/api/?name=Rakesh+kurmi&background=random&size=128"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Rakesh kurmi</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  Welcome to the AI Tools Hub! I created this platform to help people easily find and access the best artificial intelligence tools available on the web. My goal is to streamline your workflow and boost productivity by bringing all these amazing resources into one centralized dashboard.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                  <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                    <Mail className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Email Address</p>
                    <p className="font-medium">rakeshkurmi479@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                  <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                    <MapPin className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Address</p>
                    <p className="font-medium">suddhodhan-3 kapilvastu Nepal</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                  <div className="p-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
                    <Globe className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">Website</p>
                    <a href="https://kurmirk.carrd.co" target="_blank" rel="noopener noreferrer" className="font-medium text-indigo-600 dark:text-indigo-400 hover:underline">
                      kurmirk.carrd.co
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';

const SnipsDevHomepage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/api/placeholder/40/40" 
              alt="Snips.dev Logo" 
              className="h-10 w-10 mr-3 rounded" 
            />
            <h1 className="text-3xl font-bold text-white">snips.dev</h1>
          </div>
          
          <div className="flex items-center">
            <nav className="hidden md:flex mr-6 space-x-6">
              <a href="#" className="text-gray-300 hover:text-white">github</a>
              <a href="#" className="text-gray-300 hover:text-white">snips docs</a>
              <a href="#" className="text-gray-300 hover:text-white">my account</a>
            </nav>
            <img 
              src="/api/placeholder/40/40" 
              alt="Profile" 
              className="h-10 w-10 rounded-lg" 
            />
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-6 mt-2">my snips:</h2>
        
        {/* Grid of Snips */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Snip 1 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:shadow-lg transition duration-300 hover:-translate-y-1">
            <img 
              src="/api/placeholder/400/250" 
              alt="UI Dashboard Screenshot" 
              className="w-full"
            />
          </div>
          
          {/* Snip 2 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:shadow-lg transition duration-300 hover:-translate-y-1">
            <img 
              src="/api/placeholder/400/280" 
              alt="Payment Flow Diagram" 
              className="w-full" 
            />
          </div>
          
          {/* Snip 3 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:shadow-lg transition duration-300 hover:-translate-y-1">
            <img 
              src="/api/placeholder/400/250" 
              alt="Website Screenshot" 
              className="w-full" 
            />
          </div>
          
          {/* Snip 4 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:shadow-lg transition duration-300 hover:-translate-y-1">
            <img 
              src="/api/placeholder/400/300" 
              alt="AI Product Advertisement" 
              className="w-full" 
            />
          </div>
          
          {/* Snip 5 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:shadow-lg transition duration-300 hover:-translate-y-1">
            <img 
              src="/api/placeholder/400/250" 
              alt="AI Model Visualization" 
              className="w-full" 
            />
          </div>
          
          {/* Snip 6 */}
          <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:shadow-lg transition duration-300 hover:-translate-y-1">
            <img 
              src="/api/placeholder/400/280" 
              alt="Process Diagram" 
              className="w-full" 
            />
          </div>
        </div>
        
        {/* Featured Event/Ad Banner */}
        <div className="mt-12 mb-8">
          <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 p-4">
            <img 
              src="/api/placeholder/800/120" 
              alt="Developer Event Banner" 
              className="w-full rounded" 
            />
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-blue-500 p-6">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <p className="text-gray-400">:) copyright 2024, snips.dev co, made with <span className="text-blue-500">❤️</span></p>
            
            <div className="flex space-x-4">
              <button className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                <span className="text-lg">🖼️</span>
              </button>
              <button className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                <span className="text-lg">✏️</span>
              </button>
              <button className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                <span className="text-lg">⬆️</span>
              </button>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Bottom Toolbar - Mobile Only */}
      <div className="md:hidden flex justify-between items-center fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700 p-3">
        <button className="p-2">
          <span className="text-lg">📷</span>
        </button>
        <button className="p-2">
          <span className="text-lg">📁</span>
        </button>
        <button className="p-2 bg-blue-600 rounded-full h-12 w-12 flex items-center justify-center">
          <span className="text-lg">+</span>
        </button>
        <button className="p-2">
          <span className="text-lg">🔍</span>
        </button>
        <button className="p-2">
          <span className="text-lg">👤</span>
        </button>
      </div>
    </div>
  );
};

export default SnipsDevHomepage;

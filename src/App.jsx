import { useState } from 'react';
// import { mockUsers } from './data'; // පස්සේ පාවිච්චි කරමු

function App() {
  const [isErrorMode, setIsErrorMode] = useState(false);
  const [query, setQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans text-slate-900">
      <div className="mx-auto max-w-5xl">
        
        {/* Header Section */}
        <header className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              People Picker
            </h1>
            <p className="mt-1 text-slate-500">
              Search and select team members
            </p>
          </div>
          
          {/* Debug Toggle */}
          <div className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
            <label className="flex cursor-pointer items-center gap-2 text-sm font-medium text-slate-600">
              <input 
                type="checkbox" 
                checked={isErrorMode}
                onChange={(e) => setIsErrorMode(e.target.checked)}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              Simulate Error
            </label>
          </div>
        </header>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          
          {/* LEFT: Search & Results */}
          <div className="lg:col-span-2 space-y-4">
            
            {/* Selected Chips */}
            <div className="min-h-[60px] rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all focus-within:ring-2 focus-within:ring-indigo-500/20">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-gray-400 italic">No users selected...</span>
              </div>
            </div>

            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search by name..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 pl-11 text-base shadow-sm outline-none transition-all placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
              <svg className="absolute left-3.5 top-3.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Results List */}
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
              <ul className="max-h-[400px] overflow-y-auto divide-y divide-gray-100 p-2">
                <li className="cursor-pointer rounded-lg px-4 py-3 hover:bg-slate-50">
                   <div className="font-medium">Example User</div>
                   <div className="text-xs text-slate-500">user@example.com</div>
                </li>
              </ul>
              <div className="p-4 text-center text-sm text-gray-500">
                 Start typing to search...
              </div>
            </div>
          </div>

          {/* RIGHT: Details Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 h-fit rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-lg font-semibold text-slate-800">Details</h2>
              <div className="flex flex-col items-center justify-center py-8 text-center text-gray-400">
                <div className="mb-2 rounded-full bg-gray-100 p-3">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-sm">Highlight a user to see details</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
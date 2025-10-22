import { useState } from "react";
import { Search } from "lucide-react";
import CommandList from "@/components/CommandList";

interface SearchBarProps {
  onSearch: (city: string) => void;
  loading: boolean;
  recentSearches?: string[];
}

export default function SearchBar({
  onSearch,
  loading,
  recentSearches = [],
}: SearchBarProps) {
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input);
      setInput("");
      setIsOpen(false);
    }
  };

  const handleCommandSelect = (city: string) => {
    onSearch(city);
    setInput("");
    setIsOpen(false);
  };

  const suggestedCities = ["London", "New York", "Tokyo", "Paris", "Sydney"];

  return (
    <div className="w-full relative">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="relative flex items-center gap-2">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-neutral-300" />
            </div>
            <input
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                setIsOpen(true);
              }}
              onFocus={() => setIsOpen(true)}
              placeholder="Search for a city, e.g. New York"
              disabled={loading}
              className="w-full pl-12 pr-4 py-3 md:py-4 rounded-lg border-2 bg-neutral-800 hover:bg-neutral-700 border-transparent text-neutral-0 placeholder-neutral-300 focus:outline-none  transition-colors disabled:opacity-50 text-preset-5-medium"
            />
          </div>

          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="px-6 py-3 md:py-4 bg-blue-500 hover:bg-blue-700 text-neutral-0 font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-preset-5-medium"
          >
            Search
          </button>
        </div>
      </form>

      {isOpen && (
        <CommandList
          input={input}
          recentSearches={recentSearches}
          suggestedCities={suggestedCities}
          onSelect={handleCommandSelect}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

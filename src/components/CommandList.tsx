import { Clock } from "lucide-react";

interface CommandListProps {
  input: string;
  recentSearches: string[];
  suggestedCities: string[];
  onSelect: (city: string) => void;
  onClose: () => void;
}

export default function CommandList({
  input,
  recentSearches,
  suggestedCities,
  onSelect,
  onClose: _onClose,
}: CommandListProps) {
  // Filter suggested cities based on input
  const filteredSuggestions = suggestedCities.filter((city) =>
    city.toLowerCase().includes(input.toLowerCase())
  );

  // Show recent searches if input is empty, otherwise show filtered suggestions
  const showRecent = input.trim() === "";
  const items = showRecent ? recentSearches : filteredSuggestions;

  if (items.length === 0 && input.trim() !== "") {
    return null;
  }

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-neutral-700  border border-transparent rounded-lg shadow-lg z-10 overflow-hidden p-2">
      {/* Recent Searches Section */}
      {showRecent && recentSearches.length > 0 && (
        <>
          <div className="px-4 py-2 bg-neutral-600 border-b border-transparent ">
            <div className="flex items-center gap-2 text-xs bg-neutral-600 font-semibold">
              <Clock className="h-4 w-4" />
              Recent Searches
            </div>
          </div>
          {recentSearches.map((city) => (
            <button
              key={city}
              onClick={() => onSelect(city)}
              className="w-full text-left px-4 py-3 hover:bg-neutral-600/90 transition-colors flex items-center gap-3 text-neutral-0 rounded-lg"
            >
              {city}
            </button>
          ))}
        </>
      )}

      {/* Suggested Cities Section */}
      {filteredSuggestions.length > 0 && (
        <>
          {showRecent && recentSearches.length > 0 && (
            <div className="border-t border-slate-200 dark:border-slate-600" />
          )}
          {filteredSuggestions.map((city) => (
            <button
              key={city}
              onClick={() => onSelect(city)}
              className="w-full text-left px-4 py-3 hover:bg-neutral-600 hover:border-neutral-300 border border-solid border-transparent transition-colors flex items-center gap-3 text-neutral-0 rounded-lg"
            >
              {city}
            </button>
          ))}
        </>
      )}
    </div>
  );
}

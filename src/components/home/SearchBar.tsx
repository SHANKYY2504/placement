import { Search } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function SearchBar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/companies?search=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search by company name or domain..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input-institute w-full pl-12 pr-4 h-14 text-base shadow-sm"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 btn-institute px-6 py-2"
        >
          Search
        </button>
      </div>
    </form>
  );
}

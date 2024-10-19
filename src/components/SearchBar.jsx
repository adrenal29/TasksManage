const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const searchBarStyle = {
    width: '80%',
    maxWidth: '400px', 
    padding: '10px 15px',
    borderRadius: '25px', 
    border: '1px solid #ddd',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', 
    fontSize: '16px',
    outline: 'none',
    transition: 'border-color 0.3s, box-shadow 0.3s', 
  };

  const handleFocus = (e) => {
    e.target.style.borderColor = '#0070f3'; 
    e.target.style.boxShadow = '0 0 8px rgba(0, 112, 243, 0.5)'; 
  };

  const handleBlur = (e) => {
    e.target.style.borderColor = '#ddd'; 
    e.target.style.boxShadow = 'none'; 
  };

  return (
    <input
      type="text"
      placeholder="Search tasks..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={searchBarStyle}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

export default SearchBar;

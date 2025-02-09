export const Search = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");
  
    const handleChange = (e) => {
      setSearchTerm(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSearch(searchTerm);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Buscar..."
        />
        <button type="submit">Buscar</button>
      </form>
    );
  };
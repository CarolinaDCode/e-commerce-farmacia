import { IoSearchOutline } from 'react-icons/io5';
export const Search = () => {
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      console.log(e.currentTarget.search.value);
    }

    return (
      <form className="flex justify-center mb-20" onSubmit={handleSubmit}>
        <div className="flex relative p-l bg-gradiente-to-tr from-purple-600 to-blue-100">
          <input
            name="search"
            className='flex-1 p-2 pl-4 rounded-full'
            type="text"
            placeholder="Buscar..."
          />
        </div>
        <button>
          <IoSearchOutline className="w-5 h-5 mx-2"/>
        </button>
      </form>
    );
  };
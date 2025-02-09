import { IoSearchOutline } from 'react-icons/io5';
export const Search = () => {
  
    return (
      <form className="flex justify-center mb-20">
        <div className="flex relative p-l bg-gradiente-to-tr from-purple-600 to-blue-100">
          <input
            className='flex-1 p-2 pl-4 rounded-full'
            type="text"
            placeholder="Buscar..."
          />
        </div>
        <IoSearchOutline className="w-5 h-5 mx-2"/>
      </form>
    );
  };
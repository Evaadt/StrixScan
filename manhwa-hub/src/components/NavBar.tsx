import { Home, Search, User } from 'lucide-react'

function NavBar() {
  return (
    <nav className="flex flex-col justify-around items-center h-full py-6">
      <button className="flex flex-col items-center text-gray-600 hover:text-blue-500">
        <Home size={24} />
        <span className="text-xs mt-1">Início</span>
      </button>
      <button className="flex flex-col items-center text-gray-600 hover:text-blue-500">
        <Search size={24} />
        <span className="text-xs mt-1">Buscar</span>
      </button>
      <button className="flex flex-col items-center text-gray-600 hover:text-blue-500">
        <User size={24} />
        <span className="text-xs mt-1">Perfil</span>
      </button>
    </nav>
  );
}


export default NavBar
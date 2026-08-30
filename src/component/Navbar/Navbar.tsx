import { useState } from "react";
import { VscSearch } from "react-icons/vsc";
import { Link } from "react-router-dom";

interface MenuItem {
  label: string;
  subitems?: string[];
}

const menuItems: MenuItem[] = [
  { label: "Esteiras", subitems: ["Residenciais", "Profissionais", "Dobráveis"] },
  { label: "Bicicletas", subitems: ["Ergométricas", "Spinning", "Horizontais"] },
  { label: "Elípticos", subitems: ["Magnéticos", "Eletromagnéticos"] },
  { label: "Escadas", subitems: ["Ergométricas", "Comerciais"] },
  { label: "Estações multifuncionais", subitems: ["Residenciais", "Profissionais"] },
  { label: "Máquinas", subitems: ["Musculação", "Cardio"] },
  { label: "Plataformas e remos", subitems: ["Remos Secos", "Plataformas Vibratórias"] },
  { label: "Bancos e cadeiras", subitems: ["Bancos Ajustáveis", "Cadeiras Extensoras"] },
  { label: "Acessórios", subitems: ["Halteres", "Kettlebells", "Anilhas"] },
  { label: "Showroom" },
  { label: "Outlet" }
];

export default function Navbar() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-opacity-90 bg-neutral-800 text-white">
      <div className="flex justify-between items-center  px-10">
        <img src="./src/assets/img/logo.png" alt="Logo" className="w-60 h-18" />

        <div className="flex items-center w-1/2">
          <div className="flex items-center w-full bg-neutral-600 rounded-md px-2 py-1">
            <input
              type="text"
              placeholder="Search..."
              className="text-lg border border-transparent py-2 px-2 text-white w-full placeholder:text-gray-400 focus:outline-none bg-transparent"
            />
            <button className="hover:bg-red-700 text-white px-4 py-2 rounded-md transition duration-300">
              <VscSearch className="w-6 h-8" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/login" className="select-none text-white px-4 py-2  rounded-md border border-red-600 hover:bg-red-600 transition duration-300">
            Login
          </Link>
          <Link to="/cadastrar " className="select-none text-white px-4 py-2 rounded-md border border-red-600 hover:bg-red-600 transition duration-300">
            Cadastrar
          </Link>
        </div>
      </div>

      <hr className="border-neutral-700" />

      <div className="flex justify-center space-x-2 relative">
        {menuItems.map((item, index) => (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={() => setOpenIndex(index)}
            onMouseLeave={() => setOpenIndex(null)}
          >
            <p className="select-none text-white px-3 py-2 cursor-pointer hover:bg-white hover:text-black transition duration-300">
              {item.label}
            </p>

            {item.subitems && openIndex === index && (
              <div className="absolute left-0 top-full w-48 bg-neutral-900 border border-neutral-700 rounded-b-md shadow-xl z-50 py-2">
                {item.subitems.map((subitem) => (
                  <Link
                    key={subitem}
                    to="#"
                    className="block px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition duration-150"
                  >
                    {subitem}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
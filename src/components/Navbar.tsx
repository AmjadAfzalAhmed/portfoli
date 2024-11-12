import Link from "next/link";

function Navbar() {
  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-8 lg:px-16 h-16 shadow-md">
      <h1 className="text-lg sm:text-xl lg:text-2xl text-[#0e2431] font-extrabold transition ease-in duration-400 hover:text-[#fc8c05]">
        AmjadCreations
      </h1>
      <nav>
        <ul className="hidden sm:flex space-x-4 lg:space-x-8">
          <li className="text-sm sm:text-base lg:text-xl text-[#0e2431] font-semibold transition ease-in duration-400 hover:text-[#011aff] hover:border-b-2 hover:border-[#011aff] p-2">
            <Link href="/">Home</Link>
          </li>
          <li className="text-sm sm:text-base lg:text-xl text-[#0e2431] font-semibold transition ease-in duration-400 hover:text-[#011aff] hover:border-b-2 hover:border-[#011aff] p-2">
            <Link href="/about">About</Link>
          </li>
          <li className="text-sm sm:text-base lg:text-xl text-[#0e2431] font-semibold transition ease-in duration-400 hover:text-[#011aff] hover:border-b-2 hover:border-[#011aff] p-2">
            <Link href="/skills">Skills</Link>
          </li>
          <li className="text-sm sm:text-base lg:text-xl text-[#0e2431] font-semibold transition ease-in duration-400 hover:text-[#011aff] hover:border-b-2 hover:border-[#011aff] p-2">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      {/* Mobile Menu Icon */}
      <div className="sm:hidden">
        {/* This can be a hamburger menu icon */}
        <button aria-label="Open Menu" className="text-[#0e2431] text-2xl">
          ☰
        </button>
      </div>
    </header>
  );
}

export default Navbar;

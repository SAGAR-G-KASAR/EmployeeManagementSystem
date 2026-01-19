import { Link } from "react-router-dom";
import Logo from "../logo/Union.svg";

function Header() {
  return (
    <header className="sticky top-0 z-50 h-16 w-full bg-white/10 backdrop-blur-lg border-b border-white/10">
      <div className="mx-auto flex h-full max-w-7xl  items-center px-3  lg:px-6">
        {/* Logo */}
        <img
          src={Logo}
          alt="Logo"
          className="h-5 md:h-8 w-auto hover:sky-400 "
        />

        {/* Navigation */}
        <nav className="absolute left-1/2 -translate-x-1/2">
          <ul className="flex gap-6">
            <li>
              <Link
                to="/home"
                className="text-white font-bold text-lg lg:text-xl hover:text-sky-400 transition"
              >
                Home
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

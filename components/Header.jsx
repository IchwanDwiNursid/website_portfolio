import Link from "next/link.js";
import { Button } from "./ui/button.jsx";
import Nav from "./Nav.jsx";
import MobileNav from "./MobileNav.jsx";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            IchwanDev <span className="text-accent">.</span>
          </h1>
        </Link>
        {/* desktop nav and button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* mobile-nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;

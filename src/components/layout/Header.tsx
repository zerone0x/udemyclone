import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ShoppingCart, Menu, Search } from 'lucide-react';

interface NavLink {
  text: string;
  href?: string; // Optional href if these become actual links
}

const navLinks: NavLink[] = [
  { text: 'Categories' },
  { text: 'Business' },
  { text: 'Development' },
  { text: 'IT & Software' },
];

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="container-course py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu />
            </Button>

            <a href="/" className="font-bold text-2xl text-udemy-primary">
              Learnify
            </a>

            <nav className="hidden lg:block">
              <ul className="flex space-x-1">
                {navLinks.map((link) => (
                  <li key={link.text}>
                    {/* If using href, change Button to an <a> tag or use routing library link */}
                    <Button variant="ghost" className="text-sm">
                      {link.text}
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="hidden md:flex items-center flex-1 max-w-xl mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search for anything"
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search />
            </Button>

            <Button variant="ghost" size="icon">
              <ShoppingCart />
            </Button>

            <div className="hidden sm:block">
              <Button variant="outline" className="border-black text-black hover:bg-gray-100">Log in</Button>
            </div>

            <div className="hidden sm:block">
              <Button className="bg-black text-white hover:bg-gray-800">Sign up</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

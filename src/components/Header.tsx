import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white">K</span>
            </div>
            <span>KIKI Inc.</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-blue-600 transition-colors">
              홈
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-600 transition-colors">
              회사소개
            </button>
            <button onClick={() => scrollToSection('services')} className="hover:text-blue-600 transition-colors">
              서비스
            </button>
            <button onClick={() => scrollToSection('team')} className="hover:text-blue-600 transition-colors">
              팀
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-600 transition-colors">
              연락처
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('home')} className="text-left hover:text-blue-600 transition-colors">
                홈
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left hover:text-blue-600 transition-colors">
                회사소개
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left hover:text-blue-600 transition-colors">
                서비스
              </button>
              <button onClick={() => scrollToSection('team')} className="text-left hover:text-blue-600 transition-colors">
                팀
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-blue-600 transition-colors">
                연락처
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

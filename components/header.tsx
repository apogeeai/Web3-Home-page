"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50">
      <div className="absolute inset-0 bg-white/70 backdrop-blur-lg border-b border-white/20"></div>
      <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
              <MessageCircle className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">VEEPN</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <AuthButtons />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <div className="space-y-2">
              <span className={`block w-6 h-0.5 bg-gray-600 transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-600 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-600 transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 md:hidden glass-card rounded-b-3xl py-4">
            <div className="flex flex-col space-y-4 px-4">
              <NavLinks mobile />
              <div className="flex flex-col space-y-2">
                <AuthButtons mobile />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function NavLinks({ mobile }: { mobile?: boolean }) {
  const linkClass = mobile
    ? "text-gray-600 hover:text-blue-600 block py-2 transition-colors"
    : "text-gray-600 hover:text-blue-600 transition-colors";

  return (
    <>
      <Link href="/features" className={linkClass}>Features</Link>
      <Link href="/pricing" className={linkClass}>Pricing</Link>
      <Link href="/about" className={linkClass}>About</Link>
      <Link href="/contact" className={linkClass}>Contact</Link>
    </>
  );
}

function AuthButtons({ mobile }: { mobile?: boolean }) {
  return (
    <>
      <Button 
        variant="ghost" 
        className={`rounded-xl ${mobile ? "w-full justify-center" : ""}`}
      >
        Sign in
      </Button>
      <Button 
        className={`bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 rounded-xl ${mobile ? "w-full justify-center" : ""}`}
      >
        Get Started
      </Button>
    </>
  );
}
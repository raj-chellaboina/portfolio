'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Github, Linkedin, Menu } from 'lucide-react';
import { personalData, navigationLinks } from '@/lib/data';
import { LeetCodeIcon, GfgIcon } from '@/components/icons';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = (
    <>
      {navigationLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="font-medium text-foreground/80 hover:text-primary transition-colors"
        >
          {link.label}
        </a>
      ))}
    </>
  );

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="font-headline text-2xl font-bold text-primary">
          {personalData.name.split(' ')[1]}
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems}
        </nav>
        <div className="hidden md:flex items-center gap-2">
           <Button variant="outline" size="sm" asChild>
            <a href={personalData.resumeUrl} download>Download CV</a>
          </Button>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-6 mt-8">
                {navItems}
                <Button variant="outline" asChild>
                  <a href={personalData.resumeUrl} download>Download CV</a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;

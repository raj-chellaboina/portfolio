import React from 'react';
import { personalData } from '@/lib/data';

const Footer = () => {
  return (
    <footer className="w-full py-6 mt-16">
      <div className="container mx-auto text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} {personalData.name}. Handcrafted by me.</p>
      </div>
    </footer>
  );
};

export default Footer;

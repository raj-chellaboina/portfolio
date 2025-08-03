import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin } from 'lucide-react';
import { personalData } from '@/lib/data';
import { LeetCodeIcon, GfgIcon } from '@/components/icons';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="py-24 sm:py-32 md:py-40 bg-muted/30">
      <div className="container mx-auto text-center px-4 md:px-6">
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-primary">
          {personalData.name}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-foreground/80">
          {personalData.title}
        </p>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          I build efficient and scalable web applications. Passionate about problem-solving and crafting elegant solutions in code.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild>
            <a href="#contact">Contact Me</a>
          </Button>
          <Button variant="secondary" asChild>
            <a href="#projects">View My Work</a>
          </Button>
        </div>
        <div className="mt-10 flex justify-center gap-6">
          <Link href={personalData.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link href={personalData.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link href={personalData.socials.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
            <LeetCodeIcon className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <Link href={personalData.socials.gfg} target="_blank" rel="noopener noreferrer" aria-label="GeeksforGeeks">
            <GfgIcon className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

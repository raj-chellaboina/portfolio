import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { personalData } from '@/lib/data';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-3xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-3xl sm:text-4xl text-primary">About Me</CardTitle>
            <CardDescription className="pt-2 text-base">A little bit about my journey</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-center text-lg text-muted-foreground leading-relaxed">
              {personalData.about}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;

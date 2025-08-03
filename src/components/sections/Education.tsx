import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { education } from '@/lib/data';

const Education = () => {
  return (
    <section id="education" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary">Education</h2>
          <p className="text-lg text-muted-foreground mt-2">My academic background.</p>
        </div>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-3 sm:left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2"></div>
          {education.map((edu, index) => (
            <div key={index} className="relative mb-8">
              <div className="absolute left-3 sm:left-1/2 top-1.5 w-3 h-3 bg-primary rounded-full -translate-x-1/2 border-4 border-background"></div>
              <Card className="ml-8 sm:ml-0 sm:w-5/12 sm:ml-auto even:sm:mr-auto sm:relative shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <p className="text-sm text-muted-foreground">{edu.duration}</p>
                  <CardTitle className="text-xl">{edu.degree}</CardTitle>
                  <CardDescription className="font-semibold text-primary">{edu.institution}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{edu.result}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

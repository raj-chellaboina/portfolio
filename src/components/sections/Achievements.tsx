import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { achievements } from '@/lib/data';
import { Award, BrainCircuit, Users, Code } from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  Code: Code,
  Award: Award,
  Users: Users,
  'BrainCircuit': BrainCircuit,
};


const Achievements = () => {
  return (
    <section id="achievements" className="py-16 sm:py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary">Achievements & Certifications</h2>
          <p className="text-lg text-muted-foreground mt-2">Milestones and recognitions in my journey.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {achievements.map((achievement, index) => {
            const Icon = iconMap[achievement.icon] || Award;
            return (
              <Card key={index} className="flex flex-col sm:flex-row items-start p-6 gap-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex-shrink-0">
                  <Badge variant="secondary" className="p-3 rounded-lg bg-secondary">
                    <Icon className="h-8 w-8 text-primary" />
                  </Badge>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { skills } from '@/lib/data';
import { Code, Server, Database, GitBranch, Cloud } from 'lucide-react';
import { JavaIcon, SpringIcon, ReactIcon, PostgreSqlIcon, FirebaseIcon, AwsIcon } from '../icons';

const iconMap: { [key: string]: React.ElementType } = {
  Frontend: Code,
  Backend: Server,
  Databases: Database,
  Tools: GitBranch,
  Deployment: Cloud,
  Java: JavaIcon,
  'Spring Boot': SpringIcon,
  ReactJS: ReactIcon,
  PostgreSQL: PostgreSqlIcon,
  Firebase: FirebaseIcon,
  AWS: AwsIcon
};

const SkillCard = ({ name, icon }: { name: string, icon: string }) => {
  const Icon = iconMap[icon] || Code;
  return (
    <div className="flex flex-col items-center justify-center p-4 border rounded-lg bg-card hover:bg-accent transition-colors duration-200 gap-2">
      <Icon className="h-8 w-8 text-primary" />
      <span className="text-sm font-medium text-center">{name}</span>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary">My Skillset</h2>
          <p className="text-lg text-muted-foreground mt-2">Technologies I'm proficient with.</p>
        </div>
        <div className="space-y-12">
          {Object.entries(skills).map(([category, skillList]) => (
            <Card key={category} className="shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  {React.createElement(iconMap[category] || Code, { className: 'h-6 w-6 text-primary' })}
                  {category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {skillList.map((skill) => (
                    <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

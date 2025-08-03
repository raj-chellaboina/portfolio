'use client';
import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { personalData } from '@/lib/data';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const name = formData.get('name') as string;
      const email = formData.get('email') as string;
      const message = formData.get('message') as string;

      if(!name || !email || !message) {
        toast({
          title: "Form Error",
          description: "Please fill out all fields.",
          variant: "destructive",
        })
        return;
      }
      
      const mailtoLink = `mailto:${personalData.email}?subject=Contact from ${name} via Portfolio&body=${encodeURIComponent(message)}`;
      window.location.href = mailtoLink;
      
      toast({
        title: "Redirecting...",
        description: "Your email client is opening.",
      });

      formRef.current.reset();
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-primary">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mt-2">I'm open to discussing new projects and opportunities.</p>
        </div>
        <Card className="max-w-4xl mx-auto shadow-lg">
          <div className="grid md:grid-cols-2">
            <CardContent className="p-8">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <Input id="name" name="name" placeholder="Your Name" required />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <Input id="email" name="email" type="email" placeholder="Your Email" required />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <Textarea id="message" name="message" placeholder="Your Message" required />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
            <div className="bg-muted/50 p-8 rounded-b-lg md:rounded-r-lg md:rounded-bl-none">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-semibold">Contact Information</CardTitle>
                <CardDescription>Find me here</CardDescription>
              </CardHeader>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href={`mailto:${personalData.email}`} className="hover:text-primary">{personalData.email}</a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>{personalData.phone}</span>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <span>{personalData.location}</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-hero-bg relative">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center md:justify-start animate-slide-in-left">
            <Avatar className="h-64 w-64 border-4 border-primary/20">
              <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" />
              <AvatarFallback className="text-6xl">YN</AvatarFallback>
            </Avatar>
          </div>

          <div className="space-y-6 text-center md:text-left animate-slide-in-right">
            <p className="text-muted-foreground text-lg">Hi, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              Your Name
            </h1>
            <h2 className="text-2xl md:text-3xl text-primary font-semibold">
              Full Stack Software Engineer
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              I build exceptional digital experiences with the MERN stack, Flutter, and
              modern web technologies. Specialized in creating scalable applications
              and beautiful user interfaces.
            </p>

            <div className="flex gap-4 justify-center md:justify-start">
              <Button onClick={() => scrollToSection("contact")} size="lg" className="bg-primary hover:bg-primary/90">
                Get In Touch
              </Button>
              <Button onClick={() => scrollToSection("projects")} size="lg" variant="outline">
                View My Work
              </Button>
            </div>

            <div className="flex gap-4 justify-center md:justify-start pt-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="h-8 w-8 text-muted-foreground" />
      </button>
    </section>
  );
};

export default Hero;

import { Card } from "@/components/ui/card";
import { Code2, Palette, Smartphone } from "lucide-react";

const About = () => {
  const expertise = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description:
        "Expertise in MERN stack, building scalable web applications from database to deployment.",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Proficient in Figma, creating intuitive and beautiful user interfaces that users love.",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Building cross-platform mobile apps with Flutter and Dart for iOS and Android.",
    },
  ];

  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "5+", label: "Years Experience" },
    { value: "30+", label: "Happy Clients" },
    { value: "10+", label: "Technologies" },
  ];

  return (
    <section id="about" className="min-h-screen py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate Software Engineer with a strong foundation in full-stack development
            and UI/UX design. I love turning complex problems into simple, beautiful, and intuitive
            solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {expertise.map((item, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-card-border hover:border-primary/50 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <item.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

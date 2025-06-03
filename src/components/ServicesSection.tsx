import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const ServicesSection = () => {
  const services = [
    {
      icon: "Code",
      title: "Разработка ПО",
      description:
        "Веб-приложения, мобильные приложения, системы автоматизации",
      technologies: ["React", "Node.js", "Python", "Flutter"],
    },
    {
      icon: "Cpu",
      title: "Электронные устройства",
      description: "IoT решения, встраиваемые системы, прототипирование",
      technologies: ["Arduino", "Raspberry Pi", "PCB", "3D печать"],
    },
    {
      icon: "Smartphone",
      title: "Мобильные решения",
      description: "Нативные и кроссплатформенные приложения",
      technologies: ["iOS", "Android", "React Native", "Flutter"],
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 font-montserrat">
            Наши услуги
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Полный цикл разработки от идеи до готового продукта
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={service.icon as any}
                    size={32}
                    className="text-purple-600"
                  />
                </div>
                <CardTitle className="text-2xl font-bold text-slate-800 font-montserrat">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-lg text-slate-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {service.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-purple-50 text-purple-700"
                    >
                      {tech}
                    </Badge>
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

export default ServicesSection;

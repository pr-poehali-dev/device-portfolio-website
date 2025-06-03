import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const TeamSection = () => {
  const team = [
    {
      name: "Алексей Иванов",
      role: "Senior Frontend Developer",
      experience: "7+ лет",
      skills: ["React", "TypeScript", "Node.js"],
      avatar: "👨‍💻",
    },
    {
      name: "Мария Петрова",
      role: "Electronics Engineer",
      experience: "5+ лет",
      skills: ["IoT", "Arduino", "PCB Design"],
      avatar: "👩‍🔬",
    },
    {
      name: "Дмитрий Сидоров",
      role: "Mobile Developer",
      experience: "6+ лет",
      skills: ["Flutter", "React Native", "iOS"],
      avatar: "👨‍💼",
    },
  ];

  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 font-montserrat">
            Наша команда
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Опытные специалисты с проверенной экспертизой
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {team.map((member, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
            >
              <CardHeader>
                <div className="text-6xl mb-4">{member.avatar}</div>
                <CardTitle className="text-xl font-bold text-slate-800 font-montserrat">
                  {member.name}
                </CardTitle>
                <p className="text-purple-600 font-semibold">{member.role}</p>
                <Badge variant="outline" className="mx-auto w-fit">
                  {member.experience}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      className="bg-purple-600 text-white"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-4 font-montserrat">
            Готовы обсудить ваш проект?
          </h3>
          <p className="text-slate-600 mb-6">
            Свяжитесь с нами для бесплатной консультации
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2">
              <Icon name="Mail" size={20} className="text-purple-600" />
              <span className="text-slate-700">hello@techcraft.ru</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Phone" size={20} className="text-purple-600" />
              <span className="text-slate-700">+7 (495) 123-45-67</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

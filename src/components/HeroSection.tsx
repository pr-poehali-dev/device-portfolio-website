import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 bg-gradient-to-br from-purple-900 via-slate-900 to-slate-800">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <Icon name="Zap" size={64} className="text-purple-400 mx-auto mb-6" />
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-montserrat">
            FORWARD R&D{" "}
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto text-left">
            Компания ООО "ФОРВАРД Рисерч энд Девелопмент" Разработка решений для
            автоматизации Системы промышленной телематики Системы предиктивной
            диагностики Техническая поддержка и сервис сложного оборудования
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg"
          >
            <Icon name="MessageCircle" size={20} />
            Обсудить проект
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 text-lg"
          >
            <Icon name="Eye" size={20} />
            Наши работы
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

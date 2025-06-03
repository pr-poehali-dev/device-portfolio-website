import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Zap" size={32} className="text-purple-400" />
              <h3 className="text-2xl font-bold font-montserrat">TechCraft</h3>
            </div>
            <p className="text-slate-400 mb-4">
              Создаём инновационные решения в области программного обеспечения и
              электроники
            </p>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-400 hover:text-purple-400"
              >
                <Icon name="Github" size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-400 hover:text-purple-400"
              >
                <Icon name="Linkedin" size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-400 hover:text-purple-400"
              >
                <Icon name="Mail" size={20} />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-montserrat">
              Услуги
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>Веб-разработка</li>
              <li>Мобильные приложения</li>
              <li>IoT решения</li>
              <li>Консультации</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 font-montserrat">
              Контакты
            </h4>
            <div className="space-y-3 text-slate-400">
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>Москва, Россия</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={16} />
                <span>Пн-Пт 9:00-18:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 TechCraft. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

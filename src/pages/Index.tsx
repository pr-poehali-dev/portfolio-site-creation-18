import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'qualifications', 'contacts'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-primary">Портфолио</h1>
            <div className="flex gap-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'Обо мне' },
                { id: 'qualifications', label: 'Квалификация' },
                { id: 'contacts', label: 'Контакты' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    activeSection === item.id ? 'text-accent' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 animate-fade-in">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 text-primary">
                Образование через <span className="text-accent">опыт</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Более 3 лет помогаю студентам раскрывать потенциал и достигать академических высот. 
                Специализируюсь на методиках активного обучения и персонализированном подходе.
              </p>
              <Button 
                onClick={() => scrollToSection('contacts')} 
                className="bg-accent hover:bg-accent/90 text-white"
                size="lg"
              >
                Связаться со мной
              </Button>
            </div>
            <div className="flex justify-center">
              <img
                src="https://cdn.poehali.dev/files/f75b547a-3fd3-4d91-a9ec-a1a0fc455da6.jpg"
                alt="Преподаватель"
                className="rounded-lg shadow-2xl w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary">Обо мне</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="GraduationCap" className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Образование</h3>
                <p className="text-muted-foreground">
                  Череповецкий государственный университет. 
                  Специализация: преподаватель иностранных языков.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Briefcase" className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Опыт</h3>
                <p className="text-muted-foreground">
                  3+ года преподаватель и репетитор английского языка. 
                  Автор учебного пособия по подготовке к ОГЭ.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Heart" className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Философия</h3>
                <p className="text-muted-foreground">
                  Верю, что каждый студент уникален. Моя задача — найти подход, 
                  который раскроет его сильные стороны.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="qualifications" className="min-h-screen flex items-center py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary">Квалификация</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Icon name="BookOpen" className="text-accent" size={28} />
                Ключевые навыки
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { name: 'Методика преподавания', level: 95 },
                  { name: 'Цифровые технологии', level: 90 },
                  { name: 'Психология обучения', level: 88 },
                  { name: 'Проектная работа', level: 92 },
                  { name: 'Научное руководство', level: 85 },
                  { name: 'Публичные выступления', level: 93 },
                ].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Icon name="Trophy" className="text-accent" size={28} />
                Достижения
              </h3>
              <div className="space-y-3">
                {[
                  'Автор учебного пособия для подготовки к ОГЭ',
                ].map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-accent mt-1 flex-shrink-0" size={20} />
                    <p className="text-muted-foreground">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="min-h-screen flex items-center py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary">Контакты</h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Свяжитесь со мной</h3>
              <p className="text-muted-foreground mb-8">
                Буду рад ответить на ваши вопросы о методике преподавания, 
                консультациях или сотрудничестве.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name="Mail" className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">daturkina@yandex.ru</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name="Phone" className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Телефон</p>
                    <p className="font-medium">+7 (999) 123-45-67</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name="MapPin" className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Местоположение</p>
                    <p className="font-medium">Череповец, Россия</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <form className="space-y-4" onSubmit={(e) => {
                  e.preventDefault();
                  alert('Форма отправлена! Спасибо за ваше сообщение.');
                }}>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                    <Input placeholder="Введите ваше имя" required />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="your@email.com" required />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-2 block">Сообщение</label>
                    <Textarea 
                      placeholder="Напишите ваше сообщение..." 
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white">
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">© 2024 Портфолио преподавателя. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
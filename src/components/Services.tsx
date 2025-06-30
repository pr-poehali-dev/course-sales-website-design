import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "SEO",
      subtitle: "(поисковая оптимизация)",
      description:
        "Увеличиваем органический трафик и улучшаем позиции сайта в поисковых системах",
      bgColor: "bg-black",
      textColor: "text-white",
      buttonColor: "bg-lime-400 text-black hover:bg-lime-500",
      visual: "gradient-mesh",
    },
    {
      id: 2,
      title: "SMM",
      subtitle: "",
      description:
        "Продвижение в социальных сетях и создание вовлекающего контента",
      bgColor: "bg-lime-400",
      textColor: "text-black",
      buttonColor: "bg-black text-white hover:bg-gray-800",
      visual: "social-icons",
    },
    {
      id: 3,
      title: "Контент-маркетинг",
      subtitle: "",
      description:
        "Создание полезного контента для привлечения и удержания аудитории",
      bgColor: "bg-gray-100",
      textColor: "text-black",
      buttonColor: "bg-black text-white hover:bg-gray-800",
      visual: "content-blocks",
    },
    {
      id: 4,
      title: "Контекстная реклама",
      subtitle: "",
      description:
        "Настройка и оптимизация рекламных кампаний для максимального ROI",
      bgColor: "bg-lime-400",
      textColor: "text-black",
      buttonColor: "bg-black text-white hover:bg-gray-800",
      visual: "ad-metrics",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-black mb-4">
            Получить результат
            <br />
            <span className="text-lime-400">возможно уже сегодня!</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Наши эксперты готовы поделиться опытом в популярных областях
            цифрового маркетинга. Выберите направление и начните обучение уже
            сегодня.
          </p>
          <Button
            className="mt-8 bg-black text-white hover:bg-gray-800"
            size="lg"
          >
            Заказать консультацию
          </Button>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="bg-lime-400 px-6 py-3 rounded-full text-black font-semibold">
            МЫ
          </div>
          <div className="bg-gray-100 px-6 py-3 rounded-full text-black font-semibold flex items-center">
            <Icon name="Users" size={20} className="mr-2" />
            ПРОФЕССИОНАЛЫ
          </div>
          <div className="bg-black px-6 py-3 rounded-full text-white font-semibold">
            ВЕДУЩИЕ
          </div>
          <div className="bg-gray-100 px-6 py-3 rounded-full text-black font-semibold">
            К РЕЗУЛЬТАТУ
          </div>
        </div>

        {/* Services Header */}
        <div className="mb-12">
          <h3 className="font-heading text-3xl font-bold text-black mb-2">
            Наши услуги
          </h3>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.id}
              className={`${service.bgColor} border-0 rounded-3xl overflow-hidden group hover:scale-105 transition-transform duration-300`}
            >
              <CardContent className="p-6 h-80 flex flex-col justify-between relative">
                {/* Background Visual Elements */}
                <div className="absolute inset-0 opacity-10">
                  {service.visual === "gradient-mesh" && (
                    <div className="w-full h-full bg-gradient-to-br from-lime-400 via-transparent to-gray-600 rounded-3xl"></div>
                  )}
                  {service.visual === "social-icons" && (
                    <div className="flex items-center justify-center h-full">
                      <Icon
                        name="MessageCircle"
                        size={60}
                        className="absolute top-4 right-4 opacity-20"
                      />
                      <Icon
                        name="Heart"
                        size={40}
                        className="absolute bottom-8 left-8 opacity-20"
                      />
                      <Icon name="Share2" size={50} className="opacity-20" />
                    </div>
                  )}
                  {service.visual === "content-blocks" && (
                    <div className="space-y-4 p-4">
                      <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                      <div className="h-8 bg-lime-400 rounded w-full opacity-30"></div>
                      <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                    </div>
                  )}
                  {service.visual === "ad-metrics" && (
                    <div className="flex items-center justify-center h-full">
                      <Icon
                        name="TrendingUp"
                        size={80}
                        className="opacity-20"
                      />
                      <Icon
                        name="Target"
                        size={40}
                        className="absolute top-6 right-6 opacity-20"
                      />
                      <Icon
                        name="BarChart3"
                        size={50}
                        className="absolute bottom-6 left-6 opacity-20"
                      />
                    </div>
                  )}
                </div>

                <div className="relative z-10">
                  <div className="mb-4">
                    <h4
                      className={`font-heading text-2xl font-bold ${service.textColor} mb-1`}
                    >
                      {service.title}
                    </h4>
                    {service.subtitle && (
                      <p className={`text-sm ${service.textColor} opacity-70`}>
                        {service.subtitle}
                      </p>
                    )}
                  </div>

                  <p
                    className={`text-sm ${service.textColor} mb-6 leading-relaxed`}
                  >
                    {service.description}
                  </p>
                </div>

                <div className="relative z-10">
                  <Button
                    className={`w-full ${service.buttonColor} rounded-full font-semibold`}
                  >
                    Смотреть курсы
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </div>

                {/* Decorative Number */}
                <div
                  className={`absolute top-4 right-4 w-8 h-8 rounded-full ${service.id % 2 === 0 ? "bg-lime-400" : "bg-white"} flex items-center justify-center text-black font-bold text-sm z-10`}
                >
                  {service.id}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-black rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-lime-400/20 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="font-heading text-3xl font-bold mb-4">
                Подпишись на нас, чтобы узнать больше
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                о том, как мы можем помочь вашему бизнесу
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button className="bg-lime-400 text-black hover:bg-lime-500 font-semibold">
                  В контакт
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black"
                >
                  Подписаться
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

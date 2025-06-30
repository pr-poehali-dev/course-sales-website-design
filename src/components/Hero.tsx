import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background 3D Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-lime-400 to-lime-600 rounded-full blur-xl"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-lime-300 to-lime-500 rounded-full blur-lg"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-8">
            <div className="text-lime-400 font-heading font-bold text-xl">
              DigitalDynasty
            </div>
            <div className="hidden md:flex space-x-6 text-sm">
              <a href="#" className="hover:text-lime-400 transition">
                Главная
              </a>
              <a href="#" className="hover:text-lime-400 transition">
                Методы обучения
              </a>
              <a href="#" className="hover:text-lime-400 transition">
                Курсы
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-gray-700 text-white hover:bg-gray-800"
            >
              Регистрация
            </Button>
            <Button className="bg-lime-400 text-black hover:bg-lime-500">
              Войти
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-700 text-white"
            >
              Поддержка
            </Button>
          </div>
        </nav>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-heading text-5xl lg:text-6xl font-bold leading-tight">
                Мы - эксперты 🚀
                <br />
                <span className="text-lime-400">в области продвижения</span>
                <br />
                бизнеса в Интернете
              </h1>

              <p className="text-gray-300 text-lg max-w-lg">
                Наша команда профессионалов поможет вам освоить цифровые
                технологии и достичь успеха в онлайн-образовании.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-lime-400 text-black hover:bg-lime-500 font-semibold"
              >
                Взять курс
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black"
              >
                Узнать больше
              </Button>
            </div>

            {/* Statistics */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 bg-gray-400 rounded-full border-2 border-black"></div>
                <div className="w-10 h-10 bg-gray-500 rounded-full border-2 border-black"></div>
                <div className="w-10 h-10 bg-gray-600 rounded-full border-2 border-black"></div>
              </div>
              <div className="text-sm">
                <div className="font-semibold">500+ довольных клиентов</div>
                <div className="text-gray-400">
                  оценили наши курсы на 5 звёзд
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Visual Elements */}
          <div className="relative">
            {/* Main 3D Card */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 bg-lime-400 rounded-full"></div>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                    <div className="w-3 h-3 bg-lime-400 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-heading text-xl font-bold">
                    Курс "Мастер цифровых технологий"
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Изучите современные инструменты продвижения и монетизации
                  </p>

                  <div className="flex items-center space-x-4">
                    <div className="flex -space-x-1">
                      <div className="w-6 h-6 bg-lime-400 rounded-full text-xs flex items-center justify-center text-black font-bold">
                        A
                      </div>
                      <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
                    </div>
                    <span className="text-xs text-gray-400">
                      Онлайн обучение
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-lime-400 rounded-2xl flex items-center justify-center text-black font-bold animate-bounce">
              98%
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg">
              <div className="text-black text-sm">
                <div className="font-bold">Сертификат</div>
                <div className="text-xs text-gray-600">По окончанию курса</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Card from 'components/organisms/card'
import {
  CurrencyDollarIcon,
  CheckIcon,
  MagnifyingGlassIcon,
  TruckIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'
import Button from 'components/atoms/button'
import Carousel from 'components/organisms/carousel'

const features = [
  {
    name: 'Поиск',
    description:
      'Выбираем ТОЛЬКО проверенные авто с прозрачной историей. Учитываем все ваши пожелания и бюджет.',
    logo: MagnifyingGlassIcon,
  },
  {
    name: 'Проверка',
    description:
      'Полная диагностика + проверка по базам. Вы получаете фото- и видеоотчёт до покупки.',
    logo: CheckIcon,
    docs: 'https://reactjs.org/',
  },
  {
    name: 'Покупка',
    description:
      'Выкупаем авто по лучшей цене! Контролируем ставку на аукционе, чтобы сэкономить ваш бюджет.',
    logo: CurrencyDollarIcon,
    docs: 'https://www.typescriptlang.org/',
  },
  {
    name: 'Доставка',
    description:
      'Организуем быструю и безопасную логистику, берём на себя все документы и растаможку.',
    logo: TruckIcon,
    docs: 'https://tailwindcss.com/',
  },
  {
    name: 'Гарантия',
    description:
      'Вы получаете авто в точности, как договаривались! Всё официально, договор и страховка включены.',
    logo: ShieldCheckIcon,
    docs: 'https://eslint.org/',
  },
]

function App() {
  return (
    <main>
      <header className="pt-16 z-10 relative max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <h1 className="text-4xl lg:text-6xl leading-none font-extrabold tracking-tight mb-8 sm:mb-10 text-purple-400">
          Автомобили из Южной Кореи
        </h1>
        <div className="text-lg sm:text-xl leading-none font-bold tracking-tight text-[gold] mb-4">
          Мы — команда экспертов, которые делают процесс покупки авто из Южной
          Кореи простым и безопасным.
        </div>
        <div className="text-lg sm:text-xl leading-none font-bold tracking-tight text-gray-300 mb-2">
          Работаем честно, ведём сделку под ключ и гарантируем качество каждого
          авто.
        </div>
        <ul className="space-y-1 text-gray-300 list-disc list-inside dark:text-gray-300 ml-4">
          <li>100+ довольных клиентов по всей стране</li>
          <li>Прямые поставки без посредников</li>
          <li>Гарантия прозрачности сделки</li>
          <li>Экономия до 30% по сравнению с рынком КР</li>
          <li>Подбор за 3-5 дней, доставка от 14 дней</li>
        </ul>
      </header>
      <section className="max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <div className="sm:flex sm:space-x-6 space-y-4 sm:space-y-0 items-center">
          <a href="https://wa.me/996704252040">
            <Button>Написать на WA</Button>
          </a>
        </div>
      </section>
      <br />

      <section className="max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <h3 className="text-3xl leading-none font-bold tracking-tight text-purple-200 mb-4">
          Чек-лист для подбора автомобиля!
        </h3>
        <ul className="space-y-1 text-gray-300 list-disc list-inside dark:text-gray-300 ml-4">
          <li>Связываетесь с нами любым удобным для вас способом</li>
          <li>Сообщаете желаемую марку и модель авто\год выпуска\бюджет</li>
          <li>
            Предпочтения по состоянию и комплектации авто (битая\целая,
            новая\бу, и т п)
          </li>
          <li>Подписание договора и внесение депозита (200$)</li>
          <li>Поиск и подбор автомобиля в Корее</li>
          <li>Размещение ставок и покупка автомобиля</li>
          <li>Выставление Счета и выкуп автомобиля</li>
          <li>Транспортировка авто в порт Кореи</li>
          <li>Доставка в Кыргызстан</li>
          <li>Растаможивание авто и передача клиенту в руки</li>
        </ul>
      </section>
      <br />

      <section className="max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <h3 className="text-3xl leading-none font-bold tracking-tight text-purple-200 mb-4">
          Как мы работаем – 4 простых шага к вашему автомобилю
        </h3>
        <div className="grid grid-cols-10 gap-4">
          {features.map((props, index) => (
            <div key={index} className="col-span-10 sm:col-span-5">
              <Card
                title={props.name}
                description={props.description}
                Icon={props.logo}
              />
            </div>
          ))}
        </div>
      </section>
      <br />

      <section className="max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <h3 className="text-3xl leading-none font-bold tracking-tight text-purple-200 mb-4">
          Отзывы наших довольных клиентов
        </h3>

        <Carousel />
      </section>

      <footer className="pb-16 max-w-screen-lg xl:max-w-screen-xl mx-auto text-center sm:text-right text-gray-400 font-bold">
        <a href="https://www.instagram.com/autoscout_kg">
          Свяжитесь с нами любым удобным способом! WhatsApp, Telegram, звонок
          или заявка – ответим на все вопросы и подберём идеальное авто.
        </a>
      </footer>
    </main>
  )
}

export default App

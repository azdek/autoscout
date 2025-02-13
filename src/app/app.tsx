import Card from "components/organisms/card";
import {
  BeakerIcon,
  BookmarkIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  PhoneXMarkIcon,
  Bars3Icon,
  PencilIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import Button from "components/atoms/button";

const features = [
  {
    name: "Vite",
    description:
      "Faster and leaner development experience for modern web projects.",
    logo: CubeTransparentIcon,
    docs: "https://vitejs.dev/",
  },
  {
    name: "React",
    description: "JavaScript library for building user interfaces.",
    logo: PencilIcon,
    docs: "https://reactjs.org/",
  },
  {
    name: "TypeScript",
    description:
      "Strongly typed programming language that builds on JavaScript.",
    logo: BookmarkIcon,
    docs: "https://www.typescriptlang.org/",
  },
  {
    name: "Tailwind",
    description: "A utility-first CSS framework packed with classes.",
    logo: PhotoIcon,
    docs: "https://tailwindcss.com/",
  },
  {
    name: "ESLint",
    description: "Find and fix problems in your JavaScript code.",
    logo: BeakerIcon,
    docs: "https://eslint.org/",
  },
  {
    name: "Prettier",
    description: "An opinionated code formatter.",
    logo: Bars3Icon,
    docs: "https://prettier.io/",
  },
  {
    name: "Atomic design",
    description:
      "We’re not designing pages, we’re designing systems of components.",
    logo: PhoneXMarkIcon,
    docs: "https://bradfrost.com/blog/post/atomic-web-design/",
  },
  {
    name: "Relative imports",
    description:
      "Import resource using its full path from the project’s src folder.",
    logo: ChevronDownIcon,
    docs: "https://github.com/vitejs/vite/issues/88#issuecomment-762415200",
  },
];

function App() {
  return (
    <main>
      <header className="pt-16 z-10 relative max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <h3 className="text-2xl sm:text-4xl leading-none font-bold tracking-tight text-purple-200">
          <span className="text-[gold] opacity-75">Текс</span> / еще текст
        </h3>
        <h1 className="text-6xl lg:text-7xl leading-none font-extrabold tracking-tight mb-8 sm:mb-10 text-purple-400">
        Автомобили из Южной Кореи
        </h1>
        <p className="max-w-screen-lg text-lg sm:text-xl  text-gray-300 font-medium mb-10 sm:mb-11">
        Официальная гарантия, доставка по Кыргызстану, выгодные цены. Купить:{" "}
          <code className="font-mono text-blue-500 font-bold">Hyundai</code>
          , <code className="font-mono text-blue-500 font-bold">KIA</code>,{" "}
          <code className="font-mono text-blue-500 font-bold">Genesis</code>,{" "}
          <code className="font-mono text-blue-500 font-bold">Sangyong</code>
          <code className="font-mono text-blue-500 font-bold">Toyota</code>,{" "}
          <code className="font-mono text-blue-500 font-bold">BMW</code>,{" "}
          <code className="font-mono text-blue-500 font-bold">Mercedes</code>,{" "}
          <code className="font-mono text-blue-500 font-bold">Samsung</code>{" "}
          и{" "}
          <code className="font-mono text-blue-500 font-bold">
            другие модели
          </code>
          . Позвоните и мы подберем для вас лучший вариант.
        </p>
      </header>
      <section className="max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <div className="sm:flex sm:space-x-6 space-y-4 sm:space-y-0 items-center">
          <a href="tel:+996704252040">
            <Button>Написать на WA</Button>
          </a>
        </div>
      </section>
      <section className="max-w-screen-lg xl:max-w-screen-xl mx-auto grid grid-cols-10 gap-4">
        {features.map((props, index) => (
          <div key={index} className="col-span-10 sm:col-span-5">
            <Card
              title={props.name}
              description={props.description}
              Icon={props.logo}
              href={props.docs}
            />
          </div>
        ))}
      </section>
      <footer className="pb-16 max-w-screen-lg xl:max-w-screen-xl mx-auto text-center sm:text-right text-gray-400 font-bold">
        <a href="https://github.com/jvidalv">
          Josep Vidal @ {new Date().getFullYear()}
        </a>
      </footer>
    </main>
  );
}

export default App;

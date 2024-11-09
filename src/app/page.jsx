import {Tab} from './components/tab'
import {InfoCard} from './components/infocard'
import {Logo} from './components/logo'
import {TypeWriter} from './components/typewriter'

export default function Home() {
  const data = [
    {
      id:"infocard",
      component:<InfoCard />
    },
    {
      id:"logo",
      component:<Logo />
    },
    {
      id:"typewriter",
      component:<TypeWriter text="animation using motion css"/>
    }
  ]
  return (
    <div className="mx-auto max-w-4xl overflow-x-hidden px-8 py-20">
      <h1 className="mb-10 text-center text-3xl text-gray-500">
        Next.js + Tailwind animation playground
      </h1>
      <Tab data={data}/>
    </div>
  );
}

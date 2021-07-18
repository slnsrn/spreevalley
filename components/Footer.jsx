import { urlObjectKeys } from "next/dist/next-server/lib/utils"

const navigation = [
  { name: 'What we build', href: '#', items: [{ text: 'Memoric', link: '' }] },
  {
    name: 'We just like building cool things',
    description: 'And so far everything has been in a non-profit sense, only accepting donations. Do you like what we do?',
    button: {
      text: 'Buy us a coffee',
      link: ''
    }
  },
  {
    name: 'Contact',
    description: "We're based in Berlin, Germany (like, where the Spree is). You can reach us on contact@spreevalley.dev",
    button: {
      text: 'Get in touch',
      link: ''
    }
  },
]

export default function Footer ({ darkMode }) {
  return (
    <footer className='w-full pb-40 md:pb-0 bg-black md:bg-transparent -mt-72 md:mt-0 absolute md:relative'>
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap md:space-x-12 justify-center z-100" aria-label="Footer">
          {navigation.map((item) => (
            <div key={item.name} className="px-4 py-2 max-w-sm flex flex-col items-center text-center text-white tracking-wider">
              <span className='font-medium mb-2 md:mb-4'>
                {item.name}
              </span>
              <p className='font-light text-xs md:text-base'>{item.description}</p>
              {item.items?.map(n => <a key={n.text} href={n.link} >
                {n.text}
              </a>)}
              {item.button && <a
                href={item.button.link}
                className="bg-white text-black py-2 px-4 mt-2 md:mt-4 hover:text-white hover:bg-black transition-colors text-xs md:text-base"
              >
                {item.button.text}
              </a>
              }
            </div>
          ))}
        </nav>
      </div>
    </footer >
  )
}
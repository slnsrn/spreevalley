const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Projects', href: '#' },
]

export default function Header ({ children }) {
  return (
    <header className='relative'>
      {children}
      <nav className="w-full px-4 sm:px-6 lg:px-8 flex flex-col" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-black dark:border-white lg:border-none">
          <div className="flex justify-end items-center w-full ml-10 space-x-4">
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <a key={link.name} href={link.href} className="dark:text-white hover:text-white">
                  {link.name}
                </a>
              ))}
            </div>
            <a
              href="#"
              className="inline-block bg-black text-white dark:bg-white dark:text-black py-2 px-4 hover:text-black hover:bg-white dark:hover:text-white dark:hover:bg-black"
            >
              Let's work together
            </a>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-end space-x-6 lg:hidden">
          {navigation.map((link) => (
            <a key={link.name} href={link.href} className="dark:text-white hover:text-white">
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
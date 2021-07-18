const projects = [
  {
    name: 'Memoric',
    link: 'https://dev.memoric.app/',
    description: 'Helping businesses and consumers immortalize human memories',
    img: 'memorio.png'
  },
  {
    name: 'Onboard',
    link: '#',
    description: 'coming soon...',
    img: 'memorio.png'
  },
]

export default function Projects () {
  return (<div className='mx-auto text-center'>
    <h1 className='text-xs dark:text-white font-thin opacity-50'>Checkout out cool stuff</h1>
    <div className='flex flex-col space-y-6 py-20'>
      {projects.map((project, i) => <div key={project.name} className={`flex ${i % 2 !== 0 ? 'flex-row-reverse' : 'flex-row'}`}>
        <img className={`w-[496px] h-[400px] ${i % 2 !== 0 ? 'ml-10' : 'mr-10'}`} src={project.img} />
        <div className='flex flex-col justify-center items-center dark:text-white tracking-widest'>
          <span className='font-hero text-5xl py-2'>{project.name}</span>
          <p className='font-thin pb-8'>{project.description}</p>
          <a
            href={project.link}
            className="inline-block bg-black text-white dark:bg-white dark:text-black py-2 px-4 hover:text-black hover:bg-white dark:hover:text-white dark:hover:bg-black"
          >
            Check it out
          </a>
        </div>
      </div>)}
    </div>
  </div>)
}
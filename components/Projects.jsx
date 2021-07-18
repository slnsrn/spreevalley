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
  return (<div className='mx-auto text-center w-full -mt-32 md:mt-0'>
    <h1 className='text-xs dark:text-white font-thin opacity-50'>Checkout out cool stuff</h1>
    <div className='flex flex-col space-y-16 px-4 pb-12 md:py-20'>
      {projects.map((project, i) => <div key={project.name} className={`flex flex-col items-center ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        <div className={`w-full md:w-1/2 ${i % 2 !== 0 ? 'pl-4 pd:ml-10' : 'pl-4r md:pr-10'}`}>
          <img className={`w-full h-auto `} src={project.img} />
        </div>
        <div className=' w-full md:w-1/2 flex flex-col justify-center items-center dark:text-white tracking-widest'>
          <span className='font-hero text-xl md:text-5xl py-2'>{project.name}</span>
          <p className='font-thin pb-4 md:pb-8 text-sm md:text-base'>{project.description}</p>
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
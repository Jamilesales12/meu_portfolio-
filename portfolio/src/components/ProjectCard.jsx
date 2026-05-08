export default function ProjectCard({ darkMode, project }) {
  return (
    <article
      className={[
        'flex h-full flex-col gap-5 rounded-[1.75rem] border p-5 text-justify shadow-lg transition-colors duration-500 sm:flex-row',
        darkMode
          ? 'border-[#F7EFE2]/10 bg-[#151411] text-[#F7EFE2] shadow-black/20'
          : 'border-[#333333]/10 bg-white/40 text-[#333333] shadow-[#333333]/8',
      ].join(' ')}
    >
      <img className="w-36 self-start rounded-2xl object-contain sm:w-44" src={project.image} alt={project.title} />
      <div className="flex flex-1 flex-col">
        <h6 className="pb-3 font-['Playfair_Display'] text-2xl">{project.title}</h6>
        <p
          className={[
            'pb-4 text-base leading-7 transition-colors duration-500',
            darkMode ? 'text-[#F7EFE2]/85' : 'text-[#333333]/85',
          ].join(' ')}
        >
          {project.description}
        </p>
        <a
          className={[
            'mt-auto text-base font-medium transition-colors duration-300',
            darkMode ? 'text-[#F7EFE2] hover:text-[#F7EFE2]/70' : 'text-[#333333] hover:text-[#333333]/70',
          ].join(' ')}
          href={project.link}
        >
          mais informacoes
        </a>
      </div>
    </article>
  )
}
import ProjectCard from './ProjectCard'

export default function ProjectsSection({ darkMode, title, sectionId, labelId, projects }) {
  return (
    <section className={sectionId === 'pro' ? 'pt-24 lg:pt-32' : 'pt-12 lg:pt-16'} id={sectionId}>
      {title ? (
        <div className="pb-10">
          <h1 className="text-center font-['Playfair_Display'] text-4xl font-medium sm:text-5xl">
            {title}
          </h1>
        </div>
      ) : null}
      <div
        className={[
          "pb-8 font-['Playfair_Display'] text-3xl font-medium transition-colors duration-500 sm:text-4xl",
          darkMode ? 'text-[#F7EFE2]' : 'text-[#333333]',
        ].join(' ')}
      >
        {labelId === 'design' ? 'Design' : 'Desenvolvimento'}
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard darkMode={darkMode} key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
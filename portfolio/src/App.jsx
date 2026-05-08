import { useEffect, useState } from 'react'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectsSection from './components/ProjectsSection'
import { designProjects, developmentProjects } from './data/portfolioData'

const publicAsset = (assetPath) => `${import.meta.env.BASE_URL}${assetPath}`

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark-mode', darkMode)

    const favicon = document.getElementById('app-favicon')
    if (favicon) {
      favicon.setAttribute(
        'href',
        darkMode ? publicAsset('icon_dark_mode.png') : publicAsset('icon_jam.png'),
      )
    }
  }, [darkMode])

  return (
    <div
      className={[
        'min-h-screen transition-colors duration-500 ease-in-out',
        darkMode ? 'bg-[#080806] text-[#F7EFE2]' : 'bg-[#F3EEE4] text-[#333333]',
      ].join(' ')}
    >
      <Header darkMode={darkMode} onToggleTheme={() => setDarkMode((currentMode) => !currentMode)} />

      <main className="mx-auto max-w-6xl pb-16 pt-28 sm:px-8 lg:pt-40">
        <Hero darkMode={darkMode} />
        <ProjectsSection
          darkMode={darkMode}
          title="Projetos"
          sectionId="pro"
          labelId="design"
          projects={designProjects}
        />
        <ProjectsSection darkMode={darkMode} labelId="desen" projects={developmentProjects} />
        <ContactSection darkMode={darkMode} />
      </main>

      <Footer darkMode={darkMode} />
    </div>
  )
}
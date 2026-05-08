import { socialLinks } from '../data/portfolioData'

const publicAsset = (assetPath) => `${import.meta.env.BASE_URL}${assetPath}`

export default function Hero({ darkMode }) {
  return (
    <section className="space-y-10 lg:space-y-16">
      <div className="space-y-3">
        <h1 className="font-['Playfair_Display'] text-5xl font-medium tracking-tight sm:text-6xl lg:text-7xl">
          Jamile Sales
        </h1>
        <h4
          className={[
            'text-xl transition-colors duration-500 sm:text-2xl',
            darkMode ? 'text-[#F7EFE2]/85' : 'text-[#333333]/85',
          ].join(' ')}
        >
          Desenvolvedora & Designer
        </h4>
      </div>

      <div className="inline-flex flex-col justify-start gap-4 pt-4 lg:pt-10">
        {socialLinks.map((link) => (
          <div key={link.href}>
            <a className="block transition-transform duration-300 hover:-translate-y-1" href={link.href}>
              <img
                className={[
                  'transition duration-500',
                  darkMode ? 'brightness-0 invert opacity-85' : 'brightness-0 opacity-75',
                ].join(' ')}
                src={link.icon}
                width="25"
                alt={link.alt}
              />
            </a>
          </div>
        ))}
      </div>

      <div className="grid items-center gap-8 pt-8 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-16 lg:pt-16" id="sob">
        <div className="flex justify-center lg:justify-start">
          <img
            className={[
              'w-full max-w-xs rounded-[2rem] border p-2 shadow-2xl transition-colors duration-500 sm:max-w-sm',
              darkMode
                ? 'border-[#E6D8C3]/10 bg-[#E6D8C3]/5 shadow-black/30'
                : 'border-[#3E342A]/10 bg-white/30 shadow-[#3E342A]/10',
            ].join(' ')}
            src={darkMode ? publicAsset('jam_dark_mode.png') : publicAsset('jamile .png')}
            alt="Jamile Sales"
          />
        </div>
        <aside className="space-y-5">
          <h1 className="font-['Playfair_Display'] text-4xl font-medium sm:text-5xl">
            Futura desenvolvedora
          </h1>
          <p
            className={[
              'max-w-3xl text-justify text-lg leading-8 transition-colors duration-500 sm:text-xl',
              darkMode ? 'text-[#F7EFE2]/85' : 'text-[#333333]/85',
            ].join(' ')}
          >
            Sou estudante do curso de Sistemas e Midias Digitais na Universidade Federal do Ceara
            (UFC), onde estou focada em desenvolvimento web front-end e design grafico. Tambem
            tenho um interesse especial em desenvolvimento de jogos. Ja trabalhei na criacao de
            interfaces graficas e na coordenacao de projetos. Sou tecnica em administracao e tenho
            experiencia com financas e atendimento ao publico.
          </p>
        </aside>
      </div>
    </section>
  )
}
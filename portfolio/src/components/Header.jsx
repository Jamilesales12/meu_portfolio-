export default function Header({ darkMode, onToggleTheme }) {
  return (
    <header
      className={['sticky top-5 z-50 mx-auto max-w-6xl rounded-2xl border backdrop-blur-2xl transition-colors duration-500 ease-in-out',
        darkMode
              ? 'border-[#F7EFE2]/10 bg-linear-to-b from-[#F7EFE2]/12 via-[#F7EFE2]/8 to-transparent text-[#F7EFE2]'
              : 'border-[#333333]/10 bg-linear-to-b from-white/45 via-white/25 to-white/10 text-[#333333]',
      ].join(' ')}
    >
      <nav className="flex items-center justify-end px-6 py-4">
        <div className="flex items-center gap-6 font-medium">
          <a
            href="#sob"
            className={[
              'transition-colors duration-300',
              darkMode ? 'hover:text-[#F7EFE2]/75' : 'hover:text-[#333333]/70',
            ].join(' ')}
          >
            Sobre
          </a>

          <a
            href="#pro"
            className={[
              'transition-colors duration-300',
              darkMode ? 'hover:text-[#F7EFE2]/75' : 'hover:text-[#333333]/70',
            ].join(' ')}
          >
            Projetos
          </a>

          <a
            href="#cont"
            className={[
              'transition-colors duration-300',
              darkMode ? 'hover:text-[#F7EFE2]/75' : 'hover:text-[#333333]/70',
            ].join(' ')}
          >
            Contato
          </a>

          <i
            id="mode_icon"
            className={`fa-regular ${
              darkMode ? 'fa-moon' : 'fa-sun'
            } cursor-pointer transition-transform duration-300 hover:scale-110`}
            onClick={onToggleTheme}
          />
        </div>
      </nav>
    </header>
  )
}
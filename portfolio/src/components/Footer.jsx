export default function Footer({ darkMode }) {
  return (
    <footer className="pt-16">
      <div
        className={[
          'flex h-20 w-full items-center justify-center px-5 text-center text-sm transition-colors duration-500 sm:text-base',
          darkMode ? 'bg-[#100F0C] text-[#F7EFE2]/85' : 'bg-[#E8D9C2] text-[#333333]/85',
        ].join(' ')}
      >
        <p>
          <a
            className={[
              'transition-colors duration-300',
              darkMode ? 'hover:text-[#F7EFE2]' : 'hover:text-[#333333]',
            ].join(' ')}
            href=""
          >
            Copyright 2023. Made by Jamile Sales
          </a>
        </p>
      </div>
    </footer>
  )
}
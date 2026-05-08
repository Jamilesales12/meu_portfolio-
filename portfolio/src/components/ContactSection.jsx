export default function ContactSection({ darkMode }) {
  return (
    <section className="pt-24 lg:pt-32" id="cont">
      <div>
        <h1 className="pb-8 text-center font-['Playfair_Display'] text-4xl font-medium sm:text-5xl">Contato</h1>
        <p
          className={[
            'mx-auto max-w-4xl pb-10 text-center text-lg leading-8 transition-colors duration-500 sm:text-xl',
            darkMode ? 'text-[#F7EFE2]/85' : 'text-[#333333]/85',
          ].join(' ')}
        >
          Se ha interesse em minha colaboracao, fique a vontade para entrar em contato por e-mail.
          Aguardo sua mensagem para explorarmos oportunidades de colaboracao.
        </p>
      </div>

      <div className="flex justify-center">
        <form
          className={[
            'flex w-full max-w-2xl flex-col gap-5 rounded-[2rem] border p-6 shadow-xl transition-colors duration-500 sm:p-10',
            darkMode
              ? 'border-[#F7EFE2]/10 bg-[#14120F] text-[#F7EFE2] shadow-black/20'
              : 'border-[#333333]/10 bg-white/45 text-[#333333] shadow-[#333333]/8',
          ].join(' ')}
          action="https://formsubmit.co/jamile98997@gmail.com"
          method="POST"
        >
          <label className="text-base font-medium sm:text-lg" htmlFor="nome">Nome</label>
          <input
            className={[
              'w-full rounded-xl border px-4 py-3 text-base outline-none transition-colors duration-500',
              darkMode
                ? 'border-[#F7EFE2]/10 bg-[#201D19] text-[#F7EFE2] placeholder:text-[#F7EFE2]/45'
                : 'border-[#333333]/10 bg-[#FFF9F1] text-[#333333] placeholder:text-[#333333]/45',
            ].join(' ')}
            id="nome"
            name="nome"
            type="text"
            placeholder="Digite seu nome"
          />

          <label className="text-base font-medium sm:text-lg" htmlFor="email">Email</label>
          <input
            className={[
              'w-full rounded-xl border px-4 py-3 text-base outline-none transition-colors duration-500',
              darkMode
                ? 'border-[#F7EFE2]/10 bg-[#201D19] text-[#F7EFE2] placeholder:text-[#F7EFE2]/45'
                : 'border-[#333333]/10 bg-[#FFF9F1] text-[#333333] placeholder:text-[#333333]/45',
            ].join(' ')}
            id="email"
            name="email"
            type="email"
            placeholder="Digite seu e-mail"
          />

          <label className="text-base font-medium sm:text-lg" htmlFor="mensagem">Mensagem</label>
          <textarea
            className={[
              'min-h-40 w-full rounded-xl border px-4 py-3 text-base outline-none transition-colors duration-500',
              darkMode
                ? 'border-[#F7EFE2]/10 bg-[#201D19] text-[#F7EFE2] placeholder:text-[#F7EFE2]/45'
                : 'border-[#333333]/10 bg-[#FFF9F1] text-[#333333] placeholder:text-[#333333]/45',
            ].join(' ')}
            id="mensagem"
            name="mensagem"
            placeholder="Digite sua mensagem"
            required
          />

          <div className="flex justify-center pt-6 sm:pt-10">
            <input
              className={[
                'w-full max-w-52 cursor-pointer rounded-full px-5 py-3 text-base font-medium transition-colors duration-300',
                darkMode
                  ? 'bg-[#E6D8C3] text-[#080806] hover:bg-[#D8CAB7]'
                  : 'bg-[#3E342A] text-[#F4E6D0] hover:bg-[#5B4C3E]',
              ].join(' ')}
              id="enviar"
              type="submit"
              value="Enviar"
            />
          </div>

          <input type="hidden" name="_subject" value="Novo contato!" />
          <input type="text" name="_honey" style={{ display: 'none' }} />
          <input type="hidden" name="_captcha" value="" />
        </form>
      </div>
    </section>
  )
}
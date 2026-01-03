import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"

export function Footer () {
    return(
        <footer className="bg-cyan-900 text-gray-300 px-6 py-10">
  <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 text-center md:text-left">
    
    
    <div className="space-y-3">
      <h2 className="text-xl font-bold text-white">GlobalShop</h2>
      <p className="text-sm">
        Manutenção de computadores, notebooks e montagem de PCs sob medida.
      </p>
    </div>

    
    <div className="space-y-3">
      <h3 className="font-semibold text-white">Contato</h3>
      <p className="text-sm"> Belo Horizonte - MG</p>
      <p className="text-sm"> (31) 98554-7298</p>
      <p className="text-sm"> infvendas123@gmail.com</p>
    </div>

    
    <div className="space-y-3 flex flex-col items-center md:items-start">
      <h3 className="font-semibold text-white">Atendimento rápido</h3>
      <a
        href="https://wa.me/5531985547298?text=Olá vim pelo site e gostaria de mais informações"
        target="_blank"
        className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md font-semibold flex items-center gap-2 w-fit"
      >
        <WhatsappLogo className="w-5 h-5" />
        Falar no WhatsApp
      </a>
    </div>

  </div>

  <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
    © {new Date().getFullYear()} GlobalShop. Todos os direitos reservados.
  </div>
</footer>

    )
}
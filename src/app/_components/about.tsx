"use client"
import { WhatsappLogo } from "@phosphor-icons/react"

export function About () {
    return(
        <main>
            <section className="bg-gray-100 text-center p-8">
                <h1 className=" text-4xl font-semibold p-8">Sobre a GlobalShop Informática</h1>

                <p>A GlobalShop Informática oferece soluções completas em tecnologia, desde manutenção até venda de equipamentos. Nosso compromisso é resolver o problema do cliente com clareza, eficiência e confiança.</p>

                <h2>Aqui você fala com quem entende.</h2>
            </section>

            <section className="bg-gray-100 p-8 space-y-2">
                <h1 className="text-2xl font-semibold p-4">
                    Como funciona o atendimento
                </h1>

                <li>Chame no WhatsApp</li>
                <li>Explique o problema ou o que precisa</li>
                <li>Receba o diagnóstico ou orçamento</li>

                <p className="font-bold">Aprovou? Executamos o serviço.</p>
            </section>

            <section className="bg-gray-100 p-8 space-y-2">
                <h1 className="text-2xl font-semibold p-4">Para quem atendemos</h1>

                <li>Usuários domésticos</li>
                <li>Estudantes</li>
                <li>Profissionais</li>
                <li>Pequenas empresas</li>
                <li>Gamers</li>
            </section>

            <section className="bg-gray-400 p-8 space-y-4 text-center">
                <h1 className="text-2xl font-semibold">Onde nos encontrar?</h1>

                <p>Rua José Amaral Pimenta, 105 – Belo Horizonte MG</p>

                <div className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps?q=Rua%20José%20Amaral%20Pimenta,%20105%20Belo%20Horizonte%20MG&output=embed"
                        className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    />
                 </div>
            </section>


            <div className="bg-gray-100 p-8 space-y-8 text-center justify-center items-center">
                <h1 className="text-4xl font-semibold">Precisa de manutenção ou quer montar seu computador?</h1>
                <a
                              data-aos="fade-up"
                              data-aos-delay="500"
                              target='_blank'
                              href={`https://wa.me/5531985547298?text=Olá vim pelo site e gostaria de mais informações`}
                              className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2 mx-auto"
                            >
                              <WhatsappLogo className='w-5 h-5' />
                              Chame no Whatsapp agora!
                            </a>
            </div>
        </main>
    )
}
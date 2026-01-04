"use client"
import { LaptopIcon, DesktopTowerIcon, CpuIcon, AndroidLogoIcon, AppleLogoIcon, PrinterIcon, WifiHighIcon, DiscIcon, GraphicsCardIcon, MonitorIcon, KeyboardIcon, MouseIcon } from '@phosphor-icons/react'
import { motion } from "motion/react"
import { staggerContainer, fadeInUp, cardHover, fadeIn } from "@/lib/motion-types"


export function Services () {

  return (

    <main className='bg-gray-100 text-black border border-gray-100'>
        <motion.h1 
          className='text-4xl font-bold text-center p-4 pb-10'
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
            Nossos Serviços
        </motion.h1>


     <motion.section 
        className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-5 justify-items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
     >

        <motion.section 
          className='grid p-4'
          variants={fadeInUp}
        >

            {/* COMPUTADORES */}
            <motion.div 
              className='shadow-xl p-5 flex flex-col h-full max-w-75  md:max-w-90 lg:max-w-100 mt-15 bg-white rounded-xl'
              whileHover={cardHover}
            >
                <h1 className='text-xl text-center font-bold p-2 '>
                    Manutenção de computadores e notebooks
                </h1>

                <h2 className='text-center font-semibold text-sm mb-4'>
                    Manutenção completa para deixar seu computador rápido, estável e seguro.
                </h2>
                <div className='p-2 space-y-1.5'>
                    <li>
                        <a>Troca de HD, SSD, memória RAM e fontes</a>
                    </li>
                    <li>
                        <a>Limpeza interna (coolers, placa, pasta térmica)</a>
                    </li>
                    <li>
                        <a>Correção de lentidão e travamentos</a>
                    </li>
                    <li>
                        <a>Troca de HD, SSD, memória RAM e fontes</a>
                    </li>
                    <li>
                        <a>Correção de erros de sistema</a>
                    </li>
                    <li>
                        <a>Instalação e atualização de programas</a>
                    </li>
                    <li>
                        <a>Configuração de drivers e sistema operacional</a>
                    </li>
                    
                </div>
            




                <div className='mt-auto p-2 flex justify-center gap-3'>
                    <a>
                        <LaptopIcon className='w-5 h-5'/>
                    </a>
                    <a>
                        <DesktopTowerIcon className='w-5 h-5' />
                    </a>
                    <a>
                        <CpuIcon className='w-5 h-5' />
                    </a>
                </div>
            </motion.div>

        
    </motion.section>

     <motion.section 
        className='grid p-4'
        variants={fadeInUp}
     >

            {/* CELULARES */}
            <motion.div 
              className='shadow-xl p-5 flex flex-col h-full max-w-75  md:max-w-90 lg:max-w-100 mt-15 bg-white rounded-xl'
              whileHover={cardHover}
            >
                <h1 className='text-xl text-center font-bold p-2'>
                    Manutenção de Celulares
                </h1>

                <h2 className='text-center font-semibold text-sm mb-4'>
                    Reparo técnico com diagnóstico claro e peças de qualidade.
                </h2>
                <div className='p-2 space-y-1.5'>
                    <li>
                        <a>Troca de tela (quebrada ou sem toque)</a>
                    </li>
                    <li>
                        <a>Troca de bateria</a>
                    </li>
                    <li>
                        <a>Conector de carga</a>
                    </li>
                    <li>
                        <a>Atualização e restauração de software</a>
                    </li>
                    <li>
                        <a>Remoção de vírus e aplicativos maliciosos</a>
                    </li>
                    <li>
                        <a>Correção de falhas no sistema</a>
                    </li>
                    
                </div>

                <div className="mt-auto p-2 flex justify-center gap-3">
                    <AppleLogoIcon className="w-5 h-5" />
                    <AndroidLogoIcon className="w-5 h-5" />
                </div>
            </motion.div>
    </motion.section>


     <motion.section 
        className='grid p-4 '
        variants={fadeInUp}
     >

                {/* IMPRESSORAS */}
            <motion.div 
              className='shadow-xl p-5 flex flex-col h-full max-w-75  md:max-w-90 lg:max-w-100 mt-15 bg-white rounded-xl'
              whileHover={cardHover}
            >
                <h1 className='text-xl text-center font-bold p-2'>
                    Manutenção de Impressoras
                </h1>

                <h2 className='text-center font-semibold text-sm mb-4'>
                    Solução completa para uso doméstico ou profissional.
                </h2>
                <div className='p-2 space-y-1.5'>
                    <li>
                        <a>Limpeza interna e externa</a>
                    </li>
                    <li>
                        <a>Correção de falhas de impressão</a>
                    </li>
                    <li>
                        <a>Troca de peças e componentes</a>
                    </li>
                    <li>
                        <a>Configuração no computador e na rede</a>
                    </li>
                    <li>
                        <a>Instalação de drivers</a>
                    </li>
                    <li>
                        <a>Ajustes para melhor qualidade de impressão</a>
                    </li>
                    
                </div>

                <div className="mt-auto p-2 flex justify-center gap-3">
                    <PrinterIcon className="w-5 h-5" />
                    <WifiHighIcon className="w-5 h-5" />
                </div>
            </motion.div>

    </motion.section>
</motion.section>

       <motion.h2 
          className="text-3xl font-bold text-center mt-20 mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
            Soluções e Equipamentos
        </motion.h2>


<motion.section 
    className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-5 mb-20 justify-items-center"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={staggerContainer}
>


     <motion.section 
        className='grid p-4'
        variants={fadeInUp}
     >

                {/* UPGRADES */}
            <motion.div 
              className='shadow-xl p-5 flex flex-col h-full max-w-75  md:max-w-90 lg:max-w-100 mt-15 bg-white rounded-xl'
              whileHover={cardHover}
            >
                <h1 className='text-xl text-center font-bold p-2'>
                    Upgrades e Otimização de Desempenho
                </h1>

                <h2 className='text-center font-semibold text-sm mb-4'>
                    Melhore seu equipamento sem precisar comprar outro.
                </h2>
                <div className='p-2 space-y-1.5'>
                    <li>
                        <a>Upgrade para SSD</a>
                    </li>
                    <li>
                        <a>Expansão de memória RAM</a>
                    </li>
                    <li>
                        <a>Upgrade de placa de vídeo</a>
                    </li>
                    <li>
                        <a>Otimização de sistema</a>
                    </li>
                    <li>
                        <a>Avaliação de custo-benefício</a>
                    </li>
                    
                    
                </div>

                <div className="mt-auto p-2 flex justify-center gap-3">
                    <CpuIcon className="w-5 h-5" />
                    <DiscIcon className="w-5 h-5" />
                    <GraphicsCardIcon className="w-5 h-5" />
                </div>
            </motion.div>

    </motion.section>


     <motion.section 
        className='grid p-4 '
        variants={fadeInUp}
     >

                {/* MONTAGEM DE COMPUTADORES */}
            <motion.div 
              className='shadow-xl p-5 flex flex-col h-full max-w-75  md:max-w-90 lg:max-w-100 mt-15 bg-white rounded-xl'
              whileHover={cardHover}
            >
                <h1 className='text-xl text-center font-bold p-2'>
                    Montagem de Computadores
                </h1>

                <h2 className='text-center font-semibold text-sm mb-4'>
                    Computadores montados sob medida para cada necessidade.
                </h2>

                    <div className='p-2 space-y-1.5'>
                        <li>
                            <a>PCs para trabalho e escritório</a>
                        </li>
                        <li>
                            <a>PCs para estudos</a>
                        </li>
                        <li>
                            <a>PCs gamer personalizados</a>
                        </li>
                        <li>
                            <a>Escolha correta de peças</a>
                        </li>
                        <li>
                            <a>Testes, configuração e garantia</a>
                        </li>
                    </div>

                    <div className="mt-auto p-2 flex justify-center gap-3">
                        <CpuIcon className="w-5 h-5" />
                        <GraphicsCardIcon className="w-5 h-5" />
                    </div>
            </motion.div>

    </motion.section>


     <motion.section 
        className='grid p-4'
        variants={fadeInUp}
     >

            {/* VENDAS */}
            <motion.div 
              className='shadow-xl p-5 flex flex-col h-full max-w-75  md:max-w-90 lg:max-w-100 mt-15 bg-white rounded-xl'
              whileHover={cardHover}
            >
                <h1 className='text-xl text-center font-bold p-2'>
                    Venda de Equipamentos
                </h1>

                <h2 className='text-center font-semibold text-sm mb-4'>
                    Produtos de informática com orientação técnica.
                </h2>

                <div className='p-2 space-y-1.5'>
                    <li>
                        <a>Computadores montados</a>
                    </li>
                    <li>
                        <a>Monitores</a>
                    </li>
                    <li>
                        <a>Teclados, mouses e headsets</a>
                    </li>
                    <li>
                        <a>Periféricos e acessórios</a>
                    </li>
                    <li>
                        <a>Peças e componentes</a>
                    </li>
                </div>

                <div className="mt-auto p-2 flex justify-center gap-3">
                    <MonitorIcon className="w-5 h-5" />
                    <KeyboardIcon className="w-5 h-5" />
                    <MouseIcon className="w-5 h-5" />
                </div>
            </motion.div>
        </motion.section>
</motion.section>

        
    </main>

  )
}

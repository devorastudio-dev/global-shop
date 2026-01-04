"use client"
import { WhatsappLogo } from "@phosphor-icons/react"
import { motion } from "motion/react"
import { fadeInUp, fadeIn, staggerContainer, scaleIn } from "@/lib/motion-types"

export function About () {
    return(
        <main>
            <motion.section 
                className="bg-gray-100 text-center p-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
            >
                <motion.h1 
                    variants={fadeInUp}
                    className=" text-4xl font-semibold p-8"
                >
                    Sobre a GlobalShop Informática
                </motion.h1>

                <motion.p 
                    variants={fadeIn}
                    className="max-w-2xl mx-auto"
                >
                    A GlobalShop Informática oferece soluções completas em tecnologia, desde manutenção até venda de equipamentos. Nosso compromisso é resolver o problema do cliente com clareza, eficiência e confiança.
                </motion.p>

                <motion.h2 
                    variants={fadeInUp}
                    className="mt-4 font-bold"
                >
                    Aqui você fala com quem entende.
                </motion.h2>
            </motion.section>

            <motion.section 
                className="bg-gray-100 p-8 space-y-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
            >
                <motion.h1 
                    variants={fadeInUp}
                    className="text-2xl font-semibold p-4"
                >
                    Como funciona o atendimento
                </motion.h1>

                <motion.li variants={fadeIn}>Chame no WhatsApp</motion.li>
                <motion.li variants={fadeIn}>Explique o problema ou o que precisa</motion.li>
                <motion.li variants={fadeIn}>Receba o diagnóstico ou orçamento</motion.li>

                <motion.p 
                    variants={fadeIn}
                    className="font-bold mt-4"
                >
                    Aprovou? Executamos o serviço.
                </motion.p>
            </motion.section>

            <motion.section 
                className="bg-gray-100 p-8 space-y-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
            >
                <motion.h1 
                    variants={fadeInUp}
                    className="text-2xl font-semibold p-4"
                >
                    Para quem atendemos
                </motion.h1>

                <motion.li variants={fadeIn}>Usuários domésticos</motion.li>
                <motion.li variants={fadeIn}>Estudantes</motion.li>
                <motion.li variants={fadeIn}>Profissionais</motion.li>
                <motion.li variants={fadeIn}>Pequenas empresas</motion.li>
                <motion.li variants={fadeIn}>Gamers</motion.li>
            </motion.section>

            <motion.section 
                className="bg-gray-400 p-8 space-y-4 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
            >
                <motion.h1 
                    variants={fadeInUp}
                    className="text-2xl font-semibold"
                >
                    Onde nos encontrar?
                </motion.h1>

                <motion.p variants={fadeIn}>
                    Rua José Amaral Pimenta, 105 – Belo Horizonte MG
                </motion.p>

                <motion.div 
                    className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg"
                    variants={scaleIn}
                >
                    <iframe
                        src="https://www.google.com/maps?q=Rua%20José%20Amaral%20Pimenta,%20105%20Belo%20Horizonte%20MG&output=embed"
                        className="w-full h-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                 </motion.div>
            </motion.section>


            <motion.div 
                className="bg-gray-100 p-8 space-y-8 text-center justify-center items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
            >
                <motion.h1 
                    variants={fadeInUp}
                    className="text-4xl font-semibold"
                >
                    Precisa de manutenção ou quer montar seu computador?
                </motion.h1>
                <motion.a
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    target='_blank'
                    href={`https://wa.me/5531985547298?text=Olá vim pelo site e gostaria de mais informações`}
                    className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2 mx-auto cursor-pointer"
                >
                    <WhatsappLogo className='w-5 h-5' />
                    Chame no Whatsapp agora!
                </motion.a>
            </motion.div>
        </main>
    )
}

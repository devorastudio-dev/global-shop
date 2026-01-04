import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr"
import { motion } from "motion/react"
import { fadeInUp, staggerContainer, fadeIn } from "@/lib/motion-types"

export function Footer () {
    return(
        <motion.footer 
            className="bg-cyan-900 text-gray-300 px-6 py-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
        >
            <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3 text-center md:text-left">
                
                
                <motion.div 
                    className="space-y-3"
                    variants={fadeInUp}
                >
                    <h2 className="text-xl font-bold text-white">GlobalShop</h2>
                    <p className="text-sm">
                        Manutenção de computadores, notebooks e montagem de PCs sob medida.
                    </p>
                </motion.div>

                
                <motion.div 
                    className="space-y-3"
                    variants={fadeInUp}
                >
                    <h3 className="font-semibold text-white">Contato</h3>
                    <p className="text-sm"> Belo Horizonte - MG</p>
                    <p className="text-sm"> (31) 98554-7298</p>
                    <p className="text-sm"> infvendas123@gmail.com</p>
                </motion.div>

                
                <motion.div 
                    className="space-y-3 flex flex-col items-center md:items-start"
                    variants={fadeInUp}
                >
                    <h3 className="font-semibold text-white">Atendimento rápido</h3>
                    <motion.a
                        href="https://wa.me/5531985547298?text=Olá vim pelo site e gostaria de mais informações"
                        target="_blank"
                        className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md font-semibold flex items-center gap-2 w-fit cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <WhatsappLogo className="w-5 h-5" />
                        Falar no WhatsApp
                    </motion.a>
                </motion.div>

            </div>

            <motion.div 
                className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400"
                variants={fadeIn}
            >
                © {new Date().getFullYear()} GlobalShop. Todos os direitos reservados.
            </motion.div>
        </motion.footer>
    )
}

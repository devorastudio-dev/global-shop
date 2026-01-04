"use client"

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import man from '../../../public/man-1853510_1280.jpg'
import couple from '../../../public/couple-6962202_1280.jpg'
import woman from '../../../public/woman-657753_1280.jpg'
import Image from 'next/image'
import { motion } from "motion/react"
import { fadeInUp, fadeIn, scaleIn } from "@/lib/motion-types"

const testimonials = [
  {
    content:
      "Levei meu computador para manutenção e ficou como novo. Atendimento rápido, explicação clara do problema e preço justo. Dá pra confiar.",
    author: "Mariana Souza",
    role: "Cliente – Manutenção de computador",
    image: woman,
  },
  {
    content:
      "Montei um PC completo com eles e fiquei muito satisfeito. Me orientaram na escolha das peças e entregaram tudo funcionando perfeitamente. Recomendo.",
    author: "Rafael",
    role: "Cliente – Montagem de PC",
    image: man,
  },
  {
    content:
      "Precisei de manutenção no celular e na impressora, e resolveram os dois sem enrolação. Serviço profissional e atendimento excelente.",
    author: "Camila Fernandes",
    role: "Cliente – Manutenção de celular e impressora",
    image: couple,
  },
]


export function Testimonials() {

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true
  })


  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <motion.section 
      className="bg-cyan-900 py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">

        <motion.h2 
          className="text-4xl font-bold text-center mb-10 text-white"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Depoimentos dos nossos clientes
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">

          <div className='overflow-hidden' ref={emblaRef}>
            <div className='flex'>
              {testimonials.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex-[0_0_100%] min-w-0 px-3"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-2 h-full flex flex-col">
                    <div className='flex flex-col items-center text-center space-y-4'>
                      <motion.div 
                        className='relative w-24 h-24'
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src={item.image}
                          alt={item.author}
                          fill
                          sizes='96px'
                          className='object-cover rounded-full'
                        />
                      </motion.div>

                      <motion.p 
                        className='text-gray-200'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                      >
                        {item.content}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                      >
                        <p className='font-bold'>{item.author}</p>
                        <p className='text-sm text-gray-400'>{item.role}</p>
                      </motion.div>

                    </div>
                  </article>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.button
            className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10 cursor-pointer'
            onClick={scrollPrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className='w-6 h-6 text-gray-600' />
          </motion.button>

          <motion.button
            className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10 cursor-pointer'
            onClick={scrollNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className='w-6 h-6 text-gray-600' />
          </motion.button>

        </div>

      </div>

    </motion.section>
  )
}

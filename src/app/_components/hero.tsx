"use client"

import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import heroImg from '../../../public/technology-785742_1920.jpg'
import hero2Img from '../../../public/laptop-5673901_1920.jpg'
import hero3Img from '../../../public/hard-disk-750050_1920.jpg'
import hero4Img from '../../../public/service-428539_1920.jpg'
import Image from 'next/image'
import { motion } from "motion/react"
import { fadeInDown, fadeInRight, fadeInUp, staggerContainer, scaleIn, imageReveal } from "@/lib/motion-types"


export function Hero() {
  return (
    <section className="bg-cyan-700 text-white relative overflow-hidden ">

      <div>
        <Image
          src={heroImg}
          alt='Foto do hero'
          fill
          sizes='100vw'
          priority
          className='object-cover opacity-60 lg:hidden'
        />
        <div className='absolute inset-0 bg-black opacity-40 md:hidden'></div>
      </div>

      <div className="container relative min-w-full">

        <article className="grid grid-cols-1 lg:grid-cols-2 h-120 w-full">

          <motion.div 
            className="space-y-6 gap-8 pt-16 pb-16 md:pb-0 px-4 mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h1
              variants={fadeInDown}
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10"
            >
              Seu computador rápido, seguro e funcionando como novo.
            </motion.h1>
            <motion.p 
              variants={fadeInRight}
              className=" lg:text-lg"
            >
              Manutenção, montagem e suporte técnico em informática com atendimento rápido e confiável.Manutenção, montagem e suporte técnico em informática com atendimento rápido e confiável.
            </motion.p>


            <motion.a
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              target='_blank'
              href={`https://wa.me/5531985547298?text=Olá vim pelo site e gostaria de mais informações`}
              className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2 cursor-pointer"
            >
              <WhatsappLogo className='w-5 h-5' />
              Contato via WhatsApp
            </motion.a>

          </motion.div>

        <motion.div 
          className="hidden lg:grid grid-cols-4 w-full h-full justify-items-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
  
  <motion.div 
    variants={imageReveal}
    className="relative w-full h-full overflow-hidden"
  >
    <Image
      src={heroImg}
      alt="Foto do hero"
      fill
      sizes="25vw"
      priority
      className="object-cover"
    />
  </motion.div>

  <motion.div 
    variants={scaleIn}
    className="relative w-full h-full overflow-hidden"
  >
    <Image
      src={hero2Img}
      alt="Foto do hero"
      fill
      sizes="25vw"
      priority
      className="object-cover"
    />
  </motion.div>

  <motion.div 
    variants={scaleIn}
    className="relative w-full h-full overflow-hidden"
  >
    <Image
      src={hero3Img}
      alt="Foto do hero"
      fill
      sizes="25vw"
      priority
      className="object-cover"
    />
  </motion.div>

  <motion.div 
    variants={scaleIn}
    className="relative w-full h-full overflow-hidden"
  >
    <Image
      src={hero4Img}
      alt="Foto do hero"
      fill
      sizes="25vw"
      priority
      className="object-cover"
    />
  </motion.div>

</motion.div>


        </article>

      </div>


    </section>
  )
}

import React from 'react'
import { AiOutlineHtml5 } from "react-icons/ai";
import { RiReactjsLine} from 'react-icons/ri'
import { SiCss3 } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { SiSpringboot } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { TbBrandMysql } from "react-icons/tb";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import {animate,motion} from "framer-motion";

const iconVariants = (duration)=>({
  initial:{y:-10},
  animate:{
    y:[10,-10], 
    transition:{
        duration:duration,
        ease:"linear",
        repeat:Infinity,
        repeatType:"reverse",
        },
}});


const  Technoloies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity: 0,y:-100}}
        transition={{duration:1.5}}
        className='my-20 text-center text-4xl'> Technologies </motion.h1>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity: 0,x:-100}}
        transition={{duration:1.5}}
        className='flex flex-wrap items-center justify-center gap-4'>
           <motion.div 
           variants={iconVariants(2.5)}
           initial="initial"
           animate="animate"
           className='rounded-2xl border-4 border-neutral-800 p-4'>
                <AiOutlineHtml5 className='text-7xl text-orange-600'/>
            </motion.div> 
            <motion.div 
             variants={iconVariants(5)}
             initial="initial"
             animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiCss3 className='text-7xl text-blue-600  	#264de4'/>
            </motion.div>
             <motion.div
              variants={iconVariants(6)}
              initial="initial"
              animate="animate" 
             className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiJavascript className='text-7xl text-yellow-400'/>
            </motion.div> 
            <motion.div 
             variants={iconVariants(10)}
             initial="initial"
             animate="animate"
             className='rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div
             variants={iconVariants(4)}
             initial="initial"
             animate="animate" 
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs  className='text-7xl text-cyan-400'/>
            </motion.div> 
             <motion.div
             variants={iconVariants(2.5)}
             initial="initial"
             animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiSpringboot className='text-7xl text-lime-500'/>
            </motion.div> 
            <motion.div 
             variants={iconVariants(3)}
             initial="initial"
             animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaJava className='text-7xl text-orange-600'/>
            </motion.div> 
            <motion.div
             variants={iconVariants(3.5)}
             initial="initial"
             animate="animate" 
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TbBrandMysql className='text-7xl text-cyan-800'/>
            </motion.div> 
            <motion.div
             variants={iconVariants(4)}
             initial="initial"
             animate="animate" 
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMicrosoftsqlserver className='text-7xl text-red-800'/>
            </motion.div>
            <motion.div
             variants={iconVariants(3)}
             initial="initial"
             animate="animate" 
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiPostgresql className='text-7xl text-cyan-400'/>
            </motion.div> 
            <motion.div 
             variants={iconVariants(5)}
             initial="initial"
             animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaGithub className='text-7xl text-gray-400'/>
            </motion.div> 
          
        </motion.div>
        </div>
  )

}

export default Technoloies
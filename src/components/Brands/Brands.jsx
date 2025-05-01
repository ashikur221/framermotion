import { motion } from 'motion/react';

import Brand1 from "../../assets/brand/1.png"
import Brand2 from "../../assets/brand/2.png"
import Brand3 from "../../assets/brand/3.png"
import Brand4 from "../../assets/brand/4.png"
import Brand5 from "../../assets/brand/5.png"

import { SlideLeft } from '../../animation/animate';

const Brands = () => {
    return (
        <div className='container mx-auto py-14'>
            <div className="flex flex-wrap justify-center lg:justify-between gap-6">
                <motion.img
                    variants={SlideLeft(0.2)}
                    initial="initial"
                    whileInView="animate"
                    src={Brand1}
                    alt=""
                    className='w-[110px] md:w-[200px]'
                />
                <motion.img
                    variants={SlideLeft(0.4)}
                    initial="initial"
                    whileInView={"animate"}
                    src={Brand2}
                    className='w-[110px] md:w-[200px]'
                    alt="" />

                <motion.img
                    variants={SlideLeft(0.6)}
                    initial="initial"
                    whileInView={"animate"}
                    className='w-[110px] md:w-[200px]'
                    src={Brand3} alt="" />

                <motion.img
                    variants={SlideLeft(0.8)}
                    initial="initial"
                    whileInView="animate"
                    className='w-[110px] md:w-[200px]'
                    src={Brand4} alt="" />

                <motion.img
                    variants={SlideLeft(1)}
                    initial="initial"
                    whileInView="animate"
                    className='w-[110px] md:w-[200px]'
                    src={Brand5} alt="" />
            </div>
        </div>
    );
};

export default Brands;
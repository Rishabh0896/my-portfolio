import React from "react";
import {motion} from "framer-motion";

type Props = {}

function BackgroundCircles({}: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                borderRadius: "0%",
                scale: 0,
            }}
            animate={{
                scale: [1, 1.50, 1.75, 1],
                // scale: [0.25, 0.35, 0.45, 0.65, 0.85, 1],
                opacity:[0.2, 0.4, 0.8, 1.0],
                borderRadius: ["20%", "50%", "80" ,"100%"],
            }}
            transition={{
                duration: 1.29,
            }}
            className="relative flex justify-center items-center">
            <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping"/>
            <div className="rounded-full border border-[#333333] h-[300px] w-[300px] absolute mt-52"/>
            <div className="rounded-full border border-[#333333] h-[500px] w-[500px] absolute mt-52"/>
            <div className="rounded-full border border-[#F7AB0A] opacity-20 h-[650px] w-[650px]
            absolute mt-52 animate-pulse"/>
            <div className="rounded-full border border-[#333333] h-[850px] w-[850px] absolute mt-52 "/>
            <div className="rounded-full border border-[#333333] h-[1050px] w-[1050px] absolute mt-52 "/>
            <div className="rounded-full border border-[#333333] h-[1250px] w-[1250px] absolute mt-52 "/>
            <div className="rounded-full border border-[#AD7907] h-[1450px] w-[1450px] absolute mt-52 animate-pulse"/>
            <div className="rounded-full border border-[#333333] h-[1650px] w-[1650px] absolute mt-52 "/>
        </motion.div>
    )
}

export default BackgroundCircles;
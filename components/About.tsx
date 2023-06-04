import React from "react";
import {motion,useScroll} from "framer-motion";
import {PageInfo} from "@/typings";
import {urlFor} from "@/sanity";
type Props = {
    pageInfo : PageInfo
}

export default function About({pageInfo}: Props) {
    const { scrollYProgress } = useScroll();
    return (
        <motion.div
            initial = {{
                opacity: 0,
            }}
            transition = {{
                duration: 0.8,
            }}
            whileInView={{ opacity: 1}}
            className="flex flex-col relative h-screen text-center md:text-left
        md:flex-row max-w-7xl px-10 justify-evenly  mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            About
        </h3>
            <motion.img
                initial ={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{ x:0 , opacity:1}}
                viewport={{once: true}}
                src={urlFor(pageInfo? pageInfo.profilePic: "").url()}
                // className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
                // md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[450px] z-20"
                className="relative top-10 -mb-20 md:mb-0 flex-shrink-0 w-[80px] h-[80px] md:w-[120px] md:h-[120px] xl:w-[500px]
                xl:h-[450px] rounded-full object-cover md:rounded-lg z-20"
            />
            <div className="space-y-10 px-0 md:px-10">
                {/*<h4 className="text-4xl font-semibold">Heres a {" "}*/}
                {/*    <span className="underline decoration-[#F7AB0A]/50">little</span>{" "} background*/}
                {/*</h4>*/}
            </div>
            <p className="text-base">
                {pageInfo?.backgroundInformation}
            </p>
            {/*<div className="flex-col w-full absolute top-[23%] bg-[#F7AB0A]/20 left-0 h-[500px] rounded-2xl">*/}
            {/*    <div className="w-full absolute top-[23%] bg-gradient-to-b from-[#F7AB0A] via-transparent to-[#242424] bg-opacity-20 left-0 h-[500px] rounded-2xl">*/}
            {/*</div>*/}
            <div className="w-full absolute top-[23%] bg-[#F7AB0A]/20 left-0 h-[500px] -skew-y-12"/>
        </motion.div>

    );
};
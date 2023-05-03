import React from "react";
import {motion} from "framer-motion";
type Props = {}

export default function ExperienceCard({}: Props) {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[500px]
        md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer
        transition-opacity duration-200 overflow-hidden">
            <motion.img
                initial ={{
                    y: -100,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView ={{
                    opacity:1 ,y:0
                }}
                viewport={{ once : true}}
                className="w-20 h-20 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
                src="/oracle-svgrepo-com_lred.svg"
                alt="Oracle_Logo"
            />
            <div className="px-0 md:px-10">
                <h4 className="text-2xl font-light">Associate Consultant</h4>
                <p className="font-bold text-2xl mt-1 text-red-500">Oracle</p>
                <div className="flex space-x-2 my-2">
                    <img
                        className="h-10 w-10 rounded-full"
                        src="/icons8-java.svg"
                        alt="Java"
                    />
                    <img
                        className="h-10 w-10 rounded-full"
                        src="/python.svg"
                        alt="Python"
                    />
                    <img
                        className="h-10 w-10 rounded-full"
                        src="/icons8-oracle-pl-sql.svg"
                        alt="Java"
                    />
                </div>
                <p>Start Date - End Date</p>
                <ul className="list-disc space-y-4 ml-5 text-lg">
                    <li>Summary Points</li>
                    <li>Summary Points</li>
                </ul>
            </div>
        </article>
    );
};
import React from "react";
import {motion} from "framer-motion";
import {Experience} from "@/typings";
import {urlFor} from "@/sanity";
type Props = {
    experience: Experience;
}
export default function ExperienceCard({experience}: Props) {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px]
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
                className="w-20 h-20 rounded-full xl:w-[120px] xl:h-[120px] object-contain object-center"
                src={urlFor(experience?.companyImage).url()}
                alt="Oracle_Logo"
            />
            <div className="px-0 md:px-10 xl:px-20">
                <h4 className="text-xl font-light">{experience?.jobTitle}</h4>
                <p className="font-bold text-xl mt-1">{experience?.company}</p>
                <div className="flex space-x-2 my-2">
                    {experience.technologies.map((technology) => (
                        <img
                            key = {technology._id}
                            className="h-10 w-10 rounded-full"
                            src={urlFor(technology.image).url()}
                            alt="experience_card"/>
                    ))}
                </div>
                <p>{new Date(experience?.dateStarted).toDateString()} - {" "}
                    {experience.isCurrentlyWorkingHere? "Present" :
                        new Date(experience?.dateEnded).toDateString()}</p>
                <ul className="list-disc space-y-3 ml-5 text-lg max-h-96 pr-5 overflow-y-scroll scrollbar-thin
                scrollbar-track-black scrollbar=thumb-[#F7AB0A]/80">
                    {experience.points.map((point, i) => (
                        <li key={i}>
                            {point}
                        </li>
                        ))}
                </ul>
            </div>
        </article>
    );
};
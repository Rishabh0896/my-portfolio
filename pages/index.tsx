import { Inter } from 'next/font/google'
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";
import {GetStaticProps} from "next";
import {PageInfo, Experience, Skill, Project, Social} from "@/typings";
import {fetchPageInfo} from "@/utils/fetchPageInfo";
import {fetchExperiences} from "@/utils/fetchExperiences";
import {fetchProjects} from "@/utils/fetchProjects";
import {fetchSkills} from "@/utils/fetchSkills";
import {fetchSocials} from "@/utils/fetchSocials";

const inter = Inter({ subsets: ['latin'] })

type Props = {
  pageInfo : PageInfo;
  experiences : Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

export default function Home({pageInfo, experiences, projects, skills, socials} : Props) {
  return (
  <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll
  overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
    <Head>
      <title>Rishabh portfolio</title>
    </Head>
    <Header socials={socials} />
    <section id = "hero" className="snap-start">
      <Hero pageInfo={pageInfo}/>
    </section>
    <section id = "about" className="snap-center">
      <About pageInfo={pageInfo}/>
    </section>
    <section id = "experience" className="snap-center">
      <WorkExperience experiences={experiences}/>
    </section>
    <section id = "skills" className="snap-start">
      <Skills skills={skills}/>
    </section>
    <section id= "projects" className="snap-start">
      <Projects projects={projects}/>
    </section>
    <section id = "contact" className="snap-start">
      <ContactMe />
    </section>
    <Link href="#hero">
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <img
              className="relative top-2 h-10 w-10 rounded-full filter grayscale hover:grayscale-10 cursor-pointer"
              src="/home.svg"
              alt="Back to Top"
          />
        </div>
      </footer>
    </Link>
  </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo : PageInfo = await fetchPageInfo();
  const experiences : Experience[] = await fetchExperiences();
  const projects : Project[] = await fetchProjects();
  const skills : Skill[] = await fetchSkills();
  const socials : Social[] = await fetchSocials();
  return {
    props: {
      pageInfo,
      experiences,
      projects,
      skills,
      socials,
    },
    // Next.js will attempt to re-validate at almost every 2 minutes
    revalidate: 120,
  }
};

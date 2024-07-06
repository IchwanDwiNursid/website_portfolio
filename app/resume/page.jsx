"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJenkins,
  FaLinux,
  FaDocker,
} from "react-icons/fa";
import { FaGolang, FaJ } from "react-icons/fa6";
import {
  SiMysql,
  SiTerraform,
  SiExpress,
  SiNumpy,
  SiPandas,
  SiTensorflow,
  SiTailwindcss,
  SiNextdotjs,
  SiKubernetes,
  SiPrisma,
  SiJsonwebtokens,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrGraphQl } from "react-icons/gr";

const about = {
  title: "About Me",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptatum placeat magnam",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ichwan Dwi Nursid",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+62) 856 9402 0165",
    },
    {
      fieldName: "Experiance",
      fieldValue: "5+ Years",
    },
    {
      fieldName: "Email",
      fieldValue: "idwinursid@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indonesia",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Fulltime",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English,Indonesian,Javanese",
    },
  ],
};

const experiance = {
  icon: "/assets/resume/bedge.svg",
  title: "My experience",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, eveniet minus enim repellendus molestiae pariatur aut a tempora consequuntur iure",
  items: [
    {
      company: "Freelance In Internet",
      position: "all jobs that suit my skills",
      duration: "2018 - 2019",
    },
    {
      company: "Clotes Company",
      position: "Web Developer",
      duration: "2019 - 2020",
    },
    {
      company: "PT.Astra Daihatsu Motor",
      position: "Staff Member IT",
      duration: "2021 - 2023",
    },
    {
      company: "Web Developer",
      position: "Backend Developer Intern",
      duration: "Summer 2023",
    },
    {
      company: "E-Commarce Startup",
      position: "Freelance Web Developer",
      duration: "2023 - Early 2024",
    },
    {
      company: "Export and Import Company",
      position: "Ai Chat Bot Developer",
      duration: "2024 - Present",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "I received computer education, formal and informal, I used platforms such as Udemy, YouTube, Coursera, and books, as learning resources",
  items: [
    {
      institution: "Udemy (Programmer Zaman Now)",
      degree: "Full Stack",
      duration: "2017",
    },
    {
      institution: "Youtube(Freecodecamp)",
      degree: "GraphQL , Machine Learning",
      duration: "2019",
    },
    {
      institution: "Google Cloud Platform",
      degree: "Cloud Management and Optimization",
      duration: "2022",
    },
    {
      institution: "Alibaba Cloud Academy",
      degree: "Certified AlibabaCloud",
      duration: "2021",
    },
    {
      institution: "Coursera",
      degree: "CI/CD",
      duration: "2019",
    },
    {
      institution: "Never Stop Learning",
      degree: "Never Stop Learning",
      duration: "Forever",
    },
  ],
};

const skill = {
  title: "My Skill",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, eveniet minus enim repellendus molestiae pariatur aut a tempora consequuntur iure",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <FaReact />,
      name: "react",
    },
    {
      icon: <FaGolang />,
      name: "golang",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaJenkins />,
      name: "jenkins",
    },
    {
      icon: <FaLinux />,
      name: "linux environment",
    },
    {
      icon: <FaDocker />,
      name: "docker",
    },
    {
      icon: <SiKubernetes />,
      name: "kubernetes",
    },
    {
      icon: <SiMysql />,
      name: "mysql",
    },
    {
      icon: <SiTerraform />,
      name: "terraform",
    },
    {
      icon: <SiExpress />,
      name: "express.js",
    },
    {
      icon: <SiNumpy />,
      name: "numpy",
    },
    {
      icon: <SiPandas />,
      name: "pandas",
    },
    {
      icon: <SiTensorflow />,
      name: "tensorflow",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <BiLogoPostgresql />,
      name: "postgre sql",
    },
    {
      icon: <GrGraphQl />,
      name: "graphql",
    },
    {
      icon: <SiPrisma />,
      name: "prisma",
    },
  ],
};

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs.jsx";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip.jsx";

import { ScrollArea } from "../../components/ui/scroll-area.jsx";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70px] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experiance.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experiance.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experiance.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p>{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p>{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skill.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skill.description}
                  </p>
                </div>
                <ScrollArea className="xl:h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                    {skill.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232339] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent
              value="about"
              className="w-full text-center xl:text-left mb-48"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                About
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start xl:mx-0 gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;

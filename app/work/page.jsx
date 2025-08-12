"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/Components/ui/tooltip";

import Link from "next/link";

import Image from "next/image";
import WorkSliderBtns from "@/Components/WorkSliderBtns";

// const projects = [
//   {
//     num: "01",
//     category: "mern stack",
//     title: "Personal Diary App",
//     description:
//       "A diary app with user authentication and CRUD functionality for managing personal entries, featuring a sleek UI.",
//     stack: [
//       { name: "React.js" },
//       { name: "Tailwind CSS" },
//       { name: "Express.js" },
//       { name: "MongoDB" },
//     ],
//     image: "/assets/work/thumb1.png",
//     live: "",
//     github: "https://github.com/abubakar-asghar/Diary-App-MERN",
//   },
//   {
//     num: "02",
//     category: "next js",
//     title: "Multi-Seller E-commerce Platform",
//     description:
//       "An e-commerce platform enabling multiple sellers to list products, with a dynamic admin and user dashboard.",
//     stack: [
//       { name: "Next.js" },
//       { name: "Tailwind CSS" },
//       { name: "Redux Toolkit" },
//       { name: "MongoDB" },
//     ],
//     image: "/assets/work/thumb2.png",
//     live: "",
//     github: "",
//   },
//   {
//     num: "03",
//     category: "mern stack",
//     title: "E-commerce Store",
//     description:
//       "A comprehensive e-commerce platform built with the MERN stack, featuring a robust admin panel for managing products, categories, and users. The platform allows multiple sellers to list products, supports dynamic dashboards, and includes Redux Toolkit for efficient state management.",
//     stack: [
//       { name: "React Js" },
//       { name: "Express.js" },
//       { name: "Redux" },
//       { name: "MongoDB" },
//     ],
//     image: "/assets/work/thumb2.png",
//     live: "",
//     github: "",
//   },
//   {
//     num: "04",
//     category: "frontend",
//     title: "Shopping Basket App",
//     description:
//       "A shopping basket app with dynamic cart management, checkout features, and a responsive UI.",
//     stack: [
//       { name: "Next.js" },
//       { name: "DaisyUI" },
//       { name: "TypeScript" },
//       { name: "Redux Toolkit" },
//     ],
//     image: "/assets/work/basket-app.png",
//     live: "https://nextjs-shopping-basket.vercel.app/",
//     github: "",
//   },
//   {
//     num: "05",
//     category: "frontend",
//     title: "React Timer App",
//     description:
//       "A dynamic React Timer App with customizable start, stop, and reset functionality. Built using React hooks for state management and a responsive design for seamless usability.",
//     stack: [
//       { name: "React js" },
//       { name: "Tailwind CSS" },
//       { name: "TypeScript" },
//     ],
//     image: "/assets/work/timer-app.png",
//     live: "https://ab-timer-app.surge.sh/",
//     github: "",
//   },
//   {
//     num: "06",
//     category: "frontend",
//     title: "Idlly UI Clone",
//     description:
//       "A visually captivating and responsive UI clone of the Idlly platform, showcasing proficiency in modern web design practices and interactive elements for practice purposes.",
//     stack: [
//       { name: "HTML" },
//       { name: "CSS" },
//       { name: "JavaScript" },
//       { name: "Swiper.js" },
//     ],
//     image: "/assets/work/illdy-ui.png",
//     live: "https://illdy.surge.sh/",
//     github: "",
//   },
// ];

// const Work = () => {
//   const [project, setProject] = useState(projects[0]);
//   const handleSlideChange = (swiper) => {
//     const currentIndex = swiper.activeIndex;

//     setProject(projects[currentIndex]);
//   };

//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       animate={{
//         opacity: 1,
//         transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
//       }}
//       className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
//     >
//       <div className="container mx-auto">
//         <div className="flex flex-col xl:flex-row xl:gap-[30px]">
//           <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
//             <div className="flex flex-col gap-[10px] h-[50%]">
//               <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
//                 {project.num}
//               </div>
//               <h2 className="text-[42px] font-bold leading-none mt-[10px] text-white group-hover:text-accent transition-all duration-500 capitalize">
//                 {project.title}
//               </h2>
//               <h2 className="text-[24px] font-bold leading-none text-accent mb-[10px] group-hover:text-accent transition-all duration-500 capitalize">
//                 {project.category} project
//               </h2>
//               <p className="text-white/60 my-[10px]">{project.description}</p>
//               <ul className="flex gap-4 my-[10px]">
//                 {project.stack.map((item, index) => {
//                   return (
//                     <li key={index} className="text-xl text-accent">
//                       {item.name}
//                       {index !== project.stack.length - 1 && ","}
//                     </li>
//                   );
//                 })}
//               </ul>
//               <div className="border border-white/20"></div>
//               <div className="flex items-center gap-4">
//                 <Link href={project.live} target="_blank">
//                   <TooltipProvider delayDuration={100}>
//                     <Tooltip>
//                       <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
//                         <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
//                       </TooltipTrigger>
//                       <TooltipContent>
//                         <p>Live Project</p>
//                       </TooltipContent>
//                     </Tooltip>
//                   </TooltipProvider>
//                 </Link>
//                 <Link href={project.github} target="_blank">
//                   <TooltipProvider delayDuration={100}>
//                     <Tooltip>
//                       <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
//                         <BsGithub className="text-white text-3xl group-hover:text-accent" />
//                       </TooltipTrigger>
//                       <TooltipContent>
//                         <p>Github Repository</p>
//                       </TooltipContent>
//                     </Tooltip>
//                   </TooltipProvider>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="w-full xl:w-[50%]">
//             <Swiper
//               spaceBetween={30}
//               slidesPerView={1}
//               className="xl:h-[520px] mb-12"
//               onSlideChange={handleSlideChange}
//             >
//               {projects.map((project, index) => {
//                 return (
//                   <SwiperSlide key={index} className="w-full">
//                     <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
//                       <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
//                       <div className="relative  w-full h-full">
//                         <Image
//                           src={project.image}
//                           fill
//                           className="object-cover"
//                           alt=""
//                         />
//                       </div>
//                     </div>
//                   </SwiperSlide>
//                 );
//               })}
//               <WorkSliderBtns
//                 containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
//                 btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
//               />
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };
const projects = [
  {
    num: "01",
    category: "next js",
    title: "ServMaster Admin Panel",
    description:
      "A comprehensive admin dashboard for managing service providers, customers, and services in the ServMaster ecosystem. Features include service provider verification and services management.",
    stack: [
      { name: "Next.js" },
      { name: "shadcn/ui" },
      { name: "Node.js" },
      { name: "Redux Toolkit" },
      { name: "TanStack Query" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/servmaster-admin.png",
    live: "https://servmaster-admin.vercel.app/",
    github: "https://github.com/abubakar-asghar/ServMaster-Home-Service-and-Handyman-Booking-App",
  },
  {
    num: "02",
    category: "react native",
    title: "ServMaster Mobile App",
    description:
      "A home service and handyman booking application built with React Native Expo. Customers can book services while providers can register and manage their services. Features include real-time booking and chat.",
    stack: [
      { name: "React Native" },
      { name: "Expo" },
      { name: "NativeWind" },
      { name: "Redux Toolkit" },
      { name: "TanStack Query" },
      { name: "Node.js" },
    ],
    image: "/assets/work/servmaster-mobile.png",
    live: "",
    github: "https://github.com/abubakar-asghar/ServMaster-Home-Service-and-Handyman-Booking-App",
  },
  {
    num: "03",
    category: "next js",
    title: "Multi-Seller E-commerce Platform",
    description:
      "An e-commerce platform enabling multiple sellers to list products, with a dynamic admin and user dashboard.",
    stack: [
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Redux Toolkit" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "mern stack",
    title: "E-commerce Store",
    description:
      "A comprehensive e-commerce platform built with the MERN stack, featuring a robust admin panel for managing products, categories, and users. The platform allows multiple sellers to list products, supports dynamic dashboards, and includes Redux Toolkit for efficient state management.",
    stack: [
      { name: "React Js" },
      { name: "Express.js" },
      { name: "Redux" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "frontend",
    title: "Shopping Basket App",
    description:
      "A shopping basket app with dynamic cart management, checkout features, and a responsive UI.",
    stack: [
      { name: "Next.js" },
      { name: "DaisyUI" },
      { name: "TypeScript" },
      { name: "Redux Toolkit" },
    ],
    image: "/assets/work/basket-app.png",
    live: "https://nextjs-shopping-basket.vercel.app/",
    github: "",
  },
  {
    num: "06",
    category: "mern stack",
    title: "Personal Diary App",
    description:
      "A diary app with user authentication and CRUD functionality for managing personal entries, featuring a sleek UI.",
    stack: [
      { name: "React.js" },
      { name: "Tailwind CSS" },
      { name: "Express.js" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "https://github.com/abubakar-asghar/Diary-App-MERN",
  },
  {
    num: "07",
    category: "frontend",
    title: "React Timer App",
    description:
      "A dynamic React Timer App with customizable start, stop, and reset functionality. Built using React hooks for state management and a responsive design for seamless usability.",
    stack: [
      { name: "React js" },
      { name: "Tailwind CSS" },
      { name: "TypeScript" },
    ],
    image: "/assets/work/timer-app.png",
    live: "https://ab-timer-app.surge.sh/",
    github: "",
  },
  {
    num: "08",
    category: "frontend",
    title: "Idlly UI Clone",
    description:
      "A visually captivating and responsive UI clone of the Idlly platform, showcasing proficiency in modern web design practices and interactive elements for practice purposes.",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "Swiper.js" },
    ],
    image: "/assets/work/illdy-ui.png",
    live: "https://illdy.surge.sh/",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.8, duration: 0.6, ease: "easeOut" },
      }}
      className="min-h-[90vh] flex flex-col justify-center pb-16 px-4 md:px-8 lg:px-12"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-12">
          {/* Left Content - Modified layout */}
          <div className="w-full lg:w-[45%] lg:h-[600px] flex flex-col order-2 lg:order-none mb-8 lg:mb-0">
            <div className="flex flex-col gap-6">
              <div className="flex items-baseline gap-4">
                <span className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent/70">
                  {project.num}
                </span>
                <span className="text-lg font-semibold text-accent uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                {project.title}
              </h2>

              <div className="h-[2px] w-24 bg-accent my-2"></div>

              <p className="text-white/80 leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {project.stack.map((item, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-white/10 text-accent border border-accent/30 text-sm"
                  >
                    {item.name}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6">
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-16 h-16 rounded-lg bg-accent/10 hover:bg-accent/20 flex justify-center items-center transition-all duration-300 border border-accent/30">
                        <BsArrowUpRight className="text-accent text-2xl" />
                      </TooltipTrigger>
                      <TooltipContent className="bg-accent text-primary">
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-16 h-16 rounded-lg bg-accent/10 hover:bg-accent/20 flex justify-center items-center transition-all duration-300 border border-accent/30">
                        <BsGithub className="text-accent text-2xl" />
                      </TooltipTrigger>
                      <TooltipContent className="bg-accent text-primary">
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Content - Modified slider */}
          <div className="w-full lg:w-[55%] relative">
            <Swiper
              spaceBetween={24}
              slidesPerView={1}
              className="lg:h-[540px] rounded-xl overflow-hidden shadow-2xl"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[400px] lg:h-[540px] relative group flex justify-center items-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt={project.title}
                        priority={index === 0}
                      />
                    </div>
                    <div className="absolute bottom-6 left-6 z-20">
                      <span className="text-white text-lg font-medium">
                        {project.num} — {project.title}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="absolute bottom-6 right-6 z-20 flex gap-3"
                btnStyles="bg-accent hover:bg-accent/90 text-primary text-xl w-12 h-12 rounded-lg flex justify-center items-center transition-all shadow-md"
                iconsStyles="text-xl"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default Work;

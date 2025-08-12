// "use client";

// import { BsArrowDownRight } from "react-icons/bs";
// import Link from "next/link";

// const Services = [
//   {
//     num: "01",
//     title: "MERN Stack Development",
//     description:
//       "Specializing in developing full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
//     href: "",
//   },
//   {
//     num: "02",
//     title: "Next.js Development",
//     description:
//       "Building high-performance, SEO-friendly web applications using Next.js and its advanced features.",
//     href: "",
//   },
//   {
//     num: "03",
//     title: "Front-End Development",
//     description:
//       "Creating visually appealing and responsive user interfaces using modern frameworks like React.js.",
//     href: "",
//   },
//   {
//     num: "04",
//     title: "Back-End Development",
//     description:
//       "Providing robust and scalable server-side solutions with efficient database management.",
//     href: "",
//   },
//   {
//     num: "05",
//     title: "E-Commerce Development",
//     description:
//       "Developing feature-rich e-commerce platforms with dynamic dashboards for sellers and admins.",
//     href: "",
//   },
// ];

// import { motion } from "framer-motion";

// export const services = () => {
//   return (
//     <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
//       <div className="container mx-auto">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{
//             opacity: 1,
//             transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
//           }}
//           className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
//         >
//           {Services.map((service, index) => {
//             return (
//               <div
//                 key={index}
//                 className="flex-1 flex flex-col justify-center gap-6 group"
//               >
//                 <div className="flex w-full justify-between items-center">
//                   <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
//                     {service.num}
//                   </div>
//                   <Link
//                     href={service.href}
//                     className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
//                   >
//                     <BsArrowDownRight className="text-primary text-3xl" />
//                   </Link>
//                 </div>
//                 <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
//                   {service.title}
//                 </h2>
//                 <p className="text-white/60">{service.description}</p>
//                 <div className="border-b border-white/20 w-full"></div>
//               </div>
//             );
//           })}
//         </motion.div>
//       </div>
//     </section>
//   );
// };
// export default services;

"use client";

import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";

const Services = [
  {
    num: "01",
    title: "MERN Stack Development",
    description:
      "Specializing in developing full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
    href: "",
  },
  {
    num: "02",
    title: "Next.js Development",
    description:
      "Building high-performance, SEO-friendly web applications using Next.js and its advanced features.",
    href: "",
  },
  {
    num: "03",
    title: "Front-End Development",
    description:
      "Creating visually appealing and responsive user interfaces using modern frameworks like React.js.",
    href: "",
  },
  {
    num: "04",
    title: "Back-End Development",
    description:
      "Providing robust and scalable server-side solutions with efficient database management.",
    href: "",
  },
  {
    num: "05",
    title: "E-Commerce Development",
    description:
      "Developing feature-rich e-commerce platforms with dynamic dashboards for sellers and admins.",
    href: "",
  },
];

const ServicesPage = () => {
  return (
    <section className="min-h-screen flex items-center pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="flex flex-col"
        >
          {/* <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="text-accent">Services</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-white/70 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your digital needs
            </p>
          </div> */}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {Services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-accent/30 transition-all duration-300"
              >
                <div className="p-8 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-accent text-3xl font-bold">
                      {service.num}
                    </span>
                    <Link
                      href={service.href}
                      className="w-12 h-12 rounded-full bg-accent/10 hover:bg-accent/20 flex items-center justify-center transition-all duration-300 group"
                    >
                      <FiArrowRight className="text-accent text-xl group-hover:rotate-45 transition-transform duration-300" />
                    </Link>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-white/70 mb-6 flex-grow">
                    {service.description}
                  </p>

                  <div className="pt-4 border-t border-white/10">
                    <Link
                      href={service.href}
                      className="inline-flex items-center text-accent hover:text-accent/80 transition-colors duration-300"
                    >
                      Learn more
                      <FiArrowRight className="ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-white/60">
              Have a custom project in mind?{" "}
              <Link
                href="/contact"
                className="text-accent hover:underline transition-colors duration-300"
              >
                Let&apos;s discuss
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPage;
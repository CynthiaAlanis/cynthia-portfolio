import Head from "next/head";
import { useState } from "react";

import deved from "../public/CynthiaAlanis.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/Formaline.png";
import web2 from "../public/DjRay.png";
import web3 from "../public/Greener.png";
import web4 from "../public/Treatment.png";
import web5 from "../public/stock.png";
import web6 from "../public/star.png";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";



export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Cynthia Alanis</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">developed by Cynthia Alanis</h1>
            <ul className="flex items-center">
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="Resume.pdf"     
                >
                  Resume
                </a>
              </li>
              {/* <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#About"
                >
                  About
                </a>
              </li> */}
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#Projects"
                >
                  Projects
                </a>
              </li>
            
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              
            </ul>
          </nav>

          <div className="text-center p-10 py-10">
            <h2 className="my text-5xl py-2 text-teal-500 font-medium dark:text-teal-400 md:text-6xl">
              CYNTHIA ALANIS
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Developer and designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            Hello, my name is Cynthia Alanis and I am a detail-oriented software developer with experience working with electronic health records. I have been working in the helping profession for over 7 years where I enjoyed creating a safe place for people experiencing trauma. I’m transitioning to a career in software development because I immediately fell in love with the syntax in computer programming, and started doing freelance work for family members and friends. During my time at General Assembly in the Software Engineering Immersive, I have gained knowledge in SQL, Javascript, MongoDB, React, HTML, and CSS. My career path has taught me to become patient, empathetic, and resilient. I believe those three skills will make me a good candidate for a software engineering position. I enjoy seeing people grow their businesses and I am glad I can help create their signature website.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">

              <a href="https://github.com/CynthiaAlanis">
              <AiFillGithub />
              </a>

              <a href="https://www.linkedin.com/in/cynthia-alanis/">
              <AiFillLinkedin />
              </a>

              <a href="mailto:cynthia.alanis917@gmail.com" class="email">
              <AiOutlineMail />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image className="me" src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              As a freelance web developer, I offer a range of services tailored to the needs of my clients. With a specialization in <span className="text-teal-500">React</span>, I bring expertise in creating dynamic and interactive web applications. Throughout my journey as a designer and developer, I have worked remotely with <span className="text-teal-500">independent contractors</span>, gaining valuable experience in collaborating across different time zones and cultures.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
             
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">

              <Image src={design} width={100} height={100} />

              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Canva</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Languages and Framework Tools I Use</h4>
              <p className="text-gray-800 py-1">Javascript</p>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">CSS</p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">PostgreSQL</p>
              <p className="text-gray-800 py-1">Express</p>

            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Connect</h3>
              <p className="py-2">
              Are you interested in learning more about the website I've built? I would be delighted to discuss it with you! Feel free to reach out to me using the contact links below. I look forward to connecting with you!
              </p>
              <h4 className="py-4 text-teal-600">Contact me</h4>
              <a h4 className="text-gray-800 py-1" href="mailto:cynthia.alanis917@gmail.com" class="email">Email</a>
              <br/>
              
             
              <a h4 className="text-gray-800 py-1"  href="https://www.linkedin.com/in/cynthia-alanis/">
              LinkedIn
              </a>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div id="Projects">
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
             Here are some of my 
              <span className="text-teal-500"> projects. </span>
              Click on the <span className="text-teal-500">image </span>and it will take you to the live site. 
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <a href="https://formalinedesign.netlify.app">
                
              <Image
                className="project-pic rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
                url="https://formalinedesign.netlify.app"
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://dj-ray.netlify.app">

              <Image
                className="project-pic rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
                url="https://dj-ray.netlify.app"
              />
              </a>
            </div>
            
            <div className="basis-1/3 flex-1">
              <a href="https://less-is-greener.netlify.app/">
              <Image
                className="project-pic rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
                url="https://less-is-greener.netlify.app/"
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://treatment-centers.herokuapp.com">
              <Image
                className="project-pic rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
                url="https://treatment-centers.herokuapp.com"
              />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
            <a href="https://alanis-stocks-api.netlify.app/" >
              <Image
                className="project-pic rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
                url="https://alanis-stocks-api.netlify.app/"
              />
               </a>
            </div>
           
            <div className="basis-1/3 flex-1">
              <a href="https://alanis-star-wars-api.netlify.app/">
              <Image
                className="project-pic rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
                url="https://alanis-star-wars-api.netlify.app/"
              />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

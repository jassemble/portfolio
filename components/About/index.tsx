import React, { useEffect, useRef, useState } from "react"

import {
  backendSkills,
  experiences,
  frontendSkills,
  otherSkills,
} from "@/config/site"

const About = () => {
  const scrollRef = useRef(null)
  const [isScrolling, setIsScrolling] = useState(true)

  useEffect(() => {
    let scrollInterval

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (scrollRef.current && isScrolling) {
          scrollRef.current.scrollTop += 1 // Adjust scroll speed here
          if (
            scrollRef.current.scrollTop + scrollRef.current.clientHeight >=
            scrollRef.current.scrollHeight
          ) {
            clearInterval(scrollInterval)
          }
        }
      }, 20) // Adjust interval speed here
    }

    startScrolling()

    // Cleanup on component unmount
    return () => clearInterval(scrollInterval)
  }, [isScrolling])

  const stopScrolling = () => {
    setIsScrolling(false)
  }

  const handleUserInteraction = () => {
    stopScrolling()
  }
  return (
    <div
      className="auto-scroll-div"
      ref={scrollRef}
      onClick={handleUserInteraction}
      onWheel={handleUserInteraction}
      onTouchMove={handleUserInteraction}
      style={{
        padding: "2rem",
        backgroundColor: "rgba(0,0,0,.55)",
        overflow: "auto",
        height: "100%",
      }}
    >
      <div className="flex-1 mb-6">
        <p className="mb-2 text-3xl text-left	">I'm Specialized in</p>
        <p className="mb-5 flex items-center text-3xl font-medium text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-chevron-right "
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
          <span className="text-[#00FFFF]">FullStack Development</span>
        </p>
        <div className="flex flex-wrap">
          <div>
            <p className="mb-2 text-left">
              Hello! I am a Frontend Developer with over 6 years of experience
              in building scalable and efficient web applications. I have a
              strong passion for developing solutions from the ground up and
              take pride in transforming innovative ideas into seamless user
              experiences. With a blend of creativity, technical expertise, and
              meticulous attention to detail, I am committed to delivering
              optimal software solutions tailored to meet diverse client needs.
            </p>
            {/* <p className="text-left	">
              Outside of my professional pursuits, I maintain an active and
              creative lifestyle. I enjoy riding motorcycles, sketching, and
              trekking in nature. Additionally, I dedicate time to reading and
              continuously expanding my knowledge of new languages and
              frameworks.
            </p> */}
          </div>
        </div>
      </div>
      <div className="mb-6 flex w-full items-center gap-2 text-3xl text-white">
        <h2 id="tech-i-use">
          <span className="mr-2 font-bold text-[#00FFFF]">#</span>Tech Stack
        </h2>
        <div className="h-[1px] flex-1 bg-[#00FFFF]"></div>
      </div>
      <div className="pl-2">
        <h3 className="mb-5 self-center border-l-2 border-[#00FFFF] pl-3 text-lg text-white text-left	">
          Frontend Development
        </h3>
        <div className="mb-8 flex flex-wrap gap-6 pl-2">
          {frontendSkills.map((skill) => (
            <a
              key={skill.name}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/skill flex items-center"
            >
              <img
                alt={skill.name}
                loading="lazy"
                width="28"
                height="28"
                decoding="async"
                data-nimg="1"
                className="transition-transform group-hover/skill:scale-150"
                style={{ color: "transparent" }}
                src={skill.imagePath}
              />
              <span className="ml-2 text-sm font-bold group-hover/skill:text-primary">
                {skill.name}
              </span>
            </a>
          ))}
        </div>
      </div>
      <div className="pl-2">
        <h3 className="mb-5 self-center border-l-2 border-[#00FFFF] pl-3 text-lg text-white text-left	">
          Backend Development
        </h3>
        <div className="mb-8 flex flex-wrap gap-6 pl-2">
          {backendSkills.map((skill) => (
            <a
              key={skill.name}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/skill flex items-center"
            >
              <img
                alt={skill.name}
                loading="lazy"
                width="28"
                height="28"
                decoding="async"
                data-nimg="1"
                className="transition-transform group-hover/skill:scale-150"
                style={{ color: "transparent" }}
                src={skill.imagePath}
              />
              <span className="ml-2 text-sm font-bold group-hover/skill:text-primary">
                {skill.name}
              </span>
            </a>
          ))}
        </div>
      </div>
      <div className="pl-2">
        <h3 className="mb-5 self-center border-l-2 border-[#00FFFF] pl-3 text-lg text-white text-left	">
          Others...and more!
        </h3>
        <div className="mb-8 flex flex-wrap gap-6 pl-2">
          {otherSkills.map((skill) => (
            <a
              key={skill.name}
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group/skill flex items-center"
            >
              <img
                alt={skill.name}
                loading="lazy"
                width="28"
                height="28"
                decoding="async"
                data-nimg="1"
                className="transition-transform group-hover/skill:scale-150"
                style={{ color: "transparent" }}
                src={skill.imagePath}
              />
              <span className="ml-2 text-sm font-bold group-hover/skill:text-primary">
                {skill.name}
              </span>
            </a>
          ))}
        </div>
      </div>
      <div className="mb-6 flex w-full items-center gap-2 text-3xl text-white">
        <h2 id="tech-i-use">
          <span className="mr-2 font-bold text-[#00FFFF]">#</span>Experiences
        </h2>
        <div className="h-[1px] flex-1 bg-[#00FFFF]"></div>
      </div>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-8 pl-2 text-left">
          <h3 className="mb-3 self-center border-l-2 border-[#00FFFF] pl-3 text-lg text-white">
            {exp.company}
          </h3>
          <div className="pl-3">
            <h4 className="mb-4">{exp.position}</h4>
            <p className="mb-4 text-gray-300">{exp.duration}</p>
            <ul className="list-disc pl-4">
              {exp.tasks.map((task, i) => (
                <li key={i} className="mb-2">
                  {task}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

export default About

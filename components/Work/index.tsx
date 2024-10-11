import React, { useEffect, useState } from "react"

const Work = () => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 gap-6" // Using grid layout with responsive columns
      style={{
        padding: "2rem",
        backgroundColor: "rgba(0,0,0,.55)",
        overflow: "auto",
        height: "100%",
      }}
    >
      <a
        href="https://www.github.com/geekyants/express-typescript-postgres"
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-start text-left justify-center p-2 rounded border-2 border-[#00FFFF] bg-[rgba(0,255,255,0.2)] relative overflow-hidden cursor-pointer font-bold text-sm transition-transform duration-200 hover:shadow-[0_0_10px_2px_#00FFFF]"
      >
        <img
          alt="GitHub Repo stars"
          src="https://img.shields.io/github/stars/geekyants/express-typescript-postgres?label=Github%20Stars&style=for-the-badge"
        />
        <div
          className="opacity-85 mt-2"
          style={{ textShadow: "rgba(0, 0, 0, 0.3) 0px 2px 10px" }}
        >
          An API Boilerplate for Node.js, Express.js & PostgreSQL. We've tried
          to move most of the logic base from NodeJS to Postgres' DB functions.
        </div>
        <div className="uppercase tracking-[0.025em] pt-8 text-[1.875rem] font-medium leading-[1]">
          Express Typescript Postgres
        </div>
      </a>
      <a
        href="https://techblog.geekyants.com/being-a-full-stack-developer-a-journey"
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-start text-left justify-between p-2 rounded border-2 border-[#00FFFF] bg-[rgba(0,255,255,0.2)] relative overflow-hidden cursor-pointer font-bold text-sm transition-transform duration-200 hover:shadow-[0_0_10px_2px_#00FFFF]"
      >
        <div className="uppercase tracking-[0.025em] text-[1.5rem] font-medium leading-[1]">
          Being a Full Stack Developer: A Journey
        </div>
        <div className="opacity-85 mt-2">
          Full Stack development is the buzz word nowadays. More and more
          companies are hiring full-stack developers to save time, cost and make
          their deliveries more efficient, but most people are still confused
          about terms like Full Stack developers, MEAN Stack developers, MERN
          Stack developers etc.
        </div>
      </a>
    </div>
  )
}

export default Work

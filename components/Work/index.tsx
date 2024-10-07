import React from "react"

const Work = () => {
  return (
    <div
      className="flex space-x-6"
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
        className="flex flex-col items-start text-left justify-center p-2 rounded border-2 border-[#00FFFF] bg-[rgba(0,255,255,0.2)] relative overflow-hidden  cursor-pointer font-bold text-sm transition-transform duration-200 hover:shadow-[0_0_10px_2px_#00FFFF]"
      >
        <img
          alt="GitHub Repo stars"
          src="https://img.shields.io/github/stars/geekyants/express-typescript-postgres?label=Github%20Stars&amp;style=for-the-badge"
        />
        <div
          className="opacity-85 mt-2"
          style={{ textShadow: "rgba(0, 0, 0, 0.3) 0px 2px 10px" }}
        >
          An API Boilerplate for Node.js, Express.js &amp; PostgresSQL. We've
          tried to move most of the logic base from NodeJS to Postgres' DB
          functions.
        </div>
        <div className="uppercase tracking-[0.025em] pt-8 text-[1.875rem] font-medium leading-[1]">
          Express Typescript Postgres
        </div>
      </a>
      <a
        href="https://www.github.com/geekyants/express-typescript-postgres"
        target="_blank"
        rel="noreferrer"
        className="flex flex-col items-start text-left justify-center p-2 rounded border-2 border-[#00FFFF] bg-[rgba(0,255,255,0.2)] relative overflow-hidden  cursor-pointer font-bold text-sm transition-transform duration-200 hover:shadow-[0_0_10px_2px_#00FFFF]"
      >
        <img
          alt="GitHub Repo stars"
          src="https://img.shields.io/github/stars/geekyants/express-typescript-postgres?label=Github%20Stars&amp;style=for-the-badge"
        />
        <div
          className="opacity-85 mt-2"
          style={{ textShadow: "rgba(0, 0, 0, 0.3) 0px 2px 10px" }}
        >
          An API Boilerplate for Node.js, Express.js &amp; PostgresSQL. We've
          tried to move most of the logic base from NodeJS to Postgres' DB
          functions.
        </div>
        <div className="uppercase tracking-[0.025em] pt-8 text-[1.875rem] font-medium leading-[1]">
          Express Typescript Postgres
        </div>
      </a>
    </div>
  )
}

export default Work

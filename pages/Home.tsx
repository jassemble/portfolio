"use client"

import React from "react"

import About from "@/components/About"
import Contact from "@/components/Contact"
import ReactorOne from "@/components/ReacterOne"
import Work from "@/components/Work"

const Home: React.FC = () => {
  const [isVisible, setVisible] = React.useState(false)
  const [selectedIndex, setSelectedIndex] = React.useState<number>(3)
  const domRef = React.useRef(null)
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting))
    })
    //@ts-ignore
    observer.observe(domRef.current)
    //@ts-ignore
    return () => observer.unobserve(domRef.current)
  }, [])
  return (
    <>
      <section
        className="flex items-center w-screen h-screen"
        style={{ justifyContent: "space-around" }}
      >
        <div className="flex justify-end" style={{ paddingLeft: "8rem" }}>
          <ReactorOne
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
          />
        </div>
        <div
          className="flex justify-center w-full items-center"
          style={{ padding: "3rem 4rem 3rem 8rem", height: "100%" }}
        >
          {selectedIndex === 0 && (
            <div
              className={`fade-in-section`}
              ref={domRef}
              style={{ textAlign: "center", height: "100%" }}
            >
              <About />
            </div>
          )}
          {selectedIndex === 1 && (
            <div
              className={`fade-in-section`}
              ref={domRef}
              style={{ textAlign: "center" }}
            >
              <Work />
            </div>
          )}

          {selectedIndex === 2 && (
            <div className={`fade-in-section w-full`} ref={domRef}>
              <Contact />
            </div>
          )}
          {selectedIndex === 3 && (
            <div
              className={`fade-in-section`}
              ref={domRef}
              style={{ textAlign: "center" }}
            >
              <h1
                style={{ fontWeight: 700, fontSize: "5rem" }}
                className="mx-auto mb-4 overflow-hidden whitespace-nowrap text-6xl font-bold md:mb-6 md:text-8xl"
              >
                <span
                  style={{
                    color: "transparent", // Equivalent of text-fill-transparent

                    WebkitBackgroundClip: "text", // Webkit-specific for text clipping
                    backgroundImage:
                      "linear-gradient(-45deg, #0ff1ce 20%, #ff00ff 40%, #ff00ff 60%, #0ff1ce 80%)",
                    // "linear-gradient(-45deg, #00f260 20%, #0575e6 40%, #0575e6 60%, #00f260 80%)",
                    // "linear-gradient(-45deg,#68f1f0 20%,#073c4b 40%,#073c4b 60%,#68f1f0 80%)",
                    backgroundSize: "200%", // bg-size-200
                    animation: "js-bg 3s infinite linear", // animate-js-bg
                  }}
                >
                  Jaspreet
                </span>
                &nbsp;Singh
              </h1>
              {/* <h1 style={{ fontSize: 60 }}>Jaspreet Singh</h1> */}
              <p style={{ fontSize: "1.875rem" }}>Passionate Web Developer</p>
              <p style={{ fontSize: "1rem", maxWidth: "36rem" }}>
                Full Stack Developer from India with solid experience in
                building complex applications using cutting-edge technology.
              </p>
            </div>
          )}
        </div>
        <style jsx>{`
          .animate-js-bg {
            animation: js-bg 2s linear infinite;
          }
          .bg-js-gradient {
            background-image: linear-gradient(
              -45deg,
              #ff4e00 20%,
              #ec9f05 40%,
              #ec9f05 60%,
              #ff4e00 80%
            );
          }
          @keyframes js-bg {
            100% {
              background-position: 200%;
            }
          }
          .fade-in-section {
            opacity: 0;
            transition: opacity 1s ease-in-out; /* Transition for fade in/out */
            animation: fadeIn 1s ease-in forwards;
          }

          @keyframes fadeIn {
            to {
              opacity: 1;
              // transform: translateY(-20px); /* Start position (20px below) */
            }
          }

          @keyframes fadeOut {
            to {
              opacity: 0;
              // transform: translateY(20px); /* End position (original) */
            }
          }
        `}</style>
      </section>
    </>
  )
}

export default Home

"use client"

import React from "react"
import range from "lodash/range"

import Hexagon from "../Honeycomb/Hexagon"
import ResponsiveHoneycomb from "../Honeycomb/ResponsiveHoneycomb"

const HoneycombGrid: React.FC = () => {
  const items = range(171)
  const sideLength = 44

  return (
    <div className="hexagon-grid-container glowing" style={{ marginTop: -35 }}>
      <ResponsiveHoneycomb
        defaultWidth={1512}
        size={sideLength}
        items={items}
        renderItem={(item, index) => (
          <Hexagon key={index}>
            <div
              className="border-top-left "
              style={{
                position: "relative",
                height: "100%",
                width: "100%",
                clipPath:
                  "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                backgroundColor: "#0b0a0c",
              }}
            />
          </Hexagon>
        )}
      />

      {/* Glowing background animation */}
      <style jsx>{`
        .hexagon-grid-container {
          background-color: #0b0a0c;
          position: relative;
          overflow: hidden;
        }

        .hexagon-grid-container.glowing {
          background: radial-gradient(
              circle at 10% 10%,
              rgba(0, 255, 255, 0.8) 0%,
              rgba(0, 255, 255, 0) 8%
            ),
            radial-gradient(
              circle at 40% 30%,
              rgba(0, 255, 255, 0.7) 0%,
              rgba(0, 255, 255, 0) 8%
            ),
            radial-gradient(
              circle at 70% 50%,
              rgba(0, 255, 255, 0.6) 0%,
              rgba(0, 255, 255, 0) 8%
            ),
            radial-gradient(
              circle at 30% 70%,
              rgba(0, 255, 255, 0.5) 0%,
              rgba(0, 255, 255, 0) 8%
            ),
            radial-gradient(
              circle at 60% 90%,
              rgba(0, 255, 255, 0.4) 0%,
              rgba(0, 255, 255, 0) 8%
            ),
            radial-gradient(
              circle at 80% 30%,
              rgba(0, 255, 255, 0.5) 0%,
              rgba(0, 255, 255, 0) 8%
            ),
            radial-gradient(
              circle at 20% 50%,
              rgba(0, 255, 255, 0.4) 0%,
              rgba(0, 255, 255, 0) 8%
            ),
            radial-gradient(
              circle at 50% 80%,
              rgba(0, 255, 255, 0.6) 0%,
              rgba(0, 255, 255, 0) 8%
            );
          background-size: 300% 300%;
          animation: glowingMove 30s infinite linear,
            pulsate 6s infinite ease-in-out;
        }

        @keyframes glowingMove {
          0% {
            background-position: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%,
              0% 0%;
          }
          50% {
            background-position: 100% 100%, 100% 100%, 100% 100%, 100% 100%,
              100% 100%, 100% 100%, 100% 100%, 100% 100%;
          }
          100% {
            background-position: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%,
              0% 0%;
          }
        }

        @keyframes pulsate {
          0% {
            background-size: 100% 100%;
          }
          50% {
            background-size: 200% 200%;
          }
          100% {
            background-size: 100% 100%;
          }
        }

        .hexagon-item {
          position: relative;
        }

        .border-top-left {
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 0px 0 0 1px; /* Adjust thickness as needed */
          border-color: transparent transparent transparent #161616; /* Adjust color as needed */
          z-index: 1;
        }
      `}</style>
    </div>
  )
}

export default HoneycombGrid

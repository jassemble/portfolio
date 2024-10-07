import React, { useRef } from "react"
import { range } from "lodash"

import { Button } from "../ui/button"

const ReactorOne = ({ selectedIndex, setSelectedIndex }: any) => {
  const buttons = range(4)
  const totalButtons = buttons.length
  const rotationAngle = 360 / totalButtons
  // const handleMouseLeave = () => {
  //   const audioRef = document.getElementById("hoverSound")
  //   if (audioRef) {
  //     audioRef.pause()
  //     audioRef.currentTime = 0 // Reset audio
  //   }
  // }
  const playSound = () => {
    const audioRef = document.getElementById("hoverSound")
    if (audioRef) {
      //@ts-ignore
      audioRef.play()
      // .then(() => console.log("then"))
      // .catch(() => {
      //   // Get the element you want to simulate a click on
      //   document.getElementById("your-element-id")?.click()

      //   // Create a new mouse event
      //   // const clickEvent = new MouseEvent("click", {
      //   //   bubbles: true, // Event bubbles up
      //   //   cancelable: true, // Event can be canceled
      //   //   view: window, // The window object
      //   // })

      //   // // Dispatch the event
      //   // element.dispatchEvent(clickEvent)
      //   // document.getElementById("hoverSound").play()
      //   // $(".circle-6").click(function () {
      //   //   console.log("clicked")
      //   // })
      //   // document.getElementsByClassName("circle-6").click()
      //   // .addEventListener('click', function (event) {
      //   //     // do something
      //   // });
      //   // document.getElementsByClassName("circle-6")[0].click()
      //   console.log("catch")
      // })
    }
    // const audioRef = document.getElementById("hoverSound")
    // console.log("first", audioRef)
    // if (audioRef) {
    //   audioRef.play().catch((error) => {
    //     console.error("Audio play failed:", error)
    //   })
    // }
  }
  const handleClick = (index: number) => {
    setSelectedIndex(index)
    playSound()
    // document.getElementById("clickSound")?.play()
  }
  return (
    <div className="fullpage-wrapper flex justify-center items-center">
      <div className="button-circle">
        <div className="button-coil coil-2">About</div>
        <div className="button-coil coil-4">Work</div>
        <div className="button-coil coil-6">Contact</div>
        <div className="button-coil coil-8">Home</div>
      </div>
      <div className="button-circle">
        {buttons.map((_, index) => (
          <li
            className={selectedIndex === index ? "selected" : ""}
            key={index}
            // onMouseEnter={!(selectedIndex === index) ? playSound : () => {}}
            // onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index)}
            style={{
              transform: `rotate(${index * rotationAngle}deg) skewY(0deg)`,
            }}
          ></li>
        ))}
      </div>
      <div className="reactor-container">
        <div className="reactor-container-inner circle abs-center"></div>
        <div className="tunnel circle abs-center"></div>
        <div className="core-wrapper circle abs-center"></div>
        <div className="core-outer circle abs-center"></div>
        <div className="core-inner circle abs-center"></div>
        <div className="circle-6"></div>
        <div className="coil-container">
          <div className="coil coil-1"></div>
          <div className="coil coil-2"></div>
          <div className="coil coil-3"></div>
          <div className="coil coil-4"></div>
          <div className="coil coil-5"></div>
          <div className="coil coil-6"></div>
          <div className="coil coil-7"></div>
          <div className="coil coil-8"></div>
        </div>
      </div>

      <style jsx>
        {`
          li:hover {
            background-color: rgba(
              82,
              254,
              254,
              0.3
            ); /* Background color on hover */
            transform: scale(1.1); /* Slightly enlarge on hover */
          }

          li.selected {
            background-color: rgba(
              82,
              254,
              254,
              0.6
            ); /* Different background for selected */
            box-shadow: 0px 0px 15px #52fefe; /* Stronger glow */
            transform: scale(1.15); /* Slightly larger for selected */
          }
          .button-coil {
            position: absolute;
            width: 30px;
            height: 20px;
            top: calc(50% - 185px);
            left: calc(50% - 15px);
            transform-origin: 15px 185px;
            color: #52fefe;
            // background-color: #073c4b;
            // box-shadow: 0px 0px 5px #52fefe inset;
          }
          .button-circle {
            width: 400px;
            height: 400px;
            margin: auto;
            // border: 1px dashed #888;
            background-color: #171b1b;
            opacity: 70%;
            position: absolute;
            border-radius: 50%;
            // background-color: #384c50;
            // border: 1px solid rgb(18, 20, 20);
            box-shadow: 0px 0px 32px 8px rgb(18, 20, 20),
              0px 0px 4px 1px rgb(18, 20, 20) inset;
            list-style: none;
            overflow: hidden;
            animation: rotate-left 3s forwards;
          }
          li {
            overflow: hidden;
            position: absolute;
            background-color: #073c4b;
            top: 0;
            right: 0;
            width: 50%;
            height: 50%;
            transform-origin: 0% 100%;
            border-left: 1px solid #52fefe;
            cursor: pointer;
            // box-shadow: 0px 0px 5px #52fefe inset;
            cursor: pointer;
          }
          .text {
            position: absolute;
            left: -100%;
            width: 200%;
            height: 200%;
            text-align: center;
            -webkit-transform: skewY(60deg) rotate(15deg);
            -ms-transform: skewY(60deg) rotate(15deg);
            transform: skewY(60deg) rotate(15deg);
            padding-top: 10px;
          }
          // li:first-child .text {
          //   background: green;
          // }
          // li:nth-child(2) .text {
          //   background: tomato;
          // }
          // li:nth-child(3) .text {
          //   background: aqua;
          // }
          // li:nth-child(4) .text {
          //   background: yellow;
          // }
          // li:nth-child(5) .text {
          //   background: orange;
          // }
          // li:nth-child(6) .text {
          //   background: purple;
          // }
          // li:nth-child(7) .text {
          //   background: cyan;
          // }
          // li:nth-child(8) .text {
          //   background: brown;
          // }
          // li:nth-child(9) .text {
          //   background: gray;
          // }
          // li:nth-child(10) .text {
          //   background: pink;
          // }
          // li:nth-child(11) .text {
          //   background: maroon;
          // }
          // li:nth-child(12) .text {
          //   background: gold;
          // }

          .circle-6 {
            position: absolute;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            z-index: 99;
          }

          .circle-6::after {
            content: "";
            display: block;
            width: 105px;
            height: 105px;
            border-radius: 50%;
            border: 12px dashed #69f1f1;
            animation: rotate-left 3s forwards;
          }
          @keyframes rotate-left {
            0% {
              transform: rotate(360deg);
            }
            100% {
              transform: rotate(0deg);
            }
          }
          .reactor-container {
            width: 300px;
            height: 300px;
            margin: auto;
            // border: 1px dashed #888;
            position: relative;
            border-radius: 50%;
            background-color: #384c50;
            // border: 1px solid rgb(18, 20, 20);
            box-shadow: 0px 0px 15px 1px #52fefe, 0px 0px 1px 0px #52fefe inset;
          }
          .reactor-container-inner {
            height: 238px;
            width: 238px;
            background-color: rgb(22, 26, 27);
            box-shadow: 0px 0px 4px 1px #52fefe;
          }

          .circle {
            border-radius: 50%;
          }
          .abs-center {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            margin: auto;
          }
          .core-inner {
            width: 70px;
            height: 70px;
            border: 5px solid #1b4e5f;
            background-color: #ffffff;
            box-shadow: 0px 0px 7px 5px #52fefe, 0px 0px 10px 10px #52fefe inset;
          }
          .core-outer {
            width: 120px;
            height: 120px;
            border: 1px solid #52fefe;
            background-color: #ffffff;
            box-shadow: 0px 0px 2px 1px #52fefe, 0px 0px 10px 5px #52fefe inset;
          }
          .core-wrapper {
            width: 180px;
            height: 180px;
            background-color: #073c4b;
            box-shadow: 0px 0px 5px 4px #52fefe, 0px 0px 6px 2px #52fefe inset;
          }
          .tunnel {
            width: 220px;
            height: 220px;
            background-color: #ffffff;
            box-shadow: 0px 0px 5px 1px #52fefe, 0px 0px 5px 4px #52fefe inset;
          }
          .coil-container {
            position: relative;
            width: 100%;
            height: 100%;
            animation: reactor-anim 3s forwards;
            border-radius: 50%;
          }
          .coil {
            position: absolute;
            width: 30px;
            height: 20px;
            top: calc(50% - 110px);
            left: calc(50% - 15px);
            transform-origin: 15px 110px;
            background-color: #073c4b;
            box-shadow: 0px 0px 5px #52fefe inset;
          }
          .coil-1 {
            transform: rotate(0deg);
          }
          .coil-2 {
            transform: rotate(45deg);
          }
          .coil-3 {
            transform: rotate(90deg);
          }
          .coil-4 {
            transform: rotate(135deg);
          }
          .coil-5 {
            transform: rotate(180deg);
          }
          .coil-6 {
            transform: rotate(225deg);
          }
          .coil-7 {
            transform: rotate(270deg);
          }
          .coil-8 {
            transform: rotate(315deg);
          }
          @keyframes reactor-anim {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  )
}
export default ReactorOne

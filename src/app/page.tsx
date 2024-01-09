"use client"
import Image from "next/image";
import { assets } from "@/utils/assetUtils";
import { type Framework, frameworks } from "@/utils/frameworkUtils";
import { useState, useEffect } from "react";
import { cn } from "@/utils/tailwindUtils";
import { Poppins } from "next/font/google";
import { FrameworkRotation } from "@/components/frameworkRotation";
import { countDownTimer } from "@/components/countDownTimer";

const poppins = Poppins ({
  weight: "700",
  subsets: ["latin"]
}) 

export default function Page() {

  const [currentFramework, setcurrentFramework] = useState<Framework>(frameworks[0])
  const [showBackground, setShowBackground] = useState(false)  

  useEffect(() => {
    let currentIndex = 0;
    const rotateFrameworks = () => {
      setcurrentFramework(frameworks[currentIndex]);
      currentIndex = (currentIndex + 1) % frameworks.length; 
    };
    const intervalId = setInterval(rotateFrameworks, 2000)
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setShowBackground(true);
  }, []);

  return (
    <main>
        {/* Background Color */}
      <div
      className={cn(
        "fixed inset-0 transtition-color delay-100 duration-700 opacity-30",
        {
            "bg-purple-300": currentFramework === "qwik",
            "bg-sky-300": currentFramework === "safari",
            "bg-yellow-300": currentFramework === "chrome",
            "bg-teal-300": currentFramework === "tailwind",
            "bg-blue-300": currentFramework === "react",
            "bg-green-300": currentFramework === "vue",
            "bg-orange-300": currentFramework === "svelte",
            "bg-red-300": currentFramework === "mobile",
            "bg-neutral-300": currentFramework === "desktop",
        }  
      )}
      />

      {/* Gradient */}
      <Image
        width={1200}
        height={1200}
        role="presentation"
        alt="gradient background"
        className="fixed inset-0 w-screen h-screen object-cover"
        src={assets.gradient}  
      />

        {/* Grid */}
      <div
        className="fixed inset-0 opacity-30"
        style={{
          backgroundImage: `url(${assets.square})`,
          backgroundSize: "30px",
        }}
      />
      
      {/* Reveal */}
      <div
        className={cn(
          "text-black fixed inset-0 transtition-opacity duration-[300ms]",
        !showBackground ? "opacity-10" : "opacity-0"
      )}
    />

    {/* Content */}
    <div className="max-w-70xl mt-20 mx-auto">
      <div className="flex flex-col items-center relative z-10">
        {/* Heading */}
        <h1 className={`text-4xl max-w3xl text-center leading-snug mb-12 ${poppins.className}`}>
          <Image
            alt="Figma Logo"
            className="inline-block mr-8 -mt-2"
            src={assets.figma}
            width="50"
            height="50"
          />
          to <FrameworkRotation currentFramework={currentFramework} /> will{" "}
            <span 
                className={cn("transition-colors duration-200", {
                    "text-purple-300": currentFramework === "qwik",
                    "text-sky-300": currentFramework === "safari",
                    "text-yellow-300": currentFramework === "chrome",
                    "text-teal-300": currentFramework === "tailwind",
                    "text-blue-300": currentFramework === "react",
                    "text-green-300": currentFramework === "vue",
                    "text-orange-300": currentFramework === "svelte",
                    "text-red-300": currentFramework === "mobile",
                    "text-neutral-300": currentFramework === "desktop",
            })}
          >Never</span>{" "} be the same again
        </h1>

        {/* Description */}
        <p className="mb-8">
            <span className="text-gray-300">
                Join Us for and AI launch with
            </span>
            <Image
                alt="Builder.io logo"
                className="inline-block ml-1 -mt-1"
                height={20}
                width={100}
                src={assets.builder}
            />
            {" + "}
            <Image
                alt="Figma logo"
                className="inline-block mx-1"
                height={20}
                width={55}
                src={assets.figmatwo}
            />
        </p>
        <div className="mb-8 text-black">
            <button 
                className={cn(
                    "text-black px-6 py-3 rounded-md text-small font-semibold transtition-colors duration-200",
                    {
                        "bg-sky-300": currentFramework === "safari",
                        "bg-yellow-300": currentFramework === "chrome",
                        "bg-teal-300": currentFramework === "tailwind",
                        "bg-blue-300": currentFramework === "react",
                        "bg-green-300": currentFramework === "vue",
                        "bg-orange-300": currentFramework === "svelte",
                        "bg-red-300": currentFramework === "mobile",
                        "bg-neutral-300": currentFramework === "desktop",
                    })}>
                Claim Ticket
            </button>
        </div>
        <countDownTimer currentFramework={currentFramework}/>
      </div>
    </div>

    </main>
  );
}
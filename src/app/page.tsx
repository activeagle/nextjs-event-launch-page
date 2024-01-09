"use client"
import Image from "next/image";
import { assets } from "@/utils/assetUtils";
import { type Framework, frameworks } from "@/utils/frameworkUtils";
import { useState, useEffect } from "react";
import { cn } from "@/utils/tailwindUtils";
import { Poppins } from "next/font/google";
import { FrameworkRotation } from "@/components/frameworkRotation";

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
          "bg-black fixed inset-0 transtition-opacity duration-[300ms]",
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
          to <FrameworkRotation currentFramework={currentFramework}/> will <span>Never</span> be the same again
        </h1>
      </div>
    </div>

    </main>
  );
}
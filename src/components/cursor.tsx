import { assets } from "@/utils/assetUtils";
import Image from "next/image";
import { resolve } from "path";
import { useState, useEffect, RefObject } from "react";

export const Cursor = ({buttonRef}: {buttonRef: RefObject<HTMLButtonElement>}) => {
    const [cursorPosition, setCursorPosition] = useState({
        x: -100,
        y: -100,
    });

    useEffect(() => {
        async function animateCursor() {
            if (!buttonRef.current) return;
            // Initial 1-second delay
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Move the cursor to the claim button
            const buttonRect = buttonRef.current.getBoundingClientRect();
            const x = buttonRect.x + buttonRect.width / 2;
            const y = buttonRect.y + buttonRect.height / 2;
            setCursorPosition({ x, y });

            // Additional 1-second delay
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Update the cursor position to be 150px below the button
            const newY = y + 150;
            setCursorPosition({ x, y: newY });

            // Move the button down by 150px
            buttonRef.current.style.transition = "transform 700ms ease-in-out";
            buttonRef.current.style.transform = "translateY(150px)";

            // Addition 1-second delay
            await new Promise ((resolve) => setTimeout(resolve, 1000));
            
            // Move the cursor out of the screen
            setCursorPosition({ x: window.innerWidth - 100, y: -100 })

            animateCursor
        }
    }, []);

        <Image
        className="absolute transtion-all duration-700 ease-in-out z-50"
        alt="Cursor"
        src={assets.cursor}
            style={{
                top: `${cursorPosition.y}px`,
                left: `${cursorPosition.x}`,
            }}
            // width={80}
            // height={50}
        />
};
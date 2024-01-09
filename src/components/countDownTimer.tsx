import { calculateTimeToEvent } from "@/utils/countDownUtils";
import { type Framework } from "@/utils/frameworkUtils";
import { useState, useEffect } from "react";
import { TimeUnit } from "./timeUnits";

export const countDownTimer = ({ 
    currentFramework, 
} : { 
    currentFramework: Framework;
}) => {
    const [countdown, setCountdown] = useState(calculateTimeToEvent());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCountdown(calculateTimeToEvent())
        }, 1000)

        return () => clearInterval(intervalId);
    }, []);

    return <div className="flex gap-[10px]">
        <TimeUnit
            label="DAYS"
            value={countdown.days}
            currentFramework={currentFramework}
        />
         <TimeUnit
            label="Hours"
            value={countdown.hours}
            currentFramework={currentFramework}
        />
         <TimeUnit
            label="MINUTES"
            value={countdown.minutes}
            currentFramework={currentFramework}
        />
         <TimeUnit
            label="SECONDS"
            value={countdown.seconds}
            currentFramework={currentFramework}
        />
    </div>
};

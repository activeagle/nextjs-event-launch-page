import { calculateTimeToEvent } from "@/utils/countDownUtils";
import { type Framework } from "@/utils/frameworkUtils";
import { useState, useEffect } from "react";
import { TimeUnit } from "./timeUnits";

export const CountDownTimer = ({ 
    currentFramework, 
} : { 
    currentFramework: Framework;
}) => {
    const [countdown, setCountDown] = useState(calculateTimeToEvent());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCountDown(calculateTimeToEvent())
        }, 1000)

        return () => clearInterval(intervalId);
    }, []);

    return <div className="flex gap-[15px]">
        <TimeUnit
            label="DAYS"
            value={countdown.days}
            currentFramework={currentFramework}
        />
         <TimeUnit
            label="HOURS"
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

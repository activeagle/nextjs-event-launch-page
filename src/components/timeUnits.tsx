import { Framework } from "@/utils/frameworkUtils";
import { cn } from "@/utils/tailwindUtils";
// import { NumberRotation } from "./numberRotation";

export const TimeUnit = ({
    label, value, currentFramework
}: {
    label: string;
    value: number;
    currentFramework: Framework;
}) => {
    return (
    <div className="flex flex-col">
        <div className="text-white text-3xl font-semibold ">{value}</div>
            {/* <NumberRotation number={value}/> */}
            <div className={cn("text-[8px] font-medium",
            {
                "text-sky-300": currentFramework === "safari",
                "text-yellow-300": currentFramework === "chrome",
                "text-teal-300": currentFramework === "tailwind",
                "text-blue-300": currentFramework === "react",
                "text-green-300": currentFramework === "vue",
                "text-orange-300": currentFramework === "svelte",
                "text-red-300": currentFramework === "mobile",
                "text-neutral-300": currentFramework === "desktop",
            })}
            >
                {label}
            </div>
    </div>
    );
};
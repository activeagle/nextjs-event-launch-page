import Image from "next/image";
import { assets } from "@/utils/assetUtils";
import { frameworks, type Framework } from "@/utils/frameworkUtils"; 
import { cn } from "@/utils/tailwindUtils";

export const FrameworkRotation = ({
	currentFramework,
}: {
	currentFramework: Framework;
}) => {
	return (
		<div className="w-[80px] h-[80px] mx-2 -mt-2 align-middle inline-flex relative">
			{frameworks.map((name, index) => (
				<Image
					key={name}
					src={assets[name]}
					alt="Framework Logo"
					fill
					className={cn(
						"w-full h-full object-contain object-center absoulute top-0 left-0 transtition-all duration-300",
						currentFramework === name
							? "opacity-100 transform-none"
							: index > frameworks.indexOf(currentFramework as Framework)
							? "opacity-0 -translate-y-2"
							: "opacity-0 translate-y-2"
					)}
					loading="lazy"
					decoding="async"
				/>
			))
			}
		</div>
	)
};
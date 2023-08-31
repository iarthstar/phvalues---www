import { Element } from "@/ui";
import { cn } from "@/utils";

import { Fraunces, Inter } from "next/font/google";

const fraunces = Fraunces({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const Text: React.FC<any> = ({ as = "p", font = "inter", className, ...rest }) => (
    <Element as={as} className={cn("text-xs", className, {
        [fraunces.className]: font === "fraunces",
        [inter.className]: font === "inter",
    })} {...rest} />
);

export const Button: React.FC<any> = ({ className, ...rest }) => (
    <button className={cn("px-4 py-2  rounded-full", className)} {...rest} />
);
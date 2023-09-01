import { Element } from "@/ui";
import { cn } from "@/utils";

import { Inter, Mrs_Saint_Delafield } from "next/font/google";

// const fraunces = Fraunces({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });
const mrsSaintDelafield = Mrs_Saint_Delafield({
    subsets: ["latin"],
    weight: "400"
});

export const Text: React.FC<any> = ({ as = "p", font = "inter", className, ...rest }) => (
    <Element as={as} className={cn("text-xs", className, {
        // [fraunces.className]: font === "fraunces",
        [inter.className]: font === "inter",
        [mrsSaintDelafield.className]: font === "mrsSaintDelafield"
    })} {...rest} />
);

export const Button: React.FC<any> = ({ className, ...rest }) => (
    <button className={cn("px-4 py-2  rounded-full", className)} {...rest} />
);
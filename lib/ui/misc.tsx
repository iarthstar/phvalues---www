import { cn } from "@/utils";
import { Element } from "@/ui";

export const PageContainer: React.FC<any> = ({ as="div", className, ...rest }) => (
    <Element as={as} className={cn("w-full m-auto max-w-6xl px-4", className)} {...rest} />
);
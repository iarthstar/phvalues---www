import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...className: any[]) => twMerge(clsx(...className));

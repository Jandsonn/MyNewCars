import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submite";
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
    
}

// import { MouseEventHandler } from "react";

// export interface CustomButtonProps {
//     title: string;
//     containerStyles?: string;
//     handleClick?:
//     MouseEventHandler<HTMLButtonElement>;
// }
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


// import { MouseEventHandler } from "react";

// export interface CustomButtonProps {
//     title: string;
//     containerStyles?: string;
//     handleClick?:
//     MouseEventHandler<HTMLButtonElement>;
// }
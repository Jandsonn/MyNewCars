import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
}



// import { MouseEventHandler } from "react";

// export interface CustomButtonProps {
//     title: string;
//     containerStyles?: string;
//     handleClick?:
//     MouseEventHandler<HTMLButtonElement>;
// }
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string,
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManufactureProps {
  manufacture: string;
  setManufacture: (manufacture: string) => void;
}

export interface CardCarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

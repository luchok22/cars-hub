import { MouseEventHandler } from "react";

export interface ReusableButtonProps {
  title: string;
  styles: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  icon?: string;
}

export interface FilterProps {
  title: string;
}

export interface searchManuProps {
  manu: string;
  setManu: (manu: string) => void;
}

export interface CarProps {
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

export interface CarCardProps {
  model: string;
  make: string;
  mpg: number;
  transmission: string;
  year: number;
  drive: string;
  city_mpg: number;
}

export interface SearchManuFacturerProps {
  manu: string;
  setManu: (manufacturer: string) => void;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}


export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}
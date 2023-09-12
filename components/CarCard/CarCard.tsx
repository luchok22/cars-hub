"use client";

import { calculateCarRent, generateCarImageUrl } from "@/util";
import Image from "next/image";
import ReusableButton from "../ReusableButton/ReusableButton";
import { useState } from "react";
import CardDetail from "../CardDetail/CardDetail";
import { CarProps } from "@/types";
interface CarProps {
  car: CarProps;
}
const CarCard = ({ car }: CarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { city_mpg, year, make, model, transmission, drive } = car;

  const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className="car-card group">
      <div className="card-card__content">
        <h1 className="car-card__content-title">
          {make} {model}
        </h1>
      </div>
      <p className="flex mt-6 text-[32px] leading-[38px] font-extrabold">
        <span className="self-start text-[14px] leading-[17px] font-semibold">
          $
        </span>
        {carRent}
        <span className="self-end text-[14px] leading-[17px] font-medium">
          /day
        </span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={generateCarImageUrl(car)}
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col jusify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="steering wheel"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automaic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col jusify-center items-center gap-2">
            <Image src="/gas.svg" width={20} height={20} alt="gas" />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
          <div className="flex flex-col jusify-center items-center gap-2">
            <Image src="/tire.svg" width={20} height={20} alt="tire" />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <ReusableButton
            title="View More"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            styles="w-full py-[16px] rounded-full bg-primary-blue"
            icon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CardDetail
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;

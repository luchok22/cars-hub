"use client";

import { ReusableButtonProps } from "@/types";
import Image from "next/image";

const ReusableButton = ({
  title,
  styles,
  btnType,
  handleClick,
  textStyles,
  icon
}: ReusableButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${styles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>{icon && (
        <div className="relative w-6 h-6">
            <Image src={icon} alt='icon' fill className="object-contain"/>
        </div>
      )}
    </button>
  );
};

export default ReusableButton;

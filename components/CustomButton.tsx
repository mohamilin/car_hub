"use client";

import { CustomButtonProps } from "@/types";

export default function CustomButton({
  title,
  btnType,
  containerStyles,
  handleClick,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={'button' || btnType}
      // type={btnType}
      className={`custom-btn ${containerStyles} `}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
}

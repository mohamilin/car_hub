"use client";
import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter()
  const handleScroll = () => {
    router.push('/')
  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
         Expore a car -quickly and easily
        </h1>
        <p className="hero__subtitle">
          Enjoy exploring the car
        </p>
        <CustomButton
          title="Explore Cars"
          btnType="button"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src={"/hero.png"} alt="hero" fill className="object-contain" />
        </div>
          <div className="hero__image-overlay" />
      </div>
    </div>
  );
}

import { ShowMoreProps } from "@/types";
import { updateSearchParams } from "@/utils";
import { useRouter } from "next/navigation";
import React from "react";
import { CustomButton } from ".";

export default function ShowMore({ pageNumber, isNext }: ShowMoreProps) {
  const router = useRouter();

  const handleNavigation = () => {
    const limit = (pageNumber + 1) * 10;

    const pathName = updateSearchParams("limit", `${limit}`);

    router.push(pathName);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
}

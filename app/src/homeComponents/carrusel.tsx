import Image from "next/legacy/image";
import React from 'react'

export const FirstImage = () => {
  return (
    <div
      id="image-slider"
      className={`relative py-10 h-56 shadow-2xl shadow-neutral-700`}
    >
      <Image
        src="/homeSource/mainCouch1.jpg"
        className={`animate__animated `}
        alt="Sofa n1"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export const SecondImage = () => {
  return (
    <div
      id="image-slider"
      className={`relative py-10 h-56 shadow-2xl shadow-neutral-700`}
    >
      <Image
        src="/homeSource/mainCouch2.jpg"
        className={`animate__animated`}
        alt="Sofa n2"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export const ThirdImage = () => {
  return (
    <div
      id="image-slider"
      className={`relative py-10 h-56 shadow-2xl shadow-neutral-700`}
    >
      <Image
        src="/homeSource/mainCouch3.jpg"
        className={`animate__animated `}
        alt="Sofa n3"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export const FourthImage = () => {
  return (
    <div
      id="image-slider"
      className={`relative py-10 h-56 shadow-2xl shadow-neutral-700`}
    >
      <Image
        src="/homeSource/mainCouch4.jpg"
        className={`animate__animated `}
        alt="Sofa n4"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/legacy/image";
import {
  FirstImage,
  SecondImage,
  ThirdImage,
  FourthImage,
} from "@/app/src/homeComponents/carrusel";
import {
  FirstSlider,
  SecondSlider,
  ThirdSlider,
  FourthSlider,
  FiveSlider,
} from "@/app/src/homeComponents/slider";
import "animate.css";

const IndexPage = () => {
  const [sliderComponent, setSliderComponent] = useState(ThirdSlider);
  const [stepSliderComponent, setStepSliderComponent] = useState(3);
  console.log(stepSliderComponent);

  const toLeftButton = () => {
    console.log("toLeftButton Fn");
    let newStepSliderComponent = stepSliderComponent - 1;
    setStepSliderComponent(newStepSliderComponent);
    switch (newStepSliderComponent) {
      case 0:
        setStepSliderComponent(stepSliderComponent + 5);
        break;
      case 1:
        setSliderComponent(FirstSlider);
        break;
      case 2:
        setSliderComponent(SecondSlider);
        break;
      case 3:
        setSliderComponent(ThirdSlider);
        break;
      case 4:
        setSliderComponent(FourthSlider);
        break;
      case 5:
        setSliderComponent(FiveSlider);
        break;
      case 6:
        setStepSliderComponent(stepSliderComponent - 5);
        break;
      default:
        setSliderComponent(ThirdSlider);
        break;
    }
  };

  const toRightButton = () => {
    console.log("toRightButton Fn");
    let newStepSliderComponent = stepSliderComponent + 1;
    setStepSliderComponent(newStepSliderComponent);

    switch (newStepSliderComponent) {
      case 0:
        setStepSliderComponent(stepSliderComponent + 5);
        break;
      case 1:
        setSliderComponent(FirstSlider);
        break;
      case 2:
        setSliderComponent(SecondSlider);
        break;
      case 3:
        setSliderComponent(ThirdSlider);
        break;
      case 4:
        setSliderComponent(FourthSlider);
        break;
      case 5:
        setSliderComponent(FiveSlider);
        break;
      case 6:
        setStepSliderComponent(stepSliderComponent - 5);
        break;
      default:
        setSliderComponent(ThirdSlider);
    }
  };

  const [currentComponent, setCurrentComponent] = useState("First");

  useEffect(() => {
    const components = ["First", "Second", "Third", "Fourth"];
    let index = 0;

    const intervalId = setInterval(() => {
      setCurrentComponent(components[index]);
      index = (index + 1) % components.length;
    }, 3000);
  }, []);

  const renderCurrentComponent = () => {
    switch (currentComponent) {
      case "First":
        return <FirstImage />;
      case "Second":
        return <SecondImage />;
      case "Third":
        return <ThirdImage />;
      case "Fourth":
        return <FourthImage />;
      default:
        return <FirstImage />;
    }
  };

  return (
    <main className={`bg-neutral-800`}>
      <div className={`flex flex-col pt-5 mx-5`}>
        <div className="block">
          <span className={`py-2 text-5xl text-neutral-300`}> CORDOBA </span>
        </div>
        <div className="flex justify-end">
          <span className={`py-2 font-serif text-5xl text-neutral-300 `}>
            {" "}
            WOODS{" "}
          </span>
        </div>
      </div>

      <div id="image" className={`my-4 mb-8 border-white border-y-8`}>
        {renderCurrentComponent()}
      </div>
      <div id="buttons" className={`flex flex-row justify-center `}>
        <div
          id="ver mas"
          className={`border-y-2 p-2 rounded- border-neutral-400  w-fit mb-4`}
        >
          {" "}
          <button className={`text-xl`}>Productos de categoria !</button>{" "}
        </div>
      </div>
      <div
        id="product"
        className={`flex flex-col mt-5 border-y-4 border-t-neutral-500`}
      >
        <div className={`flex flex-col pt-5 mx-auto`}>
          <div className="">
            <span className={`font-medium text-2xl text-neutral-300`}>
              {" "}
              NUESTRA SECCION DE SILLAS{" "}
            </span>
          </div>
        </div>

        <div className={`flex justify-between`}>
          <div id="left" className={` h-fit ml-5 my-auto`}>
            <button type="button" onClick={toLeftButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                />
              </svg>
            </button>
          </div>

          <div id="image" className={`p-4 rounded-xl`}>
            {sliderComponent}
          </div>

          <div id="right" className={`h-fit mr-5 my-auto`}>
            <button type="button" onClick={toRightButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="button productos"
          className={`border-b-2 pb-px border-neutral-600 w-fit mx-auto my-10`}
        >
          {" "}
          <button> Todos nuestros productos </button>{" "}
        </div>
      </div>
      <div>
        <h4 className={`mx-auto w-fit my-4 text-2xl font-semibold`}>
          {" "}
          SECCIONES DE INTERES {" "}
        </h4>
        <div className={`flex flex-col mx-auto py-4 w-fit`}>
          <div className={`mb-6`}>
            <div
              className={`relative w-56 h-64 shadow-lg shadow-neutral-600  `}
            >
              <Image
                src="/homeSource/BedFurniture.jpg"
                className={`rounded-lg`}
                alt="Chair"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={`flex flex-row justify-center mt-3 `}>
              <div className={``}>
                {" "}
                <h2 > Decora tu Dormitorio </h2>{" "}
              </div>
            </div>
          </div>

          <div className={`mb-6`}>
            <div
              className={`relative w-56 h-64 shadow-lg shadow-neutral-600  `}
            >
              <Image
                src="/homeSource/LivingFurniture.jpg"
                className={`rounded-lg`}
                alt="Chair"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={`flex flex-row justify-center mt-3 `}>
              <div className={``}>
                {" "}
                <h2 > Administra tu espacio </h2>{" "}
              </div>
            </div>
          </div>

          <div className={`mb-6`}>
            <div
              className={`relative w-56 h-64 shadow-lg shadow-neutral-600  `}
            >
              <Image
                src="/homeSource/lightSection.jpg"
                className={`rounded-lg`}
                alt="Chair"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={`flex flex-row justify-center mt-3 `}>
              <div className={``}>
                {" "}
                <h2 > Ilumina tu Hogar </h2>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

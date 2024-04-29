"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
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
      <div id="image" className={`p-4`}>
        {renderCurrentComponent()}
      </div>
      <div id="buttons" className={`flex flex-row justify-between mt-2`}>
        <div
          id="ver mas"
          className={`border-y-2 border-neutral-600  w-fit mx-10 p-2 rounded-lg`}
        >
          {" "}
          <button className={``}>Ver Mas</button>{" "}
        </div>
        <div
          id="añadir al carrito"
          className={`border-y-2 border-neutral-600 w-fit mx-10 p-2 rounded-lg`}
        >
          <button>Añadir al carrito</button>
        </div>
      </div>
      <div
        id="product"
        className={`flex flex-col mt-5 border-t-2 border-t-neutral-700`}
      >
        <div className={`flex justify-between my-10`}>
          <div
            id="left"
            className={`border-2 border-neutral-600 h-fit ml-5 my-auto`}
          >
            <button type="button" onClick={toLeftButton}>left</button>
          </div>

          {sliderComponent}

          <div
            id="right"
            className={`border-2 border-neutral-600 h-fit mr-5 my-auto`}
          >
            <button type="button" onClick={toRightButton}>right</button>
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
    </main>
  );
};

export default IndexPage;

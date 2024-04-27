"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FirstImage, SecondImage, ThirdImage, FourthImage } from "@/app/src/homeComponents/carrusel";
import "animate.css";


const IndexPage = () => {

  const toLeftProduct = () => {
    console.log("hola");
    
  } 

  const toRightProduct = () => {
    console.log("hola");
  } 

  const [currentComponent, setCurrentComponent] = useState('First');

  useEffect(() => {
    const components = ['First', 'Second', 'Third', 'Fourth'];
    let index = 0;

    const intervalId = setInterval(() => {
      setCurrentComponent(components[index]);
      index = (index + 1) % components.length;
    }, 3000);
    
  }, []);
  
  const renderCurrentComponent = () => {
    switch (currentComponent) {
      case 'First':
        return <FirstImage />;
        case 'Second':
        return <SecondImage/>;
      case 'Third':
        return <ThirdImage/>;
      case 'Fourth':
        return <FourthImage />;
      default:
        return <FirstImage/>;
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
            <button onClick={toLeftProduct()}>left</button>
          </div>
          <div
            id="image"
            className={`border-2 border-neutral-700 p-4 rounded-xl`}
          >
            <div
              className={`relative w-56 h-56 shadow-lg shadow-neutral-600  `}
            >
              <Image
                src="/homeSource/chairSection.jpg"
                className={`rounded-lg`}
                alt="Chair"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className={`flex flex-row justify-between mt-5 `}>
              <div className={``}>
                {" "}
                <h2> $10000 </h2>{" "}
              </div>
              <div className={``}>
                {" "}
                <h2> Silla Ergonomica </h2>{" "}
              </div>
            </div>
          </div>
          <div
            id="right"
            className={`border-2 border-neutral-600 h-fit mr-5 my-auto`}
          >
            <button onClick={toRightProduct()}>right</button>
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

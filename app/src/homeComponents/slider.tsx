import Image from "next/image";

export const FirstSlider = () => {
  return (
    <div id="image" className={`border-2 border-neutral-700 p-4 rounded-xl`}>
      <div className={`relative w-56 h-56 shadow-lg shadow-neutral-600  `}>
        <Image
          src="/homeSource/chairSection1.jpg"
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
  );
};

export const SecondSlider = () => {
  return (
    <div id="image" className={`border-2 border-neutral-700 p-4 rounded-xl`}>
      <div className={`relative w-56 h-56 shadow-lg shadow-neutral-600  `}>
        <Image
          src="/homeSource/chairSection2.jpg"
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
  );
};

export const ThirdSlider = () => {
  return (
    <div id="image" className={`border-2 border-neutral-700 p-4 rounded-xl`}>
      <div className={`relative w-56 h-56 shadow-lg shadow-neutral-600  `}>
        <Image
          src="/homeSource/chairSection3.jpg"
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
  );
};

export const FourthSlider = () => {
  return (
    <div id="image" className={`border-2 border-neutral-700 p-4 rounded-xl`}>
      <div className={`relative w-56 h-56 shadow-lg shadow-neutral-600  `}>
        <Image
          src="/homeSource/chairSection4.jpg"
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
  );
};

export const FiveSlider = () => {
    return (
      <div id="image" className={`border-2 border-neutral-700 p-4 rounded-xl`}>
        <div className={`relative w-56 h-56 shadow-lg shadow-neutral-600  `}>
          <Image
            src="/homeSource/chairSection5.jpg"
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
    );
  };
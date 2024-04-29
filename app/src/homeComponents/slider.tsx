import Image from "next/legacy/image";

export const FirstSlider = () => {
  return (
    <>
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
          <h2> $14.000 </h2>{" "}
        </div>
        <div className={``}>
          {" "}
          <h2> Silla Ergonomica</h2>{" "}
        </div>
      </div>
    </>
  );
};

export const SecondSlider = () => {
  return (
    <>
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
          <h2> $39.999 </h2>{" "}
        </div>
        <div className={``}>
          {" "}
          <h2> Silla de Pluma </h2>{" "}
        </div>
      </div>
    </>
  );
};

export const ThirdSlider = () => {
  return (
    <> 
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
          <h2> $28.999 </h2>{" "}
        </div>
        <div className={``}>
          {" "}
          <h2> Silla Terciopelo </h2>{" "}
        </div>
      </div>
    </> 
  );
};

export const FourthSlider = () => {
  return (
    <>
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
          <h2> $12.000 </h2>{" "}
        </div>
        <div className={``}>
          {" "}
          <h2> Silla Desplegable </h2>{" "}
        </div>
      </div>
    </>
  );
};

export const FiveSlider = () => {
    return (
      <>
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
            <h2> $6700 </h2>{" "}
          </div>
          <div className={``}>
            {" "}
            <h2> Silla Plastica  </h2>{" "}
          </div>
        </div>
      </>
    );
  };
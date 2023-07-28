import Icon from "../Icon"

const Pricing = () => {
  return (
    <div className="bg-coffee w-full min-h-screen bg-cover">
      <div className="container mx-auto md:px-6 px-10">
        <section>
          <h2
            className="
          mb-12 text-center text-6xl font-bold pt-10 text-orange-800
          
          "
          >
            Coffee Menu
          </h2>
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-x-12">
            <div className="mb-6 lg:mb-0">
              <div className="block h-full rounded-lg bg-white shadow-xl dark:bg-orange-950 opacity-80">
                <div
                  className="border-b-2 border-neutral-100 border-opacity-100
                p-6 text-center dark:border-opacity-10
                
                "
                >
                  <p className="mb-4 text-sm uppercase">
                    {" "}
                    <strong>Basic Coffee</strong>
                  </p>
                  <h3 className="mb-6 text-3xl">
                    <strong>$ 2.99</strong>
                    <small
                      className="text-base text-neutral-500
                    dark:text-neutral-300
                    "
                    >
                      /cup
                    </small>
                  </h3>
                  <button
                    className="
                  inline-block w-full rounded bg-orange-100
                  px-6 pt-2 pb-2 text-xs font-medium uppercase leading-normal
                  hover:text-white text-orange-700 transition duration-150
                  hover:bg-orange-500 focus:bg-orange-500
                  focus:outline-none
                  focus:ring-0 active:bg-orange-200
                  
                  "
                    type="button"
                  >
                    Buy
                  </button>
                </div>
                <div className="p-6">
                  <ol className="list-inside">
                    <li className="mb-4 flex">
                      <Icon />
                      Coffee with your choice of milk
                    </li>
                    <li className="mb-4 flex">
                      <Icon />
                      No additional flavors
                    </li>
                    <li className="mb-4 flex">
                      <Icon />
                      Free refills during the same visit
                    </li>
                    <li className="mb-4 flex">
                      <Icon />
                      Complimentary sugar and cream
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="mb-6 lg:mb-0">
              <div
                className="block h-full rounded-lg bg-white shadow-xl
              dark:bg-orange-950 opacity-80
              "
              >
                <div
                  className="border-b-2 border-neutral-100 border-opacity-100
                p-6 text-center dark:border-opacity-10
                "
                >
                  <p className="mb-4 text-sm uppercase">
                    <strong>Premium Coffee</strong>{" "}
                  </p>
                  <h3 className="mb-6 text-3xl">
                    <strong>$ 4.99</strong>
                    <small className="text-base text-neutral-500 dark:text-neutral-300">
                      /cup
                    </small>
                  </h3>
                  <button
                    className="
                  inline-block w-full rounded bg-orange-500 px-6 pt-2 pb-2 text-xs
                  font-medium uppercase leading-normal text-white
                  shadow-lg transition duration-150
                  hover:bg-orange-600
                  hover:shadow-xl
                  focus:bg-orange-600
                  focus:shadow-xl
                  focus:outline-none
                  focus:ring-0
                  active:bg-orange-700
                  dark:shadow-lg
                  dark:hover:shadow-lg
                  
                  "
                    type="button"
                  >
                    Buy{" "}
                  </button>
                </div>
                <div className="p-6">
                  <ol className="list-inside">
                    <li className="mb-4 flex">
                      <Icon />
                      Premium coffee sourced from specific regions
                    </li>
                    <li className="mb-4 flex">
                      <Icon />
                      Choice of milk (whole, almond, or oat)
                    </li>
                    <li className="mb-4 flex">
                      <Icon />
                      Customizable flavors (vanilla, caramel, hazelnut)
                    </li>
                    <li className="mb-4 flex">
                      <Icon />
                      One complimentary pastry of your choice
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="mb-6 lg:mb-0">
              <div
                className="
              block h-full rounded-lg bg-white shadow-xl dark:bg-orange-950 opacity-80
              
              "
              >
                <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                  <p className="mb-4 text-sm uppercase">
                    <strong>Deluxe Coffee</strong>
                  </p>
                  <h3 className="mb-6 text-3xl">
                    <strong>$ 6.99</strong>
                    <small className="text-base text-neutral-500 dark:text-neutral-300">
                      /cup
                    </small>
                  </h3>
                  <button
                    className="
                  inline-block w-full rounded bg-orange-100
                  px-6 pt-2 pb-2 text-xs font-medium uppercase leading-normal
                  hover:text-white text-orange-700 transition duration-150
                  hover:bg-orange-500 focus:bg-orange-500
                  focus:outline-none
                  focus:ring-0 active:bg-orange-200
                  "
                    type="button"
                  >
                    Buy
                  </button>
                </div>
                <div className="p-6">
                  <ol className="list-inside">
                    <li className="mb-4 flex">
                      <Icon />
                      Espresso-based drinks (latte, cappuccino, mocha)
                    </li>
                    <li className="mb-4 flex">
                      <Icon />
                      Wide selection of milk options (regular, soy, coconut)
                    </li>
                    <li className="mb-4 flex">
                      <Icon />
                      Variety of syrups (chocolate, caramel, cinnamon)
                    </li>
                    <li className="mb-4 flex">
                      <Icon />
                      Extra shot of espresso for an added kick
                    </li>
                    <li className="mb-4 flex">
                      <Icon />A selection of gourmet toppings (whipped cream,
                      chocolate shavings)
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Pricing

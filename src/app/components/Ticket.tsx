import Image from "next/image"
const Ticket = () => {
  return (
    <div className="bg-plane flex flex-col items-center justify-center min-h-screen bg-center bg-cover">
      <div className="absolute bg-slate-800 opacity-80 inset-0 z-0"></div>
      <div className="max-w-md w-full h-full mx-auto z-10 bg-yellow-300 rounded-3xl">
        <div className="flex flex-col">
          <div className="bg-white relative drop-shadow-2xl  rounded-3xl p-4 m-4">
            <div className="flex-none sm:flex">
              <div className="flex-auto justify-evenly">
                <div className="flex items-center justify-between">
                  <div className="flex items-center  my-1">
                    <span className="mr-3 rounded-full bg-white w-8 h-8">
                      <Image
                        width={32}
                        height={32}
                        alt="image"
                        src="/nokair.jpeg"
                        className="h-8 p-1"
                      />
                    </span>
                    <h2 className="font-medium text-slate-800">NOK AIR</h2>
                  </div>
                  <div className="ml-auto text-yellow-300">A380</div>
                </div>
                <div className="border-dashed border-b-2 my-5"></div>
                <div className="flex items-center">
                  <div className="flex flex-col">
                    <div className="flex-auto text-xs text-gray-400 my-1">
                      <span className="mr-1 ">MO</span>
                      <span>19 23</span>
                    </div>
                    <div className="w-full flex-none text-lg text-yellow-300 font-bold leading-none">
                      DMK
                    </div>
                    <div className="text-xs text-slate-800">Don Mueang</div>
                  </div>
                  <div className="flex flex-col mx-auto">
                    <Image
                      width={30}
                      height={30}
                      alt="img"
                      src="/nokair.jpeg"
                      className="w-20 p-1 rounded-full"
                    />
                  </div>
                  <div className="flex flex-col ">
                    <div className="flex-auto text-xs text-gray-400 my-1">
                      <span className="mr-1">MO</span>
                      <span>19 23</span>
                    </div>
                    <div className="w-full flex-none text-lg text-yellow-300 font-bold leading-none">
                      KKC
                    </div>
                    <div className="text-xs text-slate-800">Khonkaen</div>
                  </div>
                </div>
                <div className="border-dashed border-b-2 my-5 pt-5">
                  <div className="absolute rounded-full w-5 h-5 bg-yellow-300 -mt-2 -left-2"></div>
                  <div className="absolute rounded-full w-5 h-5 bg-yellow-300 -mt-2 -right-2"></div>
                </div>
                <div className="flex items-center mb-5 p-5 text-sm text-slate-800">
                  <div className="flex flex-col">
                    <span className="text-sm">Flight</span>
                    <div className="font-semibold">DD7104</div>
                  </div>
                  <div className="flex flex-col ml-auto">
                    <span className="text-sm">Gate</span>
                    <div className="font-semibold">B3</div>
                  </div>
                </div>
                <div className="flex items-center mb-4 px-5 text-slate-800">
                  <div className="flex flex-col text-sm">
                    <span className="">Board</span>
                    <div className="font-semibold">11:50AM</div>
                  </div>
                  <div className="flex flex-col mx-auto text-sm">
                    <span className="">Departs</span>
                    <div className="font-semibold">11:30Am</div>
                  </div>
                  <div className="flex flex-col text-sm">
                    <span className="">Arrived</span>
                    <div className="font-semibold">2:00PM</div>
                  </div>
                </div>
                <div className="border-dashed border-b-2 my-5 pt-5">
                  <div className="absolute rounded-full w-5 h-5 bg-yellow-300 -mt-2 -left-2"></div>
                  <div className="absolute rounded-full w-5 h-5 bg-yellow-300 -mt-2 -right-2"></div>
                </div>
                <div className="flex items-center px-5 pt-3 text-sm text-slate-800">
                  <div className="flex flex-col">
                    <span className="">Passanger</span>
                    <div className="font-semibold">Pasupol</div>
                  </div>
                  <div className="flex flex-col mx-auto">
                    <span className="">ClassName</span>
                    <div className="font-semibold">Economic</div>
                  </div>
                  <div className="flex flex-col">
                    <span className="">Seat</span>
                    <div className="font-semibold">12 E</div>
                  </div>
                </div>
                <div className="flex flex-col py-5  justify-center text-sm text-slate-800">
                  <h6 className="font-bold text-center">Boarding Pass</h6>

                  <div className="barcode h-14 w-0 inline-block mt-4 relative left-auto"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Ticket

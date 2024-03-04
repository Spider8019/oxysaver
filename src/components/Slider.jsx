import Banner from '../assets/images/banner.png'

const Slider = () => {
  return (
    <div className="overflow-hidden rounded-b-lg shadow relative"
    style={{background:`url(${Banner})`,
    height:"70vh",
  backgroundAttachment:"fixed",backgroundSize:"cover"}}
    >
      {/* <div className="w-full sm:h-[calc(100vh - 142px)] h-[80vh] overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src={Banner}
          alt="product banner"
        />
      </div> */}
      <div className="px-20 left-2/4 sm:left-3/4 top-2/4 -translate-x-2/4 -translate-y-2/4 z-10 absolute">
        <p className="text-white sm:text-black text-6xl font-semibold">Portable Oxygen Canister</p>
      </div>
    </div>
  )
}

export default Slider

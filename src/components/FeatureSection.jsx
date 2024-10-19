import { features } from "../constants"

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-teal-500 rounded-full text-sm font-medium px-1 uppercase">
          feature
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:m-20 tracking-wide">
          Easily build 
          <span className="bg-gradient-to-r from-teal-500 to-teal-800 bg-clip-text text-transparent">{" "}your code</span> 
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature,index)=>(
          <div key={index} className="flex w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-teal-500 justify-center items-center rounded-full">{feature.icon}</div>
            </div>
            <div>
              <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
              <p className="text-neutral-500 text-md p-3 mb-20">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeatureSection

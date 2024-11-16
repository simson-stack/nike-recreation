import { star } from "../nike_landing_assets/assets/icons"


const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex justify-center items-center flex-col">
        <img 
        src={imgURL} 
        alt="customer" 
        className="rounded-full w-[120px] h-[120px]"/>
        <p className="mt-6 info-text text-center max-w-sm">{feedback}</p>
        <div className="mt-3 flex justify-center items-center gap-2.5">
            <img src={star} 
            alt="" 
            width={24}
            height={24}
            className="object-contain m-0"/>
            <p className="text-xl text-slate-gray font-montserrat">({rating})</p> 
        </div>
        <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
    </div>
  )
}

export default ReviewCard
import { star } from "../assets/icons";
const PopularProductCard = ({ product }) => {
  return (
    <div
      className="flex flex-1 flex-col w-full
    max-sm:w-full"
    >
      <img src={product.imgURL} alt="" className="w-[282px] h-[282px]" />
      <div className="mt-8 flex justify-start gap-2.5"></div>
      <img src={star} alt="rating icon" width={24} height={24} />
    </div>
  );
};

export default PopularProductCard;

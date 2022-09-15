import starIcon from "../assets/icon-star.svg";
import { RatingBar } from "./RatingBar";

export function RatingCard() {
  return (
    <>
      <button className=" bg-medium-grey hover:bg-medium-grey-hovered rounded-full p-4 mb-7 w-fit">
        <img src={starIcon} alt="Star icon" />
      </button>

      <h1 className="text-header text-white font-bold mb-2">How did we do?</h1>
      <p className="text-paragraph text-light-grey font-regular mb-5">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <RatingBar />

      <button className="w-full bg-orange text-white font-bold p-2 rounded-3xl tracking-widest mb-auto hover:bg-orange-hovered">
        SUBMIT
      </button>
    </>
  );
}

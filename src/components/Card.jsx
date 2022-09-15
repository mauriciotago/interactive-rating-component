import { RatingCard } from "./RatingCard";
//import { ThankYouCard } from "./ThankYouCard";

export function Card() {
  return (
    <div className="flex flex-col max-w-[22rem] desktop:max-w-[26rem] p-6 rounded-[2rem] bg-dark-blue font-overpass">
      {/* se tiver avaliado e clicado em submeter entao, thankscard, senao ratingcard */}
      <RatingCard />
      {/* <ThankYouCard /> */}
    </div>
  );
}

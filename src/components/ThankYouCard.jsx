import thankYouIllustration from "../assets/illustration-thank-you.svg";

export function ThankYouCard() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-3 py-5">
      <img src={thankYouIllustration} alt="" className="w-40 mb-8" />

      <p className="text-orange bg-medium-grey px-5 py-1 mb-8 rounded-3xl">
        You selected 4 out of 5
      </p>

      <h1 className="text-header text-white font-bold mb-1">Thank you!</h1>
      <p className="text-paragraph text-light-grey font-regular border-[1px] border-transparent">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
}

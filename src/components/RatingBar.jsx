export function RatingBar() {
  return (
    <div className="flex items-center justify-between text-light-grey mb-6">
      <button className="bg-medium-grey rounded-full px-5 py-3 hover:bg-medium-grey-hovered">
        1
      </button>
      <button className="bg-medium-grey rounded-full px-5 py-3 hover:bg-medium-grey-hovered">
        2
      </button>
      <button className="bg-medium-grey rounded-full px-5 py-3 hover:bg-medium-grey-hovered">
        3
      </button>
      <button className="bg-medium-grey rounded-full px-5 py-3 hover:bg-medium-grey-hovered">
        4
      </button>
      <button className="bg-medium-grey rounded-full px-5 py-3 hover:bg-medium-grey-hovered">
        5
      </button>
    </div>
  );
}

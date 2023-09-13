import { BiSolidCart } from "react-icons/bi";
import PropTypes from "prop-types"; // ES6
const Cart = ({ selectPlayer, totalSpent, remaining }) => {
  return (
    <div>
      <div className="mx-auto md:w-full md:mt-0 w-3/4 mt-10">
        <h1 className="text-2xl flex bg-primary p-2 rounded-md text-white items-center">
          Selected Player Info <BiSolidCart />
        </h1>
        <div className="bg-gray-200 mt-4 space-y-2 rounded-md p-4">
          <h2 className="text-xl">
            <b>Budget: $500Million</b>
          </h2>
          {selectPlayer.map((element) => {
            return (
              <li key={element.id} className="text-lg list-decimal">
                <b>Name:</b> {element.name}
              </li>
            );
          })}

          <h2 className="text-xl">
            <b>Total Spent:</b> ${totalSpent}Million
          </h2>
          <h2 className="text-xl">
            <b>Remaining:</b> ${remaining}Million
          </h2>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  selectPlayer: PropTypes.array,
  totalSpent: PropTypes.number,
  remaining: PropTypes.number,
};
export default Cart;

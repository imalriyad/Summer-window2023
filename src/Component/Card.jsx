import PropTypes from "prop-types"; // ES6
import { BiSolidCart } from 'react-icons/bi';
const Card = ({ info ,selectPlayerHandler}) => {

  return (
    <div>
      <div className="card h-[430px] bg-base-100 shadow-xl rounded-md">
        <figure>
          <img
            src={info.image}
            alt="player"
            className="rounded w-full h-[172px]"
          />
        </figure>
        <div className="card-body text-left">
          <h2><b>Name:</b> {info.name}</h2>
          <h2><b>Age:</b> {info.age}</h2>
          <h2><b>Position:</b> {info.position}</h2>
          <h2><b>Country:</b> {info.country}</h2>
          <h2><b>Market Value:</b> {info.marketValue}</h2>
          <div className="card-actions">
            <button onClick={()=>selectPlayerHandler(info)} className="py-2 flex items-center px-3 mt-2 text-white rounded-md btn-primary">Buy Now <span className="ml-1"> <BiSolidCart/></span></button>
          </div>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  info: PropTypes.object.isRequired,
  selectPlayerHandler: PropTypes.func
};
export default Card;

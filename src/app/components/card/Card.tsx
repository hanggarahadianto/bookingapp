import { StarIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

interface CardProps {
  onClick: () => void;
  listing: any;
}

const Card: React.FC<CardProps> = ({ listing }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteUpdate = () => {
    setIsFavorite((prevIsFavorite) => !prevIsFavorite);
  };

  return (
    <div>
      <img
        src={listing.image}
        alt={listing.name}
        className="w-full h-48 object-cover transition-transform duration-300 transform hover:sca110"
      />
      <div>
        <div>
          <h3>{listing.name}</h3>
          <div className="flex items-center">
            <StarIcon className="h-5 w-5 text-yellow-500 mr-1" />
            <span className="text-gray-800">{listing.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

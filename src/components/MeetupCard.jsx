/* eslint-disable react/prop-types */

import { formatDateTime } from "../utils/formatDataTime";
import {useNavigate} from "react-router-dom"

const MeetupCard = ({ meetup }) => {
  const { title, eventStartTime, eventType, eventThumbnail, id } = meetup;
  const navigate = useNavigate()

  return (
    <div className="relative w-60 bg-white shadow-lg p-3 flex flex-col gap-3 rounded-sm cursor-pointer" onClick={() => navigate(`/${id}`)}>
      <img
        className="w-full aspect-square object-cover"
        src={eventThumbnail}
        alt={title}
      />
      <p className="text-sm text-gray-500">{formatDateTime(eventStartTime)}</p>
      <h2 className="text-lg font-semibold">{title}</h2>

      <p className="px-2 py-1 bg-white rounded-md absolute top-4 left-4 text-xs">
        {eventType} Event
      </p>
    </div>
  );
};

export default MeetupCard;

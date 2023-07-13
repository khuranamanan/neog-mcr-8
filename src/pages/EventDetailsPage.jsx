import { useNavigate, useParams } from "react-router";
import { useData } from "../context/DataContext";
import { formatDateTime } from "../utils/formatDataTime";
import { AiOutlineArrowLeft } from "react-icons/ai";
import RsvpModal from "../components/RsvpModal";

export default function EventDetailsPage() {
  // const [isOpen, setIsOpen] = useState(false);
  const {
    state: { meetupData },
  } = useData();
  const { eventID } = useParams();
  const navigate = useNavigate();

  const findCurrEvent = meetupData.meetups.find(({ id }) => id === eventID);

  return (
    <div className="flex flex-col gap-2 items-center p-4">
      <div>
        <button
          className="bg-red-500 hover:bg-red-400 rounded-full p-3 text-white self-start"
          onClick={() => navigate(-1)}
        >
          <AiOutlineArrowLeft size={15} />
        </button>
      </div>
      <h2 className="text-2xl font-bold">{findCurrEvent.title}</h2>
      <div className="max-w-xs aspect-square">
        <img
          src={findCurrEvent.eventThumbnail}
          alt="Event Thumbnail"
          className="w-full h-full object-cover"
        />
      </div>
      <p>
        <span className="font-bold">Description:</span>{" "}
        {findCurrEvent.eventDescription}
      </p>
      <p>
        <span className="font-bold">Event Type:</span> {findCurrEvent.eventType}
      </p>
      <p>
        <span className="font-bold">Hosted By:</span> {findCurrEvent.hostedBy}
      </p>
      <p>
        <span className="font-bold">Event Start Time:</span>{" "}
        {formatDateTime(findCurrEvent.eventStartTime)}
      </p>
      <p>
        <span className="font-bold">Event End Time:</span>{" "}
        {formatDateTime(findCurrEvent.eventEndTime)}
      </p>
      {findCurrEvent.isPaid && (
        <p>
          <span className="font-bold">Price:</span> {findCurrEvent.price}
        </p>
      )}
      <p>
        <span className="font-bold">Location:</span> {findCurrEvent.location}
      </p>
      <p>
        <span className="font-bold">Address:</span> {findCurrEvent.address}
      </p>
      {findCurrEvent.additionalInformation && (
        <div>
          <p>
            <span className="font-bold">Dress Code:</span>{" "}
            {findCurrEvent.additionalInformation.dressCode}
          </p>
          <p>
            <span className="font-bold">Age Restrictions:</span>{" "}
            {findCurrEvent.additionalInformation.ageRestrictions}
          </p>
        </div>
      )}
      <h3 className="text-lg font-bold">Speakers</h3>
      {findCurrEvent.speakers.map((speaker, index) => (
        <div key={index} className="flex items-center gap-2">
          <img
            src={speaker.image}
            alt={speaker.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-bold">{speaker.name}</p>
            <p>{speaker.designation}</p>
          </div>
        </div>
      ))}
      <h3 className="text-lg font-bold">Event Tags</h3>
      <ul className="flex gap-2">
        {findCurrEvent.eventTags.map((tag, index) => (
          <li
            key={index}
            className="list-none bg-red-500 px-3 py-2 capitalize inline-block text-white rounded-md"
          >
            {tag}
          </li>
        ))}
      </ul>
      <div className="my-4">
        <RsvpModal event={findCurrEvent} />
      </div>
    </div>
  );
}

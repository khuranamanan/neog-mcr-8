/* eslint-disable react/jsx-key */
import MeetupCard from "../components/MeetupCard";
import { useData } from "../context/DataContext";

function HomePage() {
  const {
    state: { meetupData, sortType, searchKey },
    dispatch,
  } = useData();

  const searchFilter =
    searchKey === ""
      ? meetupData.meetups
      : meetupData.meetups.filter(
          ({ title, eventTags }) =>
            title.toLowerCase().includes(searchKey.toLowerCase()) ||
            eventTags.join(", ").toLowerCase().includes(searchKey.toLowerCase())
        );

  const sortedEvents =
    sortType === "ONLINE"
      ? searchFilter.filter(
          ({ eventType }) => eventType.toLowerCase() === "online"
        )
      : sortType === "OFFLINE"
      ? searchFilter.filter(
          ({ eventType }) => eventType.toLowerCase() === "offline"
        )
      : searchFilter;

  return (
    <div className="flex flex-col gap-4 items-center w-full p-2 pb-8">
      <div className="flex justify-between w-full gap-5 flex-wrap">
        <h1 className="text-3xl font-bold">Meetup Events</h1>
        <div>
          <select
            id="SORT"
            value={sortType}
            onChange={(e) =>
              dispatch({ type: "CHANGE_SORT", payload: e.target.value })
            }
          >
            <option value="BOTH">BOTH</option>
            <option value="ONLINE">ONLINE</option>
            <option value="OFFLINE">OFFLINE</option>
          </select>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        {sortedEvents.map((meetup) => (
          <MeetupCard meetup={meetup} key={meetup.id} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;

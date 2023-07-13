/* eslint-disable react/prop-types */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

function RsvpModal({ event }) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rsvpComplete, setRsvpComplete] = useState(false);
  const [paymentRequired] = useState(event.isPaid);
  const disableRSVP = new Date(event.eventStartTime) < new Date();

  function closeModal() {
    setIsOpen(false);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleRsvp() {
    setRsvpComplete(true);
    setIsOpen(false);
  }

  return (
    <>
      <div>
        {!rsvpComplete && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            disabled={disableRSVP || rsvpComplete}
            className="rounded-md bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 disabled:opacity-50"
          >
            {disableRSVP ? "Event Passed" : "RSVP"}
          </button>
        )}
        {rsvpComplete && (
          <button
            type="button"
            className="rounded-md bg-gray-300 px-4 py-2 text-sm font-medium text-gray-600 cursor-not-allowed"
            disabled
          >
            Already RSVPed
          </button>
        )}
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  RSVP for {event.title}
                </Dialog.Title>
                <div className="mt-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={name}
                    onChange={handleNameChange}
                  />
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                {paymentRequired && (
                  <p className="mt-4 text-sm text-gray-500">
                    * You have to make the payment at the venue.
                  </p>
                )}

                <div className="mt-6">
                  <button
                    type="button"
                    className="w-full justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-200 "
                    onClick={handleRsvp}
                  >
                    {paymentRequired ? "RSVP and Pay" : "RSVP"}
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default RsvpModal;

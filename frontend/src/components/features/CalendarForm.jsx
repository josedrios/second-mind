import { useState, useEffect } from "react";
import Overlay from "../layout/Overlay";
import { createEvent, editEvent } from "../../util/eventUtil";
import { IoIosClose } from "react-icons/io";

export function CalendarOverlay({
  calendarOverlay,
  setCalendarOverlay,
  events,
  setEvents,
  selectedEvent,
  setSelectedEvent,
  loadEvents,
  timeFrame,
  setTimeFrame,
  monthIndex,
}) {
  const now = new Date();
  const pad = (n) => n.toString().padStart(2, "0");
  const formattedNow = `${timeFrame.year}-${pad(monthIndex + 1)}-${pad(
    now.getDate()
  )}T00:00`;

  const [eventForm, setEventForm] = useState({
    info: "",
    reoccurring: "never",
    dueAt: formattedNow,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitEvent = async () => {
    if (selectedEvent) {
      await editEvent(eventForm, selectedEvent._id);
    } else {
      await createEvent(eventForm);
    }
    loadEvents(monthIndex, timeFrame.year);
    setEventForm({
      info: "",
      reoccurring: "never",
      dueAt: formattedNow,
    });
  };

  useEffect(() => {
    console.log(selectedEvent);
    if (selectedEvent) {
      const dueDate = new Date(selectedEvent.dueAt);
      const pad = (n) => n.toString().padStart(2, "0");
      const formattedDueAt = `${dueDate.getFullYear()}-${pad(
        dueDate.getMonth() + 1
      )}-${pad(dueDate.getDate())}T${pad(dueDate.getHours())}:${pad(
        dueDate.getMinutes()
      )}`;
      setEventForm({
        info: selectedEvent.info,
        reoccurring: selectedEvent.reoccurring,
        dueAt: formattedDueAt,
      });
    } else {
      setEventForm({
        info: "",
        reoccurring: "never",
        dueAt: formattedNow,
      });
    }
  }, [selectedEvent]);

  const options = ["never", "daily", "weekly", "monthly", "yearly"];

  return (
    <Overlay
      overlayToggle={calendarOverlay}
      setOverlayToggle={setCalendarOverlay}
    >
      <div id="calendar-overlay" onClick={(e) => e.stopPropagation()}>
        <form
          id="calendar-overlay-form"
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            submitEvent();
          }}
        >
          <div id="calendar-overlay-header">
            <h5>{selectedEvent ? "Edit" : "Create"} Event</h5>
            <button
              className="calendar-overlay-close-button"
              onClick={(e) => {
                e.preventDefault();
                setCalendarOverlay(false);
              }}
            >
              <IoIosClose />
            </button>
          </div>
          <p>Date</p>
          <input
            name="dueAt"
            className="standard-input"
            type="datetime-local"
            value={eventForm.dueAt}
            onChange={handleChange}
          />
          <p>Event Name</p>
          <input
            name="info"
            className="standard-input"
            type="text"
            value={eventForm.info}
            onChange={handleChange}
            autoComplete="off"
            placeholder="Enter event..."
          />
          <p>Reoccurring</p>
          <div id="reoccurring-options-container">
            {options.map((opt) => (
              <button
                key={opt}
                className={`reoccurring-option-button ${
                  eventForm.reoccurring === opt
                    ? "reoccurring-chosen-option"
                    : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setEventForm((prev) => ({ ...prev, reoccurring: opt }));
                }}
              >
                {opt.charAt(0).toUpperCase() + opt.slice(1)}
              </button>
            ))}
          </div>
          <button className="standard-btn" type="submit">
            {selectedEvent ? "Edit" : "Create"}
          </button>
        </form>
      </div>
    </Overlay>
  );
}

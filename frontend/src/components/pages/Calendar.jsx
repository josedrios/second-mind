import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

export default function Calendar() {
  return (
    <div id="calendar-page-container">
      <div id="calendar-container">
        <div id="calendar-month-navigation">
          <button className="month-navigation-buttons">
            <FaArrowLeftLong />
          </button>
          <p id="month-navigation-label">APRIL</p>
          <button className="month-navigation-buttons">
            <FaArrowRightLong />
          </button>
        </div>
        <div id="calendar-days">
          <p>S</p>
          <p>M</p>
          <p>T</p>
          <p>W</p>
          <p>T</p>
          <p>F</p>
          <p>S</p>
        </div>
        <div id="calendar-body">
          {Array.from({ length: 31 }).map((_, i) => (
            <button
              className={`calendar-date-button ${
                i % 2 === 0 ? "contains-events" : ""
              }`}
              key={i}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <div id="calendar-year-navigation">
          <button className="year-navigation-buttons">
            <FaArrowLeftLong />
          </button>
          <p id="year-navigation-label">2025</p>
          <button className="year-navigation-buttons">
            <FaArrowRightLong />
          </button>
        </div>
      </div>
      <CalendarDetails />
    </div>
  );
}

function CalendarDetails() {
  return (
    <div id="calendar-details">
      <div id="calendar-upcoming">
        <p id="upcoming-header">
          <p>UPCOMING</p>
          <button className="calendar-event-button">Create/Edit</button>
        </p>
        <div id="upcoming-body">
          <div className="upcoming-day">
            <p className="upcoming-day-label">01</p>

            <div className="upcoming-events">
              <CalendarEvent />
              <CalendarEvent />
              <CalendarEvent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CalendarEvent() {
  return (
    <div className="event-container">
      <p className="event-label">01.1 /</p>
      <p className="event-info">This is an example event</p>
    </div>
  );
}

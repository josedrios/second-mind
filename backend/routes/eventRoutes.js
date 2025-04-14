const express = require("express");
const {
    getEvents,
    createEvent,
    editEvent,
    deleteEvent
} = require("../controllers/eventController");

const router = express.Router();

router.get("/", getEvents);
router.post("/", createEvent);
router.patch("/", editEvent);
router.delete("/", deleteEvent);

module.exports = router;
const express = require('express');
const router = express.Router();

const travellerRoutes = require("./travellerController");
const tripRoutes = require("./tripsController");

router.use("/travellers",travellerRoutes);
router.use("/trips", tripRoutes);

const tripRoutes = require("./tripsController");
router.use("/trips",tripRoutes);

module.exports = router;
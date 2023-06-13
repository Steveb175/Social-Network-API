const express = require("express");
const thoughtRoutes = require("./thoughtRoutes");
const userRoutes = require("./userRoutes");

router.use("/thoughtRoutes", thoughtRoutes);
router.use("/userRoutes", userRoutes);

module.exports = router;

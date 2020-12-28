const express = require("express");
const upload = require("../services/upload");
const { uploadImage, getImages, deleteImage } = require("../controller/appController");
const router = express.Router();
// /api/images
router.get("/images", getImages);
// /api/upload
router.post("/upload", upload.single("picture"), uploadImage);

router.delete("/images", deleteImage);

module.exports = router;
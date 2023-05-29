const router = require("express").Router();
// 
const {upload}=require("../utils/authUtils");
// 

const {
  getFriends,
  messageUploadDB,
  messageGet,
  ImageMessageSend,
  messageSeen,
  delivaredMessage,
} = require("../controller/messengerController");
const { authMiddleware } = require("../middleware/authMiddleware");

// 
// router.post('/upload-doc',authMiddleware, upload,shareDocuments);
// router.delete('/delete-message/:id' ,authMiddleware, deleteMessage );
// 
router.get("/get-friends", authMiddleware, getFriends);
router.post("/send-message", authMiddleware, messageUploadDB);
router.get("/get-message/:id", authMiddleware, messageGet);
router.post("/image-message-send", authMiddleware, ImageMessageSend);

router.post("/seen-message", authMiddleware, messageSeen);
router.post("/delivared-message", authMiddleware, delivaredMessage);

module.exports = router;

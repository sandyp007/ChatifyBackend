

// const multer = require("multer")
// const path =require("path")

// const storage = multer.diskStorage({
//   destination: function (req, file, callback) {
//        const newPath =path.join(__dirname +`../../../frontend/public/image` );
//       callback(null, newPath);
//   },
//   filename: function (req, file, callback) {
//       callback(null,file.originalname);
      
//   }
// });

// exports.upload = multer(
//   {
//       storage: storage,
//       limits: { fileSize: 1024*1024*1024 }
//   }
// ).single('file');
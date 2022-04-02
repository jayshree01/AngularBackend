const express = require("express");
const router = express.Router();
const categoryController = require("../controller/category");
const multer = require('multer');
const tokenVerification = require('../middleware/tokenverification');
var storage = multer.diskStorage({
    destination:'public/images',
    filename:function(request,file,cb){
        cb(null , Date.now()+"-"+file.originalname);
    }
});
var upload=multer({storage: storage});

router.post("/add",upload.single("image"),tokenVerification.verifyToken,categoryController.add);

// router.get("/view",categoryController.view);

// router.post("/edit",upload.single("image"),categoryController.edit);

// // router.delete("/delete",categoryController.delete);

module.exports = router;
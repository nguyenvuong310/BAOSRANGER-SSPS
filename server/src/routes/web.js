import ggAuthController from "../controllers/ggAuthController";
import driveController from "../controllers/driveController";
import userController from "../controllers/userController";
import printController from "../controllers/printController";
import buypageController from "../controllers/buypageController";
import searchController from "../controllers/searchController";
import adminController from "../controllers/adminController";
const router = require("express").Router();
const passport = require("passport");

const stream = require("stream");

const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 50 * 1024 * 1024 },
}); // Adjust fileSize limit as needed
const type = upload.single("file");

let initWebRoutes = (app) => {
  //api for login to google
  router.get("/auth/login/success", ggAuthController.handleLoginSuccess);
  router.get("/auth/login/failed", ggAuthController.handleLoginFailed);
  router.get("/auth/logout", ggAuthController.handleLogOut);
  router.get("/auth/google", ggAuthController.handleAuthGoogle);
  router.get("/auth/google/callback", ggAuthController.handleCallBack);
  //CRUD to ggDrive
  router.get("/drive/createFolder", driveController.handleCreateFolder);
  router.post("/drive/uploadFile", type, driveController.handleUploadFile);
  // userController
  router.get("/api/getUserInfo", userController.handleGetUserInfo);
  router.get("/api/getalldoc", userController.handleGetDoc);
  router.post("/api/deletedoc", userController.handleDeleteDoc);
  router.post("/api/getlistcourse", userController.handleGetListCourse);
  router.post("/api/getdocbysearch", userController.handleGetDocbySearch);
  router.post(
    "/api/getdocbysearchpublic",
    userController.handleGetDocbySearchPublic
  );
  router.post(
    "/api/getdocbysearchname",
    userController.handleGetDocbySearchName
  );
  // printController
  router.post("/api/getallprinter", printController.handleGetPrinter);
  router.post("/api/getprintertime", printController.handleGetPrinterTime);
  router.post("/api/print", printController.handlePrint);
  router.post("/api/getprinthistory", printController.handleGetPrintHistory);
  // buypageController
  router.post("/api/buypage", buypageController.handleBuyPage);
  router.post("/api/getprintbuy", buypageController.handleGetBuyHistory);
  // searchController
  router.post("/api/search", searchController.handleSearch);
  // adminController
  router.post("/api/getalluser", adminController.handleGetAllUser);
  router.post("/api/getblockeduser", adminController.handleGetBlockedUser);
  router.post("/api/admingetallprinter", adminController.handleGetAllPrinter);
  router.post("/api/blockuser", adminController.handleBlockUser);
  router.post("/api/deleteprinter", adminController.handleDeletePrinter);
  router.post(
    "/api/admingetprinthistory",
    adminController.handleGetPrintHistory
  );
  router.post(
    "/api/admingetprinthistorybymssv",
    adminController.handleGetPrintHistoryByMSSV
  );
  router.post("/api/addprinter", adminController.handleAddPrinter);
  router.post("/api/updateprinter", adminController.handleUpdatePrinter);
  router.post(
    "/api/admingetuserbysearch",
    adminController.handleGetUserBySearch
  );
  router.post(
    "/api/admingetblockeduserbysearch",
    adminController.handleGetBlockedUserBySearch
  );
  router.post("/api/activeprinter", adminController.handleActivePrinter);
  router.post("/api/confirmprinted", adminController.handleConfirmPrinted);

  return app.use("/", router);
};
module.exports = initWebRoutes;

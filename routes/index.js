var express = require("express");
var router = express.Router();
const ControllerMethods = require("../Controler/DEVENT");

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* GET home page. */
/*router.post("/CreateUser", ControllerMethods.CreateUser);
router.get("/getUser", ControllerMethods.getUser);
router.post("/CreateProject", ControllerMethods.CreateProject);

///

router.get("/getproject", ControllerMethods.getproject);
router.post("/CreateRules", ControllerMethods.CreateRules);
router.get("/getRules", ControllerMethods.getRules);
router.post("/addProUser", ControllerMethods.addProUser);
router.post("/addTicket", ControllerMethods.addTicket);
router.get("/getUserPro", ControllerMethods.getUserPro);

router.get("/getTicketUser", ControllerMethods.getTicketUser);
router.get("/getTicketProject", ControllerMethods.getTicketProject);
*/
module.exports = router;


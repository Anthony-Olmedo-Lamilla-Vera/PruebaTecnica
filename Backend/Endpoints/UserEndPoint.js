const UserRouter = require("express").Router();
const CreateUser = require("../Methods/CreateUser");
const GetInfoTwitter = require("../Methods/GetInfoTwitter");
const NewTimeLine = require("../Methods/NewTimeLine");
const UpdateUser = require("../Methods/UpdateUser");
UserRouter.get("/user", GetInfoTwitter);
UserRouter.post("/create-user", CreateUser);
UserRouter.put("/update-user", UpdateUser);
UserRouter.put("/new-timeLine", NewTimeLine);

module.exports = UserRouter;

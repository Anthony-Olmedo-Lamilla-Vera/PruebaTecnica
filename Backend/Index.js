const express = require("express");
const app = express();
const cors = require("cors");
const UserRouter = require("./Endpoints/UserEndPoint");

app.use(cors());
app.use(express.json());
app.use("/api/v1", UserRouter);

app.listen(8000, () => {
  console.log("Puerto 8000");
});

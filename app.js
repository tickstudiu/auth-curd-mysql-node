require("dotenv").config();
const express = require("express");
const cors = require('cors')
const app = express();

const userRouter = require("./api/users/user.router");
const dataRouter = require("./api/datas/data.router");
const visibleRouter = require("./api/visibles/visible.router");

app.use(cors())
app.use(express.json());

app.use("/api/users", userRouter);
app.use("/api/datas", dataRouter);
app.use("/api/visible", visibleRouter);

const port = process.env.APP_POST || 5000;
app.listen(port, () => {
  console.log("server up and running on PORT :", port);
});

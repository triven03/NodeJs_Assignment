const express = require("express")
const bodyParser = require("body-parser")

const port = process.env.PORT || 3000;
const startDb = require("./database/init");
const userController = require("./controllers/userController");


startDb.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.route("/getStatus").post(userController.showStatus);
// app.route("/").get(userController.showStatus);

app.listen(port, () => {
    console.log(`server is start port number ${port}`);
});


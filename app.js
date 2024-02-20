const express = require("express");
const app = express();
const port =3030;
const rutaHome = require("./routes/home.routes")
const rutaDetalle = require("./routes/detalle.routes")
app.use(express.static("public"));


app.use("/", rutaHome);
app.use("/detalle",rutaDetalle);


app.set("view engine" ,"ejs");
app.listen(port,console.log(`http://localhost:${port}`))
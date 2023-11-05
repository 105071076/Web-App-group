const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

app.use(cors());

const connectDB = require("./config/db");

//Middleware

app.use(express.json({ extended: false }));

connectDB();

app.use("/api/auth", require("./routes/auth"));
app.use("/api/users", require("./routes/login"));
app.use("/api/profile", require("./routes/profile"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Started to port ${PORT}`));
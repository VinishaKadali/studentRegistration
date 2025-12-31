const express = require("express");
const db = require("./db");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.post("/register", (req, res) => {
    const { name, email, course, phone } = req.body;

    const sql = "INSERT INTO students (name, email, course, phone) VALUES (?, ?, ?, ?)";
    db.query(sql, [name, email, course, phone], (err) => {
        if (err) {
            res.send("Error in registration");
        } else {
            res.send("Student Registered Successfully");
        }
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

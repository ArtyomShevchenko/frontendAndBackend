const express = require("express");

// React PORT:3000, express PORT:3001
const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
    console.log(`Server run on PORT:${PORT}\n>>> http://localhost:${PORT}`)
})

const fs = require("fs");
const path = require("path")


const getDataFromDB = () => {
    const db = fs.readFileSync(path.resolve() + '/backend/db.json', "utf8", (err, data) => {
        if (err) console.log("Error :" + err);
        return data
    })

    return JSON.parse(db)
}

// const data = [
//     {
//         "city": "Dengfang",
//         "text": "velit donec diam neque vestibulum eget vulputate ut ultrices vel"
//     },
//     {
//         "city": "Diang",
//         "text": "blandit nam nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id"
//     },
//     {
//         "city": "Lviv",
//         "text": "quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse"
//     },
//     {
//         "city": "Kyiv",
//         "text": "tempor convallis nulla neque libero convallis eget eleifend quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse"
//     },
//     {
//         "city": "Odessa",
//         "text": "tempor convallis nulla neque libero convallis eget eleifend quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse"
//     },
//     {
//         "city": "Ivano Frankivsk",
//         "text": "tempor convallis nulla neque libero convallis eget eleifend quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse"
//     }
// ]

app.get("/api", (req, res) => {
    res.json(getDataFromDB())
})

// test
app.get("/", (req, res) => res.send(`Server run on PORT:${PORT} >>>`))

app.get('/get', (req, res) => res.send('GET request to the homepage'));

app.post("/post", (req, res) => req.send("POST request to the homepage"))
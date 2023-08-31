const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const baseUrl = '/calculator'

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get('/greeting', (req, res) => {
    return res.send('Hello World!!');
});

baseRouter.post('/add', (req, res) => {
    const {num1,num2} = req.body;
    res.json({ "result": num1+num2 });
});


baseRouter.post('/subtract', (req, res) => {
    const {num1,num2} = req.body;
    res.json({ "result": num1-num2 });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
    console.log("Server running at PORT", PORT);
});
const express = require("express");
const urlRouter = require("./routes/url");
const connect = require("./connect");
const URL = require("./models/url");

const app = express();
const port = 3000;
connect('mongodb://localhost:27017/short-url').then(() => {
    console.log("connected to database");
}); 

app.use(express.json());
app.use('/url', urlRouter);

app.get('/:shortId', async (req, res) => {    
    const shortId = req.params.shortId;
    const url = await URL.findOneAndUpdate({shortId});
    if(!url) {
        return res.status(404).json({error: "url not found"});
    }
    url.visitHistory.push({timestamp : Date.now()});
    await url.save();
    res.redirect(url.redirectURL);
});

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
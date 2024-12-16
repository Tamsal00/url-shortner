const shortid = require("shortid");
const URL = require("../models/url");

async function handlegenerateNewShortURL(req, res) {

    const body = req.body;
    if(!body.url) {
        return res.status(400).json({
            error: "url is required"
        });
    }   

    const shortId = shortid.generate();
    const url = await URL.create({
        shortId,
        redirectURL: body.url,
        visitHistory: [],
    });
  
    return res.status(200).json({
        id: url.shortId,
    });
}

async function handlegenerateNewShortURL(req, res) {
    const shortId = req.params.shortId;
    const url = await URL.findOne({shortId});
    if(!url) {
        return res.status(404).json({error: "url not found"});
    }
    return res.status(200).json({totalClicks: url.visitHistory.length, visitHistory: url.visitHistory});
}   

module.exports = {
    handlegenerateNewShortURL
};
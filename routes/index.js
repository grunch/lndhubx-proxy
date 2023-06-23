const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/.well-known/nostr.json", async (req, res, next) => {
  try {
    let username = req.query.username;
    let resp = await nostr(username);
    console.log(`response: ${resp}`);

    res.json(resp);
  } catch (error) {
    console.error(error);
    res.json({ error: "UnknownError" });
  }
});

router.get("/.well-known/lnurlp/:username", async (req, res, next) => {
  try {
    let username = req.params.username;
    let resp = await lnurlp(username);
    console.log(`response: ${resp}`);

    res.json(resp);
  } catch (error) {
    console.error(error);
    res.json({ error: "UnknownError" });
  }
});

const lnurlp = async (username) => {
  try {
    const r = await axios.get(process.env.LNDHUBX_URL + `/lnurlp/${username}`);

    return r.data;
  } catch (error) {
    console.error(error);

    return error.response.data;
  }
};

const nostr = async (username) => {
  try {
    const r = await axios.get(
      process.env.LNDHUBX_URL + `/nostr.json?name=${username}`
    );

    return r.data;
  } catch (error) {
    console.error(error);

    return error.response.data;
  }
};

module.exports = router;

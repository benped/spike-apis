const express = require('express');
const router = express.Router();

require("dotenv").config();
const accountSid = `${process.env.accountSid}`; // Your Account SID from www.twilio.com/console
const authToken = `${process.env.authToken}`; // Your Auth Token from www.twilio.com/console

const twilio = require('twilio');
const client = new twilio(accountSid, authToken);


router.post('/', (req, res) => {
console.log('text body is', req.body.text);
console.log('phone is', req.body.phone);


  client.messages
  .create({
    body: req.body.text,
    to: `+1${req.body.phone}`, // Text this number
    from: '+12184058150', // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));
  
});







module.exports = router;
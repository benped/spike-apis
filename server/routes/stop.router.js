const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
const accountSid = 'AC3e75e799322f8adcc2e9dde5ecb913d2'; // Your Account SID from www.twilio.com/console
const authToken = 'ad84090b9c70f9530373058f3a113dab'; // Your Auth Token from www.twilio.com/console

const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

router.post('/', (req, res) => {
console.log('inside serverside get text');

  client.messages
  .create({
    body: 'Hello from Node',
    to: '+12626744046', // Text this number
    from: '+12345678901', // From a valid Twilio number
  })
  .then((message) => console.log(message.sid));

});






module.exports = router;
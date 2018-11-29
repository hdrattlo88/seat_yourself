var twilio = require('twilio');
var accountSid = 'AC6d0fc9ab7d3fbcc6a41dd7a067ce00f2'; // Your Account SID from www.twilio.com/console
var authToken = '16d5a30534d1020c2a11fc3bcc57b00f';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);
client.messages.create({
    body: 'maybe this will work?',
    to: '+13174782026',  // Text this number
    from: '+13462487831' // From a valid Twilio number
})
.then((message) => console.log(message.sid));
//add code required to import the keys.js file-store in variable?
//you should be able to access your keys information  
// include ./keys.js in liri.js to run program instructions
var keys = require('./keys.js'); //how do I use the keys  variable 

//twitter variable- twitter documentattion
var Twitter = require('twitter');
//twiter npm  documentation-need to understand?
var client = new Twitter({
    consumer_key: process.env.spOfPPFIItbmB0RrJAjHn87Iv,
    consumer_secret: process.env.Q6LTVrDkVcXqafZWGsDV7qqGez9hZolpVBKWoNiNexi6DLxgIB,
    access_token_key: process.env .34693307 - pb9UBMXEHGgOk4AnpMExuSodgesQ7qUuvJ6oTghEv,
    access_token_secret: process.env.SyPFzfD19x7eKJLgVvqGyOtmuqnc5mjCxcivUDRleQlG8,
});


//TWITTER
//create function to displayTweets?????
//show 20 tweets
//function displayTweets() {}
function displayTweets() {
    var params = { screen_name: 'nodejs' } //my screen name in place of nodejs?
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            console.log(params);
        }

        //loop through 20 tweets? then do what? 
        for (i = 19; i < params.length; i++) {

        }
    });
    console.log(params);
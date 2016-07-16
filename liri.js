var keys = require("./keys.js");  //./ means in the same direcotry


var Twitter = require('twitter');
var spotify = require('spotify');
var request = require('request');
 
 
// var client = new Twitter(keys.twitterKeys);
//  console.log(keys);


//  var params = {screen_name: '@josiepizzo'};
//  client.get('statuses/user_timeline', params, function(error, tweets, response){
//   if (error) {
//      console.log(error);
//    }
//    if (!error) {
//      console.log(tweets);
//    }
//  });

 
// spotify.search({ type: 'track', query: 'I Want it That Way' }, function(err, data) {
//     if ( err ) {
//         console.log('Error occurred: ' + err);
//         return;
//     }

//     console.log(data);

//     for (var i = 0; i < data.tracks.items.length; i++) {
//       console.log(data.tracks.items[i].name);
//       console.log(data.tracks.items[i].artists[0].name);
      
//     }
 
//     // Do something with 'data' 
// });


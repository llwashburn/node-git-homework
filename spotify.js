var Spotify = require('node-spotify-api');

var spotify = new Spotify({
    ID: 4e faf8406e614351b28b5ae0bb6b0a35,
    Secret: d66ffffed11a4278964cb6933427c9d3,
});

spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }
});
console.log(data);

//name string documentation
//artist's name
// space btw text and data
console.log("Artist: " + data.artists[0].Name);
//song's name
console.log("Song: " + data.Song);
//preview link from spotify? Url
console.log("URL preview: " + data.preview_url);
//the alblum's name
console.log("album: " + data.album.Album);
//work on bonus to append to file?
// Load all the channels within this directory and all subdirectories.
// Channel files must be named *_channel.js.

const channels = require.context('.', true, /_channel\.js$/)
channels.keys().forEach(channels)

// highlightFor('','lightblue', 3);

function highlightFor(id,color,seconds){
    var element = document.getElementById(id)
    var origcolor = element.style.backgroundColor
    element.style.backgroundColor = color;
    var t = setTimeout(function(){
       element.style.backgroundColor = origcolor;
    },(seconds*1000));
}

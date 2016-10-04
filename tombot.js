var messages = ["commit", "coverage", "myuw_active", "myuw_err", "sql_test", "ss_err"];

$(document).ready(function() {
    window.my_order = shuffle(messages.slice());
    init_images();

    window.setTimeout(function(){
        play_message();
    }, randomIntFromInterval(3000,5000));

    $("audio").on("ended", function(){
        window.setTimeout(function(){
            play_message();
        }, randomIntFromInterval(3000,8000));
    });
});


function play_message() {
    var message = $("#"+ get_message_id());
    if(message[0] !== undefined){
        message[0].play();
    } else {
        play_message();
    }

}
function play_test() {
    var id = get_message_id();
    return $("#"+ id);
}

function init_images() {
    $("audio").on("ended", function() {
        $("#tombot").attr('src', 'silent.jpg');
    });

    $("audio").on("play", function() {
        $("#tombot").attr('src', 'talking.gif');
    });

}

function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function get_message_id() {
    var msg_id = window.my_order.pop();
    if (msg_id === undefined) {
        window.my_order = shuffle(messages.slice());
        msg_id = window.my_order.pop();
    }
    return msg_id;
}


function shuffle(array) {
    // Credit: https://github.com/coolaj86/knuth-shuffle
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
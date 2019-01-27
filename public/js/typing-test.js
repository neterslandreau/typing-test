/*
 * The typing test stuff
 */

var start_text = 'The quick brown fox jumps over the lazy dog. The fox then laughs and laughs and laughs! Then the lazy dog bit the brown fox.';
var index = 0;
var started = false;

var wordcount = 0;

$("#input_text").val(start_text);
var letters =	$("#input_text").val();

var character_length = letters.toString().length;
var current_string = letters.substring(index, index + character_length);

$("html, body").click(function() {
	$("#output").focus();
});

$("#target").text(current_string);
console.log('letters: '+letters);

$(window).keypress(function(evt) {
	if (!started) {
		start();
		started = true;
	}

	evt = evt || window.event;
	var charCode = evt.which || evt.keyCode;
	var charTyped = String.fromCharCode(charCode);

	if(charTyped == letters.charAt(index)) {

		if(charTyped == " ") {
			wordcount ++;
			$("#wordcount").text(wordcount);
		}

		index ++;

		current_string = letters.substring(index, index + character_length);

		$("#target").text(current_string);
		$("#your-attempt").append(charTyped);
		if(index == letters.length) {
			wordcount ++;
			$("#wordcount").text(wordcount);
			$("#timer").text(timer);
			if(timer == 0) {
				timer = 1;
			}
			wpm = Math.round(wordcount / (timer / 60));
			$("#wpm").text(wpm);
			stop();
			finished();
		}
	} else {
		$("#your-attempt").append("<span class='wrong'>" + charTyped + "</span>");
		errors ++;
		$("#errors").text(errors);
	}
});

var timer = 0;
var wpm = 0;
var errors = 0;
var interval_timer;

$("#reset").click(function(){
	reset();
});

$("#change").click(function(){
	$("#input_text").show().focus();
});

$("#pause").click(function(){
	stop();
});

$("#input_text").change(function(){
	reset();
});

function start(){
	interval_timer = setInterval(function() {
		timer ++;
		$("#timer").text(timer);
		wpm = Math.round(wordcount / (timer / 60));
		$("#wpm").text(wpm);
	}, 1000)
}

function stop(){
	clearInterval(interval_timer);
	started = false;
}

function reset(){
/*
	$("#input_text").blur().hide();
*/
	$("#your-attempt").text("");
	index = 0;
	errors = 0;
	clearInterval(interval_timer);
	started = false;
	letters = $("#input_text").val();
	$("#wpm").text("0");
	$("#timer").text("0");
	$("#wordcount").text("0");
	timer = 0;
	wpm = 0;
	current_string = letters.substring(index, index + character_length);
	$("#target").text(current_string);
	$('#output').focus();
}

function finished(){
	alert("Congratulations!\nWords per minute: " + wpm + "\nWordcount: " + wordcount + "\nErrors:" + errors);
	$.post('results', {
		_token: Laravel.csrfToken,
		wpm: wpm,
		wordcount: wordcount,
		errors: errors
	}, function(data) {
		console.log(data);
	});
}

var window_focus;

$(window).focus(function() {
	window_focus = true;
}).blur(function() {
	window_focus = false;
});

$(function() {
	if(window_focus){
		$("#focus").hide();
	}
	$(window).focus(function() {
		$("#focus").hide();
	});
});
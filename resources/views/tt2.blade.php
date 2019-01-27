@extends('layouts.typing-test')

@section('content')

<p id="focus">Click this window to give it focus (Start typing with a capital S!)</p>

<h1 id="output"></h1>

<div class="target mono" id="target"></div>

<div id="your-attempt" class="mono your-attempt" placeholder="Your text will appear here"></div>


<div class="results">
  <ul class="stats">
    <li>Words per minute <span id="wpm">0</span></li>
    <li>Wordcount <span id="wordcount">0</span></li>
    <li>Timer <span id="timer">0</span></li>
    <li>Errors <span id="errors">0</span></li>
  </ul>
</div>
<hr style="clear:both;" />
<div>

<textarea name="" id="input_text" cols="30" rows="10">Suddenly quite near him there was a rifle shot. Sudde</textarea>
</div>

<div class="settings">
  <a href="#" id="reset">Reset</a> | <a href="#" id="change">Change text</a> | <a href="#" id="pause">Pause II</a>
</div>

@endsection
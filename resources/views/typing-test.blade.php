@extends('layouts.typing-test')

@section('content')

<div id="your-attempt" class="mono your-attempt"></div>

<p>
	<textarea id="input_text" cols="80" rows="10" style="width:100%"></textarea>
</p>

<h1 id="output"></h1>
<div class="target mono" id="target"></div>


<p>
	<textarea id="output" cols="80" rows="10" style="width:100%"></textarea>
</p>

<div class="results" style="display:none;">
  <ul class="stats">
    <li>Words per minute <span id="wpm">0</span></li>
    <li>Wordcount <span id="wordcount">0</span></li>
    <li>Timer <span id="timer">0</span></li>
    <li>Errors <span id="errors">0</span></li>
  </ul>
</div>

<button id="change">Edit Typing Text</button>
<button id="reset">Reset</button>
@endsection


---
title: Используем Web Audio API
slug: Web/API/Web_Audio_API/Using_Web_Audio_API
translation_of: Web/API/Web_Audio_API/Using_Web_Audio_API
---
<div class="summary">
<p><a href="/en-US/docs/Web_Audio_API">Web Audio API</a> обеспечивает простой, но мощный механизм реализации и управления аудио-контентом внутри web приложения. Это позволяет разрабатывать сложные аудио миксины, эффекты и т.д. В этой статье мы постараемся объяснить основы использования Web Audio API, посредством пары простых примеров.</p>
</div>

<div>
<p>The Web Audio API does not replace the <a href="/en-US/docs/Web/HTML/Element/audio">&lt;audio&gt;</a> media element, but rather complements it, just like <a href="/en-US/docs/Web/HTML/Element/canvas">&lt;canvas&gt;</a> co-exists well alongside the <a href="/en-US/docs/Web/HTML/Element/Img">&lt;img&gt;</a> element. What you use to implement audio depends on your use case. If you just want to control playback of a simple audio track, &lt;audio&gt; is probably a better, quicker solution. If you want to carry out more complex audio processing, as well as playback, Web Audio API provides much more power and control.</p>

<p>One very powerful thing about the Web Audio API is that it does not have any strict "sound call limitations". There is no ceiling of 32 or 64 sound calls at one time, for example. Depending on the power of your processor, you might be able to get a thousand or more sounds playing simultaneously without stuttering. This shows real progress, given that a few years ago mid to high range sound cards were able to handle only a fraction of this load.</p>
</div>

<h2 id="Examples">Examples</h2>

<p>To demonstrate usage of the Web Audio API, we created a number of examples which will be added to as time goes on. Please feel free to add to them and suggest improvements!</p>

<p>First off, we created the <a href="https://github.com/mdn/voice-change-o-matic">Voice-change-O-matic</a>, a fun voice changer and sound visualisation web app, which allows you to choose different effects and visualisations. This could definitely be improved on with better quality effects, but it demonstrates the usage of multiple Web Audio API features together (<a href="http://mdn.github.io/voice-change-o-matic/">run the Voice-change-O-matic live</a>).</p>

<p><img alt="A UI with a sound wave being shown, and options for choosing voice effects and visualizations." src="https://mdn.mozillademos.org/files/7921/voice-change-o-matic.png" style="display: block; height: 500px; margin: 0px auto; width: 640px;"></p>

<p>Another example we've created on our quest to understand the Web Audio is the <a href="http://mdn.github.io/violent-theremin/">Violent Theremin</a>, a simple app allowing you to change the pitch and volume by moving your mouse pointer. It also provides a psychedelic lightshow (<a href="https://github.com/mdn/violent-theremin">see Violent Theremin source code</a>).</p>

<p><img alt="A page full of rainbow colours, with two buttons labeled Clear screen and mute. " src="https://mdn.mozillademos.org/files/7919/violent-theremin.png" style="display: block; height: 458px; margin: 0px auto; width: 640px;"></p>

<h2 id="Basic_concepts">Basic concepts</h2>

<div class="note">
<p><strong>Note</strong>: most of the code snippets in this example are taken from the <a href="https://github.com/mdn/violent-theremin">Violent Theremin example</a>.</p>
</div>

<p>The Web Audio API involves handling audio operations inside an <strong>audio context</strong>, and has been designed to allow <strong>modular routing</strong>. Basic audio operations are performed with <strong>audio nodes</strong>, which are linked together to form an <strong>audio routing graph</strong>. Several sources — with different types of channel layouts — are supported even within a single context. This modular design provides the flexibility to create complex audio functions with dynamic effects.</p>

<p>Audio nodes are linked via their inputs and outputs, forming a chain that starts with one or more sources, goes through one or more nodes, then ends up at a destination (although you don't have to provide a destination if you, say, just want to visualise some audio data). A simple, typical workflow for web audio would look something like this:</p>

<ol>
 <li>Create audio context</li>
 <li>Inside the context, create sources — such as <code>&lt;audio&gt;</code>, oscillator, stream</li>
 <li>Create effects nodes, such as reverb, biquad filter, panner, compressor</li>
 <li>Choose final destination of audio, for example your system speakers</li>
 <li>Connect the sources up to the effects, and the effects to the destination</li>
</ol>

<h3 id="Creating_an_audio_context">Creating an audio context</h3>

<p>First, you will need to create an instance of <a href="/en-US/docs/Web/API/AudioContext"><code>AudioContext</code></a> to build an audio graph upon. The simplest example of this would look like so:</p>

<pre class="brush: js">var audioCtx = new AudioContext();
</pre>

<div class="note">
<p><strong>Note</strong>: Multiple audio context instances are allowed on the same document, but are likely wasteful.</p>
</div>

<p>However, it is important to provide a prefixed version for Webkit/Blink browsers, and a non-prefixed version for Firefox (desktop/mobile/OS). Something like this would work:</p>

<pre class="brush: js">var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
</pre>

<div class="note">
<p><strong>Note</strong>: Safari can break if you don't explcitly mention the <code style="line-height: 1.5; font-style: normal;">window</code> object when creating a new context!</p>
</div>

<h3 id="Creating_an_audio_source">Creating an audio source</h3>

<p>Now we have an audio context, and we can use the methods of this context to do most everything else. The first thing we need is an audio source to play around with. Audio sources can come from a variety of places:</p>

<ul>
 <li>Generated directly by JavaScript by an audio node such as an oscillator. An {{ domxref("OscillatorNode") }} is created using the {{ domxref("AudioContext.createOscillator") }} method.</li>
 <li>Created from raw PCM data: the audio context has methods to decode supported audio formats; see {{ domxref("AudioContext.createBuffer()") }}, {{ domxref("AudioContext.createBufferSource()") }}, and {{ domxref("AudioContext.decodeAudioData()") }}.</li>
 <li>Taken from HTML media elements such as {{HTMLElement("video")}} or {{HTMLElement("audio")}}: see {{ domxref("AudioContext.createMediaElementSource()") }}.</li>
 <li>Taken directly from a <a href="/en-US/docs/WebRTC" title="/en-US/docs/WebRTC">WebRTC</a> {{domxref("MediaStream")}} such as from a webcam or microphone. See {{ domxref("AudioContext.createMediaStreamSource()") }}.</li>
</ul>

<p>For this particular example we'll just create an oscillator to provide a simple tone for our source, and a gain node to control sound volume:</p>

<pre class="brush: js">oscillator = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();
</pre>

<div class="note">
<p><strong>Note</strong>: To play a music file directly, you generally have to load the file using XHR, decode the file into a buffer, and then feed that buffer into a buffer source. See this <a href="https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js#L48-L68">example from Voice-change-O-matic</a>.</p>
</div>

<div class="note">
<p><strong>Note</strong>: Scott Michaud has written a useful helper library for loading and decoding one or more audio samples, called <a href="https://github.com/ScottMichaud/AudioSampleLoader">AudioSampleLoader</a>. This can help simplify the XHR/buffering process described in the above note.</p>
</div>

<h3 id="Linking_source_and_destination_together">Linking source and destination together</h3>

<p>To actually output the tone through your speakers, you need to link them together. This is done by calling the <code>connect</code> method on the node you want to connect from, which is available on most node types. The node that you want to connect to is given as the argument of the <code>connect</code> method.</p>

<p>The default output mechanism of your device (usually your device speakers) is accessed using {{ domxref("AudioContext.destination") }}. To connect the oscillator, gain node and destination together, we would use the following:</p>

<pre class="brush: js">oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);
</pre>

<p>In a more complex example (such as the <a href="http://mdn.github.io/voice-change-o-matic/">Voice-change-O-matic</a>), you can chain together as many nodes as you want. For example:</p>

<pre class="brush: js">source = audioCtx.createMediaStreamSource(stream);
source.connect(analyser);
analyser.connect(distortion);
distortion.connect(biquadFilter);
biquadFilter.connect(convolver);
convolver.connect(gainNode);
gainNode.connect(audioCtx.destination);
</pre>

<p>This would create an audio graph like this:</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/7949/voice-change-o-matic-graph.png" style="display: block; height: 563px; margin: 0px auto; width: 232px;">You can also link multiple nodes to one node, for example if you wanted to mix multiple audio sources together, passing them all through a single effect node, like a gain node.</p>

<div class="note">
<p><strong>Note</strong>: From Firefox 32 onwards, the integrated Firefox Developer Tools include a <a href="/en-US/docs/Tools/Web_Audio_Editor">Web Audio Editor</a>, which is very useful for debugging web audio graphs.</p>
</div>

<h3 id="Playing_our_sound_and_setting_a_pitch">Playing our sound and setting a pitch</h3>

<p>Now that the audio graph is set up, we can set property values and invoke methods on our audio nodes to adjust the effect they have on the sound. In this simple example we can set a specific pitch in hertz for our oscillator, set it to a specific type, and tell our sound to play like so:</p>

<pre class="brush: js">oscillator.type = 'sine'; // sine wave — other values are 'square', 'sawtooth', 'triangle' and 'custom'
oscillator.frequency.value = 2500; // value in hertz
oscillator.start();
</pre>

<p>In our Violent Theremin example we actually specify a max gain and frequency value:</p>

<pre class="brush: js">var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

var maxFreq = 6000;
var maxVol = 1;

var initialFreq = 3000;
var initialVol = 0.5;

// set options for the oscillator

oscillator.type = 'sine'; // sine wave — other values are 'square', 'sawtooth', 'triangle' and 'custom'
oscillator.frequency.value = initialFreq; // value in hertz
oscillator.start();

gainNode.gain.value = initialVol;
</pre>

<p>Then we set a new value of frequency and pitch every time the mouse cursor is moved, based on the current mouse X and Y value as a percetage of the maximum frequency and gain:</p>

<pre class="brush: js">// Mouse pointer coordinates

var CurX;
var CurY;

// Get new mouse pointer coordinates when mouse is moved
// then set new gain and putch values

document.onmousemove = updatePage;

function updatePage(e) {
    CurX = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
    CurY = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);

    oscillator.frequency.value = (CurX/WIDTH) * maxFreq;
    gainNode.gain.value = (CurY/HEIGHT) * maxVol;

    canvasDraw();
}
</pre>

<h3 id="A_simple_canvas_visualization">A simple canvas visualization</h3>

<p>A <code>canvasDraw()</code> function is also invoked after each mouse movement, this draws a little cluster of circles where the mouse pointer currently is, the size and colour of which are based on the frequency/gain values.</p>

<pre class="brush: js">function random(number1,number2) {
  var randomNo = number1 + (Math.floor(Math.random() * (number2 - number1)) + 1);
  return randomNo;
}

var canvas = document.querySelector('.canvas');
canvas.width = WIDTH;
canvas.height = HEIGHT;

var canvasCtx = canvas.getContext('2d');

function canvasDraw() {
  rX = CurX;
  rY = CurY;
  rC = Math.floor((gainNode.gain.value/maxVol)*30);

  canvasCtx.globalAlpha = 0.2;

  for(i=1;i&lt;=15;i=i+2) {
    canvasCtx.beginPath();
    canvasCtx.fillStyle = 'rgb(' + 100+(i*10) + ',' + Math.floor((gainNode.gain.value/maxVol)*255) + ',' + Math.floor((oscillator.frequency.value/maxFreq)*255) + ')';
    canvasCtx.arc(rX+random(0,50),rY+random(0,50),rC/2+i,(Math.PI/180)*0,(Math.PI/180)*360,false);
    canvasCtx.fill();
    canvasCtx.closePath();
  }
}</pre>

<h3 id="Muting_the_theremin">Muting the theremin</h3>

<p>When the Mute button is pressed, the function seen below is invoked, which disconnects the gain node from the destination node, effectively breaking the graph up so no sound can be produced. Pressing it again reverses the effect.</p>

<pre class="brush: js">var mute = document.querySelector('.mute');

mute.onclick = function() {
  if(mute.id == "") {
    gainNode.disconnect(audioCtx.destination);
    mute.id = "activated";
    mute.innerHTML = "Unmute";
  } else {
    gainNode.connect(audioCtx.destination);
    mute.id = "";
    mute.innerHTML = "Mute";
  }
}
</pre>

<h2 id="Other_node_options">Other node options</h2>

<p>There are many other nodes you can create using the Web Audio API, and the good news is that, in general, they work in the same way as what we have already seen: you create a node, connect it to the other nodes in the graph, and then manipulate that node's properties and methods to affect the sound source in the way you want.</p>

<p>We won't go through all of the available effects and so on; you can find details of how to use each one in the different interface reference pages of the {{ domxref("Web_Audio_API") }} reference. For now we'll just go through a couple of options.</p>

<h3 id="Wave_shaper_nodes">Wave shaper nodes</h3>

<p>You can create a wave shaper node using the {{ domxref("AudioContext.createWaveShaper") }} method:</p>

<pre class="brush: js">var distortion = audioCtx.createWaveShaper();
</pre>

<p>This object must then be fed a mathmatically defined wave shape, which is applied to the base sound wave to create a distortion effect. These waves are not that easy to figure out, and the best way to start is to just search the Web for algorithms. For example, we found this on <a href="http://stackoverflow.com/questions/22312841/waveshaper-node-in-webaudio-how-to-emulate-distortion">Stack Overflow</a>:</p>

<pre class="brush: js">function makeDistortionCurve(amount) {
  var k = typeof amount === 'number' ? amount : 50,
    n_samples = 44100,
    curve = new Float32Array(n_samples),
    deg = Math.PI / 180,
    i = 0,
    x;
  for ( ; i &lt; n_samples; ++i ) {
    x = i * 2 / n_samples - 1;
    curve[i] = ( 3 + k ) * x * 20 * deg / ( Math.PI + k * Math.abs(x) );
  }
  return curve;
};
</pre>

<p>In the Voice-change-O-matic demo, we connect the <code>distortion</code> node up to the audio graph, then apply this to the distortion node when needed:</p>

<pre class="brush: js">source.connect(analyser);
analyser.connect(distortion);
distortion.connect(biquadFilter);

...

distortion.curve = makeDistortionCurve(400);
</pre>

<h3 id="Biquad_filter">Biquad filter</h3>

<p>The biquad filter has a number of options available inside it, and is created using the {{ domxref("AudioContext.createBiquadFilter") }} method:</p>

<pre class="brush: js">var biquadFilter = audioCtx.createBiquadFilter();
</pre>

<p>The particular option used in the Voice-change-o-matic demo is a lowshelf filter, which basically provides a bass boost to the sound:</p>

<pre class="brush: js">biquadFilter.type = "lowshelf";
biquadFilter.frequency.value = 1000;
biquadFilter.gain.value = 25;
</pre>

<p>Here we specify the type of filter, a frequency value, and a gain value. In the case of a lowshelf filter, all frequencies below the specified frequency have their gain increased by 25 decibels.</p>

<h2 id="Other_things_inside_Web_Audio_API">Other things inside Web Audio API</h2>

<p>The Web Audio API can do many other things other than audio visualization and spatializations (e.g. panning sound). We will cover other options in further articles, as this one has become long enough already!</p>

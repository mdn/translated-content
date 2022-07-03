---
title: AudioProcessingEvent
slug: Web/API/AudioProcessingEvent
translation_of: Web/API/AudioProcessingEvent
---
<p>{{APIRef("Web Audio API")}}</p>

<div>
<p>The <a href="/ja/docs/Web_Audio_API" title="/en-US/docs/Web_Audio_API">Web Audio API</a> <code>AudioProcessingEvent</code> represents events that occur when a {{domxref("ScriptProcessorNode")}} input buffer is ready to be processed.</p>

<div class="note">
<p><strong>Note</strong>: As of the August 29 2014 Web Audio API spec publication, this feature has been marked as deprecated, and is soon to be replaced by <a href="/ja/docs/Web/API/Web_Audio_API#Audio_Workers">Audio Workers</a>.</p>
</div>
</div>

<h2 id="プロパティ">プロパティ</h2>

<p><em>The list below includes the properties inherited from its parent, {{domxref("Event")}}</em>.</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">プロパティ</th>
   <th scope="col">型</th>
   <th scope="col">説明</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>target</code> {{ReadOnlyInline}}</td>
   <td>{{domxref("EventTarget")}}</td>
   <td>The event target (the topmost target in the DOM tree).</td>
  </tr>
  <tr>
   <td><code>type</code> {{ReadOnlyInline}}</td>
   <td>{{domxref("DOMString")}}</td>
   <td>The type of event.</td>
  </tr>
  <tr>
   <td><code>bubbles</code> {{ReadOnlyInline}}</td>
   <td><code>boolean</code></td>
   <td>Does the event normally bubble?</td>
  </tr>
  <tr>
   <td><code>cancelable</code> {{ReadOnlyInline}}</td>
   <td><code>boolean</code></td>
   <td>Is it possible to cancel the event?</td>
  </tr>
  <tr>
   <td><code>playbackTime</code> {{ReadOnlyInline}}</td>
   <td><code>double</code></td>
   <td>The time when the audio will be played, as defined by the time of {{domxref("AudioContext.currentTime")}}</td>
  </tr>
  <tr>
   <td><code>inputBuffer</code> {{ReadOnlyInline}}</td>
   <td>{{domxref("AudioBuffer")}}</td>
   <td>The buffer containing the input audio data to be processed. The number of channels is defined as a parameter, <code>numberOfInputChannels</code>, of the factory method {{domxref("AudioContext.createScriptProcessor()")}}. Note the the returned <code>AudioBuffer</code> is only valid in the scope of the <code>onaudioprocess</code> function.</td>
  </tr>
  <tr>
   <td><code>outputBuffer</code> {{ReadOnlyInline}}</td>
   <td>{{domxref("AudioBuffer")}}</td>
   <td>The buffer where the output audio data should be written. The number of channels is defined as a parameter, <code>numberOfOutputChannels</code>, of the factory method {{domxref("AudioContext.createScriptProcessor()")}}. Note the the returned <code>AudioBuffer</code> is only valid in the scope of the <code>onaudioprocess</code> function.</td>
  </tr>
 </tbody>
</table>

<h2 id="Example">Example</h2>

<p>{{page("/en-US/docs/Web/API/AudioContext.createScriptProcessor","Example")}}</p>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('Web Audio API', '#the-audioprocessingevent-interface---deprecated', 'AudioProcessingEvent')}}</td>
   <td>{{Spec2('Web Audio API')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat("api.AudioProcessingEvent")}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/ja/docs/Web_Audio_API/Using_Web_Audio_API">Using the Web Audio API</a></li>
</ul>

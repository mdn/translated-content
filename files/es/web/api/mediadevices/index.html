---
title: MediaDevices
slug: Web/API/MediaDevices
tags:
  - API
  - Experimental
  - Interface
  - Media
  - MediaDevices
  - NeedsTranslation
  - TopicStub
translation_of: Web/API/MediaDevices
---
<div>{{APIRef("WebRTC")}}{{SeeCompatTable}}</div>

<p><span class="seoSummary">The <strong><code>MediaDevices</code></strong> interface provides access to connected media input devices like cameras and microphones, as well as screensharing.</span></p>

<h2 id="Properties">Properties</h2>

<p><em>None.</em></p>

<h2 id="Methods">Methods</h2>

<dl>
 <dt>{{ domxref("MediaDevices.getUserMedia()") }}</dt>
 <dd>With the user's permission through a prompt, turns on a camera or screensharing and/or a microphone on the system and provides a {{domxref("MediaStream")}} containing a video track and/or an audio track with the input.</dd>
 <dt>{{ domxref("MediaDevices.enumerateDevices()") }}</dt>
 <dd>Obtains an array of information about the media input and output devices available on the system.</dd>
</dl>

<h2 id="Example">Example</h2>

<pre class="brush:js">'use strict';

// Put variables in global scope to make them available to the browser console.
var video = document.querySelector('video');
var constraints = window.constraints = {
  audio: false,
  video: true
};
var errorElement = document.querySelector('#errorMsg');

navigator.mediaDevices.getUserMedia(constraints)
.then(function(stream) {
  var videoTracks = stream.getVideoTracks();
  console.log('Got stream with constraints:', constraints);
  console.log('Using video device: ' + videoTracks[0].label);
  stream.onended = function() {
    console.log('Stream ended');
  };
  window.stream = stream; // make variable available to browser console
  video.srcObject = stream;
})
.catch(function(error) {
  if (error.name === 'ConstraintNotSatisfiedError') {
    errorMsg('The resolution ' + constraints.video.width.exact + 'x' +
        constraints.video.width.exact + ' px is not supported by your device.');
  } else if (error.name === 'PermissionDeniedError') {
    errorMsg('Permissions have not been granted to use your camera and ' +
      'microphone, you need to allow the page access to your devices in ' +
      'order for the demo to work.');
  }
  errorMsg('getUserMedia error: ' + error.name, error);
});

function errorMsg(msg, error) {
  errorElement.innerHTML += '&lt;p&gt;' + msg + '&lt;/p&gt;';
  if (typeof error !== 'undefined') {
    console.error(error);
  }
}</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('Media Capture', '#mediadevices', 'MediaDevices')}}</td>
   <td>{{Spec2('Media Capture')}}</td>
   <td>Initial definition</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Browser compatibility</h2>

{{Compat("api.MediaDevices")}}

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/WebRTC" title="/en-US/docs/WebRTC">WebRTC</a> - the introductory page to the API</li>
 <li><a href="/en-US/docs/WebRTC/navigator.getUserMedia" title="/en-US/docs/WebRTC/navigator.getUserMedia">Navigator.getUserMedia()</a></li>
</ul>

---
title: AudioContext.decodeAudioData()
slug: Web/API/BaseAudioContext/decodeAudioData
tags:
  - API
translation_of: Web/API/BaseAudioContext/decodeAudioData
original_slug: Web/API/AudioContext/decodeAudioData
---

{{ APIRef("Web Audio API") }}

The `decodeAudioData()` method of the {{ domxref("AudioContext") }} Interface is used to asynchronously decode audio file data contained in an {{domxref("ArrayBuffer")}}. In this case the `ArrayBuffer` is usually loaded from an {{domxref("XMLHttpRequest")}}'s `response` attribute after setting the `responseType` to `arraybuffer`. The decoded AudioBuffer is resampled to the AudioContext's sampling rate, then passed to a callback or promise.

This is the preferred method of creating an audio source for Web Audio API from an audio track.

## Syntax

Older callback syntax:

```
audioCtx.decodeAudioData(audioData, function(decodedData) {
  // use the decoded data here
});
```

Newer promise-based syntax:

```
audioCtx.decodeAudioData(audioData).then(function(decodedData) {
  // use the decoded data here
});
```

## Example

In this section we will first cover the older callback-based system and then the newer promise-based syntax.

### Older callback syntax

In this example, the `getData()` function uses XHR to load an audio track, setting the `responseType` of the request to `arraybuffer` so that it returns an array buffer as its `response` that we then store in the `audioData` variable . We then pass this buffer into a `decodeAudioData()` function; the success callback takes the successfully decoded PCM data, puts it into an {{ domxref("AudioBufferSourceNode") }} created using {{ domxref("AudioContext.createBufferSource()") }}, connects the source to the {{domxref("AudioContext.destination") }} and sets it to loop.

The buttons in the example simply run `getData()` to load the track and start it playing, and stop it playing, respectively. When the `stop()` method is called on the source, the source is cleared out.

> **Примечание:** You can [run the example live](http://mdn.github.io/decode-audio-data/) (or [view the source](https://github.com/mdn/decode-audio-data).)

```js
// define variables

var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var source;

var pre = document.querySelector('pre');
var myScript = document.querySelector('script');
var play = document.querySelector('.play');
var stop = document.querySelector('.stop');

// use XHR to load an audio track, and
// decodeAudioData to decode it and stick it in a buffer.
// Then we put the buffer into the source

function getData() {
  source = audioCtx.createBufferSource();
  var request = new XMLHttpRequest();

  request.open('GET', 'viper.ogg', true);

  request.responseType = 'arraybuffer';


  request.onload = function() {
    var audioData = request.response;

    audioCtx.decodeAudioData(audioData, function(buffer) {
        source.buffer = buffer;

        source.connect(audioCtx.destination);
        source.loop = true;
      },

      function(e){"Error with decoding audio data" + e.err});

  }

  request.send();
}

// wire up buttons to stop and play audio

play.onclick = function() {
  getData();
  source.start(0);
  play.setAttribute('disabled', 'disabled');
}

stop.onclick = function() {
  source.stop(0);
  play.removeAttribute('disabled');
}


// dump script to pre element

pre.innerHTML = myScript.innerHTML;
```

### New promise-based syntax

```js
ctx.decodeAudioData(compressedBuffer).then(function(decodedData) {
 // use the decoded data here
});
```

## Parameters

- ArrayBuffer
  - : An ArrayBuffer containing the audio data to be decoded, usually grabbed from an {{domxref("XMLHttpRequest")}}'s `response` attribute after setting the `responseType` to `arraybuffer`.
- DecodeSuccessCallback
  - : A callback function to be invoked when the decoding successfully finishes. The single argument to this callback is an AudioBuffer representing the decoded PCM audio data. Usually you'll want to put the decoded data into an {{domxref("AudioBufferSourceNode")}}, from which it can be played and manipulated how you want.
- DecodeErrorCallback
  - : An optional error callback, to be invoked if an error occurs when the audio data is being decoded.

## Returns

An {{domxref("AudioBuffer") }} representing the decoded PCM audio data.

## Specifications

| Specification                                                                                                                                                                                                                                                                    | Status                               | Comment |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------- |
| {{SpecName('Web Audio API', '#widl-AudioContext-decodeAudioData-Promise-AudioBuffer--ArrayBuffer-audioData-DecodeSuccessCallback-successCallback-DecodeErrorCallback-errorCallback', 'decodeAudioData()')}} | {{Spec2('Web Audio API')}} |         |

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/ru/docs/Web_Audio_API/Using_Web_Audio_API)

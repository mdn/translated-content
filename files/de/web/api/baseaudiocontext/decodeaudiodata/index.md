---
title: AudioContext.decodeAudioData()
slug: Web/API/BaseAudioContext/decodeAudioData
translation_of: Web/API/BaseAudioContext/decodeAudioData
original_slug: Web/API/AudioContext/decodeAudioData
---
{{ APIRef("Web Audio API") }}

Die Methode decodeAudioData() im Interface {{ domxref("AudioContext") }} wird dazu benutzt um in einem {{ domxref("ArrayBuffer")}} enthaltene Audiodaten asynchron zu dekodieren. Im Normalfall wird der ArrayBuffer mit der {{domxref("XMLHttpRequest")}} `response` Eigenschaft befüllt, nachdem der `responseType` auf `arraybuffer gesetzt wurde`. Der dekodierte AudioBuffer wird auf die Samplerate des AudioContextes angepasst und anschließend an ein Callback oder Promise weitergegeben.

Dies ist die bevorzugte Methode im eine Audioquelle für die Web Audio API aus einem Audiotrack zu generieren.

## Syntax

Alte Callbacksyntax:

    audioCtx.decodeAudioData(audioData, function(decodedData) {
      // use the dec​oded data here
    });

Neue Promise basierte Syntax:

    audioCtx.decodeAudioData(audioData).then(function(decodedData) {
      // use the decoded data here
    });

## Beispiel

In diesem Abschnitt wird zuerst die ältere Callback basierte Syntax und anschließend die neue Promise basierte Syntax behandelt.

### Ältere Callbacksyntax

In diesem Beispiel nutzt die getData() Funktion XHR um einen Audiotrack zu laden, indem sie die responseType Eigenschaft setzt um einen ArrayBuffer als Antwort zu erhalten, welcher anschließend in der audioData variable gespeichert wird. Dieser Buffer wird nun an die decodeAudioData() Funktion übergeben; Das success Callback nutzt die erfolgreich dekodierten PCM Daten, erstellt einen {{ domxref("AudioBufferSourceNode") }} mit Hilfe von {{ domxref("AudioContext.createBufferSource()") }}, verbindet diese Quelle mit {{domxref("AudioContext.destination") }} und setzt den Schleifenmodus.

Die Buttons in diesem Beispiel rufen lediglich getData() um die Daten zu laden und die Wiedergabe zu starten, sowie stop() um die Wiedergabe anzuhalten auf. Wenn die stop() Methode der Quelle aufgerufen wird die Quelle geleert.

> **Note:** You can [run the example live](http://mdn.github.io/decode-audio-data/) (or [view the source](https://github.com/mdn/decode-audio-data).)

```js
// Variablen definieren

var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var source;

var pre = document.querySelector('pre');
var myScript = document.querySelector('script');
var play = document.querySelector('.play');
var stop = document.querySelector('.stop');

// Benutzt XHR um einen Track zu laden und
// decodeAudioData um diesen zu dekodieren und in einen Buffer zu kopieren.
// Anschließend wird der Buffer in eine Quelle kopiert.

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

// Buttons setzen um Wiedergabe zu starten und stoppen

play.onclick = function() {
  getData();
  source.start(0);
  play.setAttribute('disabled', 'disabled');
}

stop.onclick = function() {
  source.stop(0);
  play.removeAttribute('disabled');
}


// Script ausgeben

pre.innerHTML = myScript.innerHTML;
```

### Neue Promise basierte Syntax

```js
ctx.decodeAudioData(compressedBuffer).then(function(decodedData) {
 // Die dekodierten PCM Daten können hier verwendet werden
});
```

## Parameter

- ArrayBuffer
  - : Ein ArrayBuffer der die zu dekodierenden Daten enthält. Dieser wird normalerweise durch einen {{domxref("XMLHttpRequest")}} befüllt nachdem der `responseType` auf `arraybuffer gesetzt wurde`.
- DecodeSuccessCallback
  - : Ein Callback das aufgerufen wird wenn die Dekodierung erfolgreich abgeschlossen wird. Der einzige Parameter der an diese Funktion übergeben wird stellt einen AudioBuffer dar, der die dekodierten Audiodaten enthält. Normalerweise wird dieser Buffer an einen {{domxref("AudioBufferSourceNode")}} übergeben, von wo er wiedergeben und verändert werden kann.
- DecodeErrorCallback
  - : Ein optionales Callback das bei einem Fehler während der Dekodierung aufgerufen wird.

## Rückgabewerte

Ein {{domxref("AudioBuffer") }} der die dekodierten Audiodaten enthällt.

## Spezifikationen

| Spezifikation                                                                                                                                                                                                                                                                    | Status                               | Kommentar |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | --------- |
| {{SpecName('Web Audio API', '#widl-AudioContext-decodeAudioData-Promise-AudioBuffer--ArrayBuffer-audioData-DecodeSuccessCallback-successCallback-DecodeErrorCallback-errorCallback', 'decodeAudioData()')}} | {{Spec2('Web Audio API')}} |           |

## Browserunterstützung

{{Compat}}

## Siehe auch

- [Using the Web Audio API](/de/docs/Web_Audio_API/Using_Web_Audio_API)

---
title: AudioNode
slug: Web/API/AudioNode
translation_of: Web/API/AudioNode
---
{{ APIRef("Web Audio API") }}

Ein **`AudioNode`** ist eine generische Schnittstelle um ein Signalverarbeitungsmodul wie z.B. ein HTML {{HTMLElement("audio")}} or {{HTMLElement("video")}} Element, ein {{domxref("OscillatorNode")}}, die Audio Destination, ein zwischengeschaltenes audio-verarbeitendes Modul wie z.B. einen {{domxref("BiquadFilterNode")}} oder {{domxref("ConvolverNode")}}), oder Lautstärkeregler (like {{domxref("GainNode")}}).

![AudioNodes participating in an AudioContext create a audio routing graph.](https://mdn.mozillademos.org/files/9713/WebAudioBasics.png)

Ein `AudioNode` hat Ein- und Ausgänge, jeweils mit einer gegebenen Anzahl an Kanälen. Einen `AudioNode` ohne Eingänge und mit einem oder mehreren Ausgängen nennt man _source node_ (dt.: Quellknoten). Die Art der Signalverarbeitung in einem Audio Node variiert mit dessen Funktion. Der folgende Ablauf liegt jedoch immer zugrunde: das Signal am Eingang wird eingelesen, das Signal wird zu einem neuen Signal verarbeitet und an den Ausgang geleitet. In einigen Fällen, wir das Signal unverarbeitet durchgeschleust, so z.B. beim {{domxref("AnalyserNode")}}, wo das Resultat der Signalverarbeitung separat zugänglich ist.

Mehrere Nodes können zu einem _Processing Graph_ (dt.:Verarbeitungs-Netz) verbunden werden. Ein solcher Graph befindet sich immer in genau einem {{domxref("AudioContext")}}. Signal- verarbeitende Nodes erben die Eigenschaften und Methoden von `Audio Node`, implementieren aber auch eigene Funktionalität. Weitere Informationen geben die Seiten der speziellen `Audio Nodes`, die sie auf der Homepage der [Web Audio API](/de/docs/Web/API/Web_Audio_API) finden.

> **Note:** **Hinweis**: Ein `AudioNode` kann das Ziel von Events sein, und implementiert daher die {{domxref("EventTarget")}} Schnittstelle.

## Properties

- {{domxref("AudioNode.context")}} {{readonlyInline}}
  - : Liefert den assoziierten {{domxref("AudioContext")}}, der den signalverarbeitenden Graphen (processing graph) enthält, in den der Node eingebunden ist.

<!---->

- {{domxref("AudioNode.numberOfInputs")}} {{readonlyInline}}
  - : Liefert die Anzahl der Eingänge des Nodes. Source nodes (dt. Quellknoten) sind definiert als Nodes, deren `numberOfInputs` Eigenschaft einen Wert von `0 `aufweist.

<!---->

- {{domxref("AudioNode.numberOfOutputs")}} {{readonlyInline}}
  - : Liefert die Anzahl der Ausgänge des Nodes. Destination nodes (dt.: Zielknoten) — wie {{ domxref("AudioDestinationNode") }} — haben einen Wert von `0` für diese Eigenschaft.

<!---->

- {{domxref("AudioNode.channelCount")}}
  - : Represents an integer used to determine how many channels are used when [up-mixing and down-mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#Up-mixing_and_down-mixing) connections to any inputs to the node. Its usage and precise definition depend on the value of {{domxref("AudioNode.channelCountMode")}}.

<!---->

- {{domxref("AudioNode.channelCountMode")}}
  - : Represents an enumerated value describing the way channels must be matched between the node's inputs and outputs.
- {{domxref("AudioNode.channelInterpretation")}}
  - : Represents an enumerated value describing the meaning of the channels. This interpretation will define how audio [up-mixing and down-mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#Up-mixing_and_down-mixing) will happen.
    The possible values are `"speakers"` or `"discrete"`.

## Methods

_Also implements methods from the interface_ {{domxref("EventTarget")}}.

- {{domxref("AudioNode.connect(AudioNode)")}}
  - : Allows us to connect one output of this node to one input of another node.
- {{domxref("AudioNode.connect(AudioParam)")}}
  - : Allows us to connect one output of this node to one input of an audio parameter.
- {{domxref("AudioNode.disconnect()")}}
  - : Allows us to disconnect the current node from another one it is already connected to.

## Example

This simple snippet of code shows the creation of some audio nodes, and how the `AudioNode` properties and methods can be used. You can find examples of such usage on any of the examples linked to on the [Web Audio API](/de/docs/Web/API/Web_Audio_API) landing page (for example [Violent Theremin](https://github.com/mdn/violent-theremin).)

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;

var audioCtx = new AudioContext();

var oscillator = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();

oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

oscillator.context;
oscillator.numberOfInputs;
oscillator.numberOfOutputs;
oscillator.channelCount;
```

## Specifications

| Specification                                                                                | Status                               | Comment |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | ------- |
| {{SpecName('Web Audio API', '#the-audionode-interface', 'AudioNode')}} | {{Spec2('Web Audio API')}} |         |

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

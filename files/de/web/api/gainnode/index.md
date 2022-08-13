---
title: GainNode
slug: Web/API/GainNode
translation_of: Web/API/GainNode
---
{{ APIRef("Web Audio API") }}

Die `GainNode` Schnittstelle ermöglicht eine Verstärkung (engl. gain) eines Signals, was als veränderte Lautstärke wahrgenommen wird. Es handelt sich um ein {{domxref("AudioNode")}} audio-verarbeitendes Modul, das ein Eingabesignal mit einer gewissen Verstärkung (die auch negativ sein kann) versieht, und es an den Ausgang weiterleitet. Ein `GainNode` hat immer genau einen Eingang und einen Ausgang, beide mit derselben Anzahl an Kanälen.

Verstärkung ist ein Wert ohne Einheit, der sich über die Zeit ändert. Er wird mit allen zeitlich korrespondierenden Samples aller Eingangskanäle multipliziert, um das Signal zu verändern. Ändert sich der Wert, wird der neue Wert durch einen "de-zippering" Algorithmus angewendet, um unästhetisches Klick-Artifakte im Signal zu vermeiden.

![The GainNode is increasing the gain of the output.](https://mdn.mozillademos.org/files/5085/WebAudioGainNode.png)

| Anzahl der Eingänge | `1`                                      |
| ------------------- | ---------------------------------------- |
| Anzahl der Ausgänge | `1`                                      |
| Kanalzählmethode    | `"max"`                                  |
| Anzahl Kanäle       | `2` (not used in the default count mode) |
| Kanalinterpretation | `"speakers"`                             |

## Eigenschaften

_Inherits properties from its parent,_ _{{domxref("AudioNode")}}_.

- {{domxref("GainNode.gain")}} {{readonlyinline}}
  - : Ist ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}} der das Ausmaß der Verstärkung angibt.

## Methoden

_Keine spezifischen Methoden; erbt die Methoden der Elternklasse ,_ _{{domxref("AudioNode")}}_.

## Beispiel

{{page("/en-US/docs/Web/API/AudioContext.createGain","Example")}}

## Spezifikationen

| Specification                                                                                | Status                               | Comment |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | ------- |
| {{SpecName('Web Audio API', '#the-gainnode-interface', 'GainNode')}} | {{Spec2('Web Audio API')}} |         |

## Browser Kompatibilität

{{Compat}}

## Siehe auch

- [Die Web Audio API](/de/docs/Web_Audio_API/Using_Web_Audio_API) benutzen

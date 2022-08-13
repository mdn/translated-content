---
title: AudioDestinationNode
slug: Web/API/AudioDestinationNode
translation_of: Web/API/AudioDestinationNode
---
{{APIRef("Web Audio API")}}

Die `AudioDestinationNode` Schnittstelle repräsentiert das Ziel bzw. den Ausgang eines Audiographen in einem gegebenen Kontext — in der Regel die Lautsprecher. Es könnte aber auch ein Knoten _(Node)_ sein, der Audiodaten in einem `OfflineAudioContext `aufzeichnet.

`AudioDestinationNode` hat einen Eingang und keinen Ausgang (denn er ist der Ausgang, kein weiterer Audio Node kann verlinkt werden). Die Anzahl der Kanäle des Eingangs muss zwischen null und dem Wert von `maxChannelCount` liegen, sonst wird eine _Exception_ ausgelöst.

Der `AudioDestinationNode` eines gegebenen `AudioContext` kann über das {{domxref("AudioContext.destination")}} Attribut erzeugt bzw. empfangen werden.

| Anzahl Inputs        | `1`          |
| -------------------- | ------------ |
| Anzahl Outputs       | `0`          |
| Kanalzählmethode     | `"explicit"` |
| Kanal Anzahl         | `2`          |
| Kanal Interpretation | `"speakers"` |

## Eigenschaften

_erbt Eigenschaften von der Elternklasse,_ _{{domxref("AudioNode")}}_.

- {{domxref("AudioDestinationNode.maxChannelCount")}}
  - : Ist ein `unsigned long` der die maximale Kanalzahl definiert, die das physische Gerät bedienen kann.

## Methoden

_Keine spezifischen Methoden; erbt die Methoden der Elternklasse,_ _{{domxref("AudioNode")}}_.

## Beispiel

Das Benutzen des` AudioDestinationNode` ist per Design einfach gehalten — es repräsentiert den Ausgang des physikalischen Geräts (Lautsprecher), so dass man dieses mit ein paar Zeilen Code mit einem Audiographen verbinden kann:

```js
var audioCtx = new AudioContext();
var source = audioCtx.createMediaElementSource(myMediaElement);
source.connect(gainNode);
gainNode.connect(audioCtx.destination);
```

Für ein kompletteres Beispiel, sehen Sie sich eines unserer MDN Web Audio Beispiele, wie den [Voice-change-o-matic](http://mdn.github.io/voice-change-o-matic/) oder das [Violent Theremin](http://mdn.github.io/violent-theremin/) an.

## Spezifikationen

| Specification                                                                                                                | Status                               | Comment |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ------- |
| {{SpecName('Web Audio API', '#the-audiodestinationnode-interface', 'AudioDestinationNode')}} | {{Spec2('Web Audio API')}} |         |

## Browser Kompatibilität

{{Compat}}

## See also

- [Using the Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

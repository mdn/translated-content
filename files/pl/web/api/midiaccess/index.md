---
title: MIDIAccess
slug: Web/API/MIDIAccess
tags:
  - API
  - Interfejs
translation_of: Web/API/MIDIAccess
---
{{SeeCompatTable}}{{APIRef("Web MIDI API")}}

Interfejs **`MIDIAccess`** pochodzący z [Web MIDI API](/pl/docs/Web/API/Web_MIDI_API), dostarcza metod wyliczania urządzeń wejściowych i wyjściowych MIDI oraz dostępu do tych urządzeń.

## Właściwości

- {{domxref("MIDIAccess.inputs")}} {{readonlyinline}}
  - : Zwraca instancję {{domxref("MIDIInputMap")}} dostarczając metod dostępu do wszystkich dostępnych portów wejśiowych MIDI.
- {{domxref("MIDIAccess.outputs")}} {{readonlyinline}}
  - : Zwraca instancję {{domxref("MIDIOutputMap")}} dostarczając metod dostępu do wszystkich dostępnych portów wyjśiowych MIDI.
- {{domxref("MIDIAccess.sysexEnabled")}} {{readonlyinline}}
  - : Parametr zerojedynkowy, wskazujący na wsparcie system exclusive dla obecnej instancji MIDIAccess.

### Procedury obsługi zdarzeń

- {{domxref("MIDIAccess.onstatechange")}}
  - : Jest wywoływana za każdym razem, gdy nowy port MIDI zostaniedodany lub nastąpi zmiana stanu istniejącego portu.

## Przykłady

```js
navigator.requestMIDIAccess()
  .then(function(access) {

     // Get lists of available MIDI controllers
     const inputs = access.inputs.values();
     const outputs = access.outputs.values();

     access.onstatechange = function(e) {

       // Print information about the (dis)connected MIDI controller
       console.log(e.port.name, e.port.manufacturer, e.port.state);
     };
  });
```

## Specyfikacje

| Specyfikacja                                                         | Status                           | Komentarz          |
| -------------------------------------------------------------------- | -------------------------------- | ------------------ |
| {{SpecName('WebMIDI API','#midiaccess-interface')}} | {{Spec2('WebMIDI API')}} | Definicja wstępna. |

## Kompatybilność przeglądarek

{{Compat("api.MIDIAccess")}}

---
title: Navigator.vibrate()
slug: Web/API/Navigator/vibrate
translation_of: Web/API/Navigator/vibrate
---
{{APIRef("HTML DOM")}}

Die **`Navigator.vibrate()`**-Methode erzeugt eine Vibration, wenn entsprechende Hardware vorhanden ist. Wenn das Gerät keine Vibration unterstützt, hat diese Methode keine Auswirkungen. Wenn eine Vibration gestartet werden soll, aber eine andere Vibration noch ausgeführt wird, wird die Alte gestoppt und die Neue gestartet!

Wenn die Methode nicht ausgeführt werden konnte aufgrund eines ungültigen Parameters wird ein _false_ zurückgegeben, ansonsten ein _true_. Wenn das Modell zu lang ausgeführt wird, wird es abgeschnitten: die maximale Dauer ist je nach Implementierung abhängig!

## Syntax

    var successBool = window.navigator.vibrate(pattern);

- _pattern_
  - : Bietet ein Schema von Vibrationen und Vibrationsintervallen. Jeder Wert bezeichnet eine Anzahl an Millisekunden zum vibrieren und pausieren (im Wechsel). Sie bieten entweder einen einzelnen Wert (um einmal für so viele Millisekunden zu vibrieren) oder ein Array von Werten, um abwechselnd zu vibrieren, pausieren, dann wieder zu vibrieren. Siehe [Vibration API](/de/docs/WebAPI/Vibration) für weitere Details.

Wenn man 0 als Wert, einen leeren Array oder einen Array, der nur 0 als Wert(e) enthält, angibt wird die Vibration gestoppt.

## Beispiele

```js
window.navigator.vibrate(200); // vibriert 200ms lang
window.navigator.vibrate([100,30,100,30,100,200,200,30,200,30,200,200,100,30,100,30,100]); // vibriert 'SOS' im Morsecode
```

## Technische Daten

| Technische Daten                         | Status                               | Hinweis                                                            |
| ---------------------------------------- | ------------------------------------ | ------------------------------------------------------------------ |
| {{SpecName('Vibration API')}} | {{Spec2('Vibration API')}} | Linked to spec is the latest editor's draft; W3C version is a REC. |

## Browser-Kompatibilität

{{Compat}}

\[1] Wenn die Vibration zulang ist, das heißt der Wert selbst oder das Muster, wurde bis einschließlich Firefox 26 anstatt `false`, eine Fehlermeldung zurückgegeben ({{bug("884935")}}). Ab Firefox 32 wird `true` zurückgegeben, aber das Muster gekürzt ({{bug(1014581)}}).

## Weitere Informationen

- [Vibration API](/de/docs/WebAPI/Vibration)

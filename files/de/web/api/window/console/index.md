---
title: Window.console
slug: Web/API/Window/console
tags:
  - API
  - Eigenschaft
  - Referenz
  - Schreibgeschützt
  - Window
  - console
translation_of: Web/API/Window/console
---
{{ APIRef }}

Die **`Window.console`** Eigenschaft gibt eine Referenz des {{domxref("Console")}} Objects zurück, welches Methoden für das Loggen von Informationen in der Browser Konsole bietet. Diese Methoden sollten nur für das Debugging genutzt werden und nicht für das Darstellen von Informationen an Endnutzer.

## Syntax

    var consoleObj = window.console;

## Beispiele

### Zur Konsole loggen

Das erste Beispiel loggt text zur Konsole.

```js
console.log("Während dem Laden ist ein Fehler aufgetreten.");
```

Das nächste Beispiel loggt ein Objekt in der Konsole. Die Felder des Objekts können dabei ausgeklappt werden:

```js
console.dir(einObjekt);
```

Schau dir {{SectionOnPage("/de-DE/docs/Web/API/Console", "Nutzung")}} für weitere Beispiele an.

## Spezifikationen

| Spezifikation                        | Status                           | Kommentar               |
| ------------------------------------ | -------------------------------- | ----------------------- |
| {{SpecName('Console API')}} | {{Spec2('Console API')}} | Anfängliche Definition. |

> **Note:** Aktuell gibt es viele Unterschiede in der Implementation zwischen den verschiedenen Browsern. Dennoch wird aktuell daran gearbeitet, die Implementationen zusammen zu bringen und konsistenter zu machen.

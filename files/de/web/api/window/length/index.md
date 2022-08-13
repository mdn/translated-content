---
title: Window.length
slug: Web/API/Window/length
translation_of: Web/API/Window/length
---
{{ ApiRef() }}

Liefert die Anzahl an Frames ({{HTMLElement("frame")}} oder {{HTMLElement("iframe")}} elements) im aktuellen Fenster.

## Syntax

    framesCount = window.length;

- `framesCount` ist die Anzahl an Frames.

## Beispiel

```js
if (window.length) {
  // this is a document with subframes
}
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat("api.Window.length")}}

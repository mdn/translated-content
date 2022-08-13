---
title: Window.stop()
slug: Web/API/Window/stop
tags:
  - API
  - DOM
  - DOM_0
  - Method
  - stopwindowloading
translation_of: Web/API/Window/stop
---
{{APIRef}}

## Zusammenfassung

Diese Methode stoppt das Laden des Fensters.

## Syntax

    window.stop()

## Beispiel

```js
window.stop();
```

## Notizen

Die stop() Methode ist genau equivalent zum Klicken des Stop-Buttons im Browser. Aufgrund der Reihenfolge in der Scripte geladen werden, kann die stop() Methode nicht das Dokument, in dem es enthalten ist, vom Laden stoppen, aber es stoppt das Laden von großen Bildern, neuen Fenstern, und anderen Objekten, die verzögert geladen werden.

## Spezifikation

DOM Level 0. Kein Teil der Spezifikation.

## Compatibility

Die stop() Methode wird nicht vom Internet Explorer unterstützt.

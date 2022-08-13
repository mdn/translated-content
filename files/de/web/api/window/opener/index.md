---
title: Window.opener
slug: Web/API/Window/opener
translation_of: Web/API/Window/opener
---
{{APIRef}}

## Zusammenfassung

Gibt einen Hinweis auf das Fenster, welches das aktuelle Fenster öffnete.

## Schreibweise

    objRef = window.opener;

## Beispiel

```js
if (window.opener != indexWin) {
  referToTop(window.opener);
}
```

## Bemerkungen

Öffnet man ein Fenster aus einem anderen Fenster heraus (mittels {{domxref("Window.open")}} oder target='\_blank'), wird im neuen Fenster ein Bezug auf das ursprüngliche Fenster mit **window\.opener** aufrecht erhalten. Wurde das aktuelle Fenster nicht aus einem anderen Fenster geöffnet, wird NULL ausgegeben.

Der Browser in Windows Smartphones unterstützt window\.opener nicht (getestet mit Microsoft Edge 25.10586.36.0). Auch im Internet Explorer gibt es keine Unterstützung, wenn die Aktivität von einer anderen Sicherheitszone ausgeht.

---
title: '::-moz-progress-bar'
slug: Web/CSS/::-moz-progress-bar
tags:
  - CSS
  - CSS Referenz
  - NeedsCompatTable
  - NeedsLiveSample
  - Non-standard
translation_of: Web/CSS/::-moz-progress-bar
---
{{Non-standard_header}}{{CSSRef}}

## Übersicht

Das `::-moz-progress-bar` [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) betrifft den Bereich eines HTML {{HTMLElement("progress")}} Elements, der den erreichten Fortschritt darstellt. Dies erlaubt es beispielsweise, die Farbe von Fortschrittsbalken ändern.

Die Möglichkeiten, den Stil des Balkens anzupassen, sind recht groß. Dies kann besonders für unbestimmte Balken nützlich sein (über die {{cssxref(":indeterminate")}} [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes)), bei denen es möglich ist, die Darstellung grundlegend zu ändern; es können z. B. die Breite und die Positionierung des Balkens verändert werden. (Was die gesamten Ausmaße des Elements und seine Position meint, nicht nur den gefüllten Teil des Elements, wie im Screenshot unten verdeutlicht.)

## Beispiele

Dieses Beispiel gestaltet den Fortschrittszähler des Fortschrittbalkens mit der ID `redbar` in rot.

```css
#redbar::-moz-progress-bar {
  background-color: red;
}
```

Ein Balken, der diesen Stil verwendet, könnte so aussehen:

![Benutzerdefiniert gestalteter Fortschrittsbalken](/@api/deki/files/5387/=redbar.png)

## Siehe auch

- {{HTMLElement("progress")}}

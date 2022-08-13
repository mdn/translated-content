---
title: ':-moz-window-inactive'
slug: Web/CSS/:-moz-window-inactive
tags:
  - CSS
  - CSS Referenz
  - CSS:Mozilla Erweiterungen
  - NeedsBrowserCompatibility
  - NeedsLiveSample
  - NeedsMobileBrowserCompatibility
  - Non-standard
translation_of: Web/CSS/:-moz-window-inactive
---
{{CSSRef}}

## Übersicht

Die `:-moz-window-inactive` [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) matcht jedes Element während es sich in einem inaktivem Fenster befindet.

> **Hinweis:** Vor der Einführung dieser Pseudoklasse konnten andere Stile für Hintergrundfenster durch das Setzen eines Attributs (`active="true"`) für das Toplevel XUL Chromefenster erreicht werden. Dieses Attribut wird nicht mehr verwendet.

`:-moz-window-inactive` funktioniert auch in Inhalten von HTML Dokumenten.

## Beispiel

Dieses Beispiel verändert die Darstellung des Hintergrunds einer Box in Abhängigkeit davon, ob das Fenster aktiv ist oder nicht.

```html
<style type="text/css">
#mybox {
  background: linear-gradient(to bottom, blue, cyan);
}

#mybox:-moz-window-inactive {
  background: cyan;
}
</style>

<div id="mybox" style="width:200px; height:200px;">
  <p>Dies ist eine Box!</p>
</div>
```

Dieses Beispiel kann [als Livebeispiel betrachtet](/samples/cssref/moz-window-inactive.html) werden.

## Spezifikationen

Nicht Teil einer Spezifikation.

## Browser Kompatibilität

{{Compat("css.selectors.-moz-window-inactive")}}

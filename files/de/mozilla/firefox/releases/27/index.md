---
title: Firefox 27 für Entwickler
slug: Mozilla/Firefox/Releases/27
tags:
  - Firefox
translation_of: Mozilla/Firefox/Releases/27
---
{{FirefoxSidebar}}

Möchten Sie helfen Firefox 27 zu dokumentieren? Schauen Sie auf die [Liste von Bugs, über die geschrieben werden sollte](http://beta.elchi3.de/doctracker/#list=fx&version=27.0) und schreibe Sie dazu.

## Änderungen für Web-Entwickler

### HTML

_Keine Änderung._

### CSS

- Die Element `grab` und `grabbing` der Eigenschaft {{cssxref("cursor")}} sind nunmehr ohne Präfix (`-moz-grab` und `-moz-grabbing`).

### JavaScript

[EcmaScript 6](/de/docs/Web/JavaScript/ECMAScript_6_support_in_Mozilla) (Harmony) Implementierung wird fortgeführt!

- Der Harmony [Spread Operator](http://wiki.ecmascript.org/doku.php?id=harmony:spread) ist nun in der Funktion calls verfügbar. ({{bug("762363")}})

### Interfaces/APIs/DOM

_Keine Änderung._

### MathML

_Keine Änderung._

### SVG

_Keine Änderung._

## Veränderungen für AddOn- und Mozilla-Entwickler

- Der `downloads-indicator`-Button wurde entfernt. Das Element `downloads-button` sollte nun verwendet werden. Wenn Sie prüfen möchten, dass es seine Overlay geladen hat, überprüfen Sie das `indicator`-Attribut auf diesen Button .
- Das `chrome://browser/skin/downloads/indicator.css-`Stylesheet ist nicht länger in Firefox referenziert.
- [Seiten-Kompatibilität für Firefox 27](/de/docs/Mozilla/Firefox/Releases/27/Site_Compatibility)

### Ältere Versionen

{{Firefox_for_developers('26')}}
